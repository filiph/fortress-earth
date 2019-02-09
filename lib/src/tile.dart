import 'dart:math';

import 'package:fortress_earth/src/armies.dart';
import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/constants.dart';
import 'package:fortress_earth/src/neighborhood.dart';
import 'package:fortress_earth/src/pub_sub.dart';
import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

final _random = Random();

/// TODO: extract the `update*` methods to a separate `*System` classes.
///       (Because Tile should not depend on City / Army.
class Tile {
  final int roughness;
  final Vec pos;
  final Color backgroundColor;

  bool hasEvilCore = false;

  /// City that influences this tile.
  City closestCity;

  /// When foreground is not needed to show units, we create a shade
  /// of [backgroundColor] to show.
  final Color neutralForegroundColor;

  /// The current pressure on this tile. If `0`, this tile has exactly
  /// the amount of good units it needs. If positive, the situation
  /// could be improved. If negative, the tile could send some units elsewhere.
  ///
  /// This updates every time [updateUnits] is called, at the end.
  ///
  /// It only depends on needs local to this tile. Contrast to
  /// [_unitDemandGradient].
  final Map<Army, int> _unitDemand = Map<Army, int>();

  /// Propagated need. When tile A has higher [_unitDemandGradient] than tile B,
  /// then units should move from B to A.
  ///
  /// On every [updateUnits], a set portion of neighbors'
  /// [_unitDemandGradient]s are consumed by this tile (whether they are
  /// positive or negative). Moreover, this tile's [_unitDemandGradient] is
  /// also incremented by the current [_unitDemand].
  ///
  /// This way, tiles that are in trouble pump this information into the
  /// gradient.
  final Map<Army, double> _unitDemandGradient = Map<Army, double>();

  /// How far from the nearest city this tile is.
  ///
  /// The higher the number, the harder it is to get material to this tile.
  /// TODO: either use or remove
  double goodLogisticsGradient = 0;

  /// The number of units per each army on this tile.
  ///
  /// Every time you update this, don't forget to call [_updateGoodOrEvil].
  final Map<Army, int> _units = Map<Army, int>();

  /// Memoized number of good units on this tile.
  ///
  /// Otherwise, we'd need to count this through [_units] every time.
  int _good = 0;

  /// Memoized number of evil units on this tile.
  int _evil = 0;

  Tile(
    this.pos,
    this.roughness, {
    this.backgroundColor = Color.purple,
  }) : neutralForegroundColor =
            backgroundColor.blend(Color.black, 0.3 + _random.nextDouble() / 3);

  /// Just show the gradient of the evil army.
  double get debugEvilDemandGradient => _unitDemandGradient.entries
      .map((e) => e.key.isEvil ? e.value : 0)
      .fold(0, (a, b) => a + b);

  /// Currently stationed evil units.
  int get evil => _evil;

  Color get foregroundColor {
    if (isGood) {
      final value = 150 + (good * 10).clamp(0, 100);
      return Color(value, value, value);
    } else if (isEvil) {
      final value = 150 + (evil * 10).clamp(0, 100);
      return Color(value, value ~/ 2, value ~/ 2);
    } else {
      if (!(isNeutral || isOcean)) print(this);
      assert(
          isNeutral || isOcean, "Tile is not good or evil or neutral: $this");
      return neutralForegroundColor;
    }
  }

  /// Currently stationed good units.
  int get good => _good;

  bool get isEvil {
    assert(evil >= 0, "evil cannot be negative: $this");
    return evil > 0;
  }

  bool get isGood {
    assert(good >= 0, "good cannot be negative: $this");
    return good > 0;
  }

  bool get isNeutral => good == 0 && evil == 0 && !isOcean;

  bool get isOcean => roughness == oceanRoughness;

  /// Resets the demand for [army] on this tile.
  void clearDemand(Army army) {
    _unitDemand[army] = 0;
    _unitDemandGradient[army] = 0;
  }

  /// Returns `true` if this tile is already occupied by an opposing faction
  /// of [army].
  bool isEnemyFactionOccupied(Army army) {
    if (isOcean) return false;
    if (army.isEvil && isGood) return true;
    if (!army.isEvil && isEvil) return true;
    return false;
  }

  @override
  String toString() => 'Tile<'
      'x=${pos.x},y=${pos.y},'
      'good=$good,evil=$evil,roughness=$roughness,'
      'ocean=$isOcean'
      '>';

  void updateUnitDemand(Neighborhood hood, Army army) {
    // When withdrawing, nothing else matters.
    if (!army.isEvil &&
        (hood.closestCity?.isInCompleteWithdrawal(army) ?? false)) {
      if (hood.closestCity.pos == pos) {
        _unitDemand[army] = hood.closestCity.getUnitDeficit(army);
      } else {
        _unitDemand[army] = 0;
      }
      return;
    }

    int unitDemand = 0;

    // First, compute need of this particular square.
    final neutralNeighbors = hood.neighbors.where((t) => t.isNeutral).length;
    if (isNeutral) {
      // Every neutral square automatically gets a unitDemand.
      unitDemand += 1;
      // Every neutral field surrounded by many good neighbors gets a boost.
      // This makes sure we're filling in the gaps.
      if (hood.nonNeutralNeighbors.length > neutralNeighbors) {
        unitDemand += 5;
      }
    }

    // Try to match the opposing force.
    if (isEnemyFactionOccupied(army)) {
      final opposingForce = army.isEvil ? good : evil;
      unitDemand += (opposingForce * dominanceCoefficient).ceil();
    }

    // Second, consider the hood (if there's many units around, we might not
    // need that many more.
    final hoodEvil = hood.evil.ceil();
    final hoodGood = hood.good.floor();
    final threat = army.isEvil ? (hoodGood - hoodEvil) : (hoodEvil - hoodGood);
    // The evil of the hood is not as important as the one on this tile.
    const hoodCoefficient = 0.2;
    unitDemand += (threat * hoodCoefficient).floor();

    if (hood.closestCity != null && hood.closestCity.pos == pos) {
      if (!army.isEvil) {
        // We're at the city tile with a good unit. We might need lots of units
        // if there's unit deficit (e.g. an army just left the city).
        unitDemand += hood.closestCity.getUnitDeficit(army);
      } else {
        // Evil units love cities.
        unitDemand += 100;
      }
    }

    _unitDemand[army] = unitDemand;
  }

  void updateUnitDemandGradient(Neighborhood hood, Army army) {
    _unitDemandGradient[army] ??= 0;

    // Decay the gradient over time. (This tends to zero.)
    const timeDecay = 0.2;
    _unitDemandGradient[army] *= timeDecay;

    final landNeighbors =
        hood.neighbors.where((t) => !t.isOcean).toList(growable: false);
    if (landNeighbors.length > 0) {
      final maxNeedGradient = landNeighbors.fold<double>(
          0,
          (prev, tile) =>
              max(prev, tile._unitDemandGradient.putIfAbsent(army, () => 0)));
      const spaceDecay = 0.8;
      _unitDemandGradient[army] += maxNeedGradient * spaceDecay;
    }

    // Re-pump local need into the gradient.
    _unitDemandGradient[army] += _unitDemand[army];
  }

  void updateUnits(
      Neighborhood hood, Army army, DateTime currentTime, PubSub pubSub) {
    // Short-circuit ocean tiles: they can't update.
    if (isOcean) return;

    _units[army] ??= 0;
    if (_units[army] > 0) {
      final attacked = _updateUnitsByTryingAttack(hood, army, pubSub);
      if (!attacked) {
        _updateUnitsByMovingWithNeedGradient(hood, army);
      }
    }

    if (army.isEvil) {
      if (hasEvilCore && (army as EvilArmy).isGeneratingUnits(currentTime)) {
        const coreSpawn = 50;
        _units[army] += coreSpawn;
        _updateGoodOrEvil(true, coreSpawn);
      }
      return;
    }

    // Bail out if there's no closest city. In that case, nothing to do for
    // good units.
    if (hood.closestCity == null) return;

    // Now ask for reinforcements.
    final reinforcements = hood.closestCity.requestUnits(army, this, hood);
    _units[army] += reinforcements;
    _updateGoodOrEvil(false, reinforcements);

    // Or offer good units back if we're at the place.
    final withdrawals = hood.closestCity.offerUnits(army, this, _units[army]);
    _units[army] -= withdrawals;
    _updateGoodOrEvil(false, withdrawals);
  }

  int _getUnitSurplus(Army army) {
    final demand = _unitDemand[army] ?? 0;
    final actual = army.isEvil ? _evil : _good;
    return actual - demand;
  }

  /// Updates [_evil] or [_good], according to [isEvil].
  void _updateGoodOrEvil(bool isEvil, int difference) {
    if (isEvil) {
      _evil += difference;
    } else {
      _good += difference;
    }
  }

  /// Move with the need gradient, between non-enemy tiles.
  void _updateUnitsByMovingWithNeedGradient(Neighborhood hood, Army army) {
    final neediestTile = hood.neighbors.fold<Tile>(null, (prev, tile) {
      if (tile.isOcean) return prev;
      if (tile.isEnemyFactionOccupied(army)) return prev;
      // If this is player's army, do not cross city boundaries.
      if (!army.isEvil && tile.closestCity != closestCity) return prev;
      if (tile.closestCity != null &&
          (tile.closestCity.pos - tile.pos).lengthSquared >
              army.maxDeploymentRange * army.maxDeploymentRange) {
        // No movement beyond max deployment range.
        // TODO: check deployment range of army
        //       check that we're moving _beyond_ the range. Movement
        //       from outside _towards_ the deploy area is of course okay.
        return prev;
      }
      if (prev == null) return tile;
      prev._unitDemandGradient[army] ??= 0;
      tile._unitDemandGradient[army] ??= 0;
      if (tile._unitDemandGradient[army] > prev._unitDemandGradient[army])
        return tile;
      return prev;
    });

    _unitDemandGradient[army] ??= 0;
    if (neediestTile != null &&
        neediestTile._unitDemandGradient[army] > _unitDemandGradient[army]) {
      int contingent = _units[army] ~/ 2;
      if (!army.isEvil &&
          (hood.closestCity?.isInCompleteWithdrawal(army) ?? false)) {
        // Move everything if there are no more armies in the closest city.
        contingent = _units[army];
      }

      // Add units to the other tile.
      neediestTile._units[army] =
          neediestTile._units.putIfAbsent(army, () => 0) + contingent;
      neediestTile._updateGoodOrEvil(army.isEvil, contingent);

      // Remove units from here.
      _units[army] -= contingent;
      _updateGoodOrEvil(army.isEvil, -contingent);
    }
  }

  /// This function updates both this and the target tile, if any
  /// opportunity for attack is found. Returns `true` if attack took place.
  bool _updateUnitsByTryingAttack(Neighborhood hood, Army army, PubSub pubSub) {
    final unitSurplus = _getUnitSurplus(army).clamp(0, _units[army]);
    if (unitSurplus == 0) {
      // Don't attack if we're not meeting this tile's demand.
      return false;
    }

    final neutralTilesCount = hood.neighbors.where((t) => t.isNeutral).length;

    if (neutralTilesCount > 0) {
      // We don't attack when there is still room to capture without fighting.
      return false;
    }

    final friendlyTilesCount =
        hood.neighbors.where((t) => t.isEvil == army.isEvil).length;
    final enemyTiles = hood.neighbors
        .where((t) => t.isEnemyFactionOccupied(army))
        .toList(growable: false);

    if (enemyTiles.length == 0) {
      // Nothing to attack.
      return false;
    }

    if (enemyTiles.length > friendlyTilesCount) {
      // We don't attack when under pressure.
      return false;
    }

    // Sort tiles from least to most occupied.
    // TODO: just find the least without sorting everything
    enemyTiles.sort((a, b) => (a._good + a._evil).compareTo(b._good + b._evil));
    final targetTile = enemyTiles.first;
    // Since _good and _evil are mutually exclusive, this just gives the target
    // tile's strength, regardless of affiliation.
    final targetStrength = targetTile._good + targetTile._evil;

    if (unitSurplus <= targetStrength) {
      // Too weak to attack
      return false;
    }

    final targetLosses = targetStrength;
    final attackerStartingStrength = _units[army];
    final attackerLosses = targetLosses ~/ 2;
    final attackerStayBehind = 1;
    final attackerMoveForward =
        attackerStartingStrength - attackerLosses - attackerStayBehind;

    // Update this tile.
    _units[army] = attackerStayBehind;
    _updateGoodOrEvil(
        army.isEvil, attackerStayBehind - attackerStartingStrength);

    // Remove defenders from target tile.
    targetTile._units.updateAll((a, n) {
      if (n == 0) return 0;
      assert(a.isEvil != army.isEvil,
          "There was a friendly unit in attacked tile $targetTile");
      a.strength -= n;
      return 0;
    });
    targetTile._good = 0;
    targetTile._evil = 0;

    // Notify world that this tile has been taken over.
    pubSub.publishTileTakenOver(TileTakenOverEvent(targetTile, army.isEvil));

    // Add attackers to target tile.
    targetTile._units[army] = attackerMoveForward;
    targetTile._updateGoodOrEvil(army.isEvil, attackerMoveForward);

    return true;
  }
}
