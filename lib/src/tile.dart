import 'dart:math';

import 'package:fortress_earth/src/armies.dart';
import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/constants.dart';
import 'package:fortress_earth/src/neighborhood.dart';
import 'package:fortress_earth/src/pub_sub.dart';
import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

final _random = Random();

/// Once we know the attack will succeed, this function returns the exact
/// results.
_FightResult _resolveSuccessfulAttack(
    int attackerStrength, int defenderStrength) {
  assert(attackerStrength >= defenderStrength);
  final targetLosses = defenderStrength;
  final attackerLosses = targetLosses ~/ 2;
  final attackerStayBehind = 1;
  return _FightResult(
    attackerStartingStrength: attackerStrength,
    defenderStartingStrength: defenderStrength,
    defenderLosses: targetLosses,
    attackerLosses: attackerLosses,
    attackerStayBehind: attackerStayBehind,
  );
}

/// TODO: extract the `update*` methods to a separate `*System` classes.
///       (Because Tile should not depend on City / Army.
class Tile {
  final int roughness;
  final Vec pos;
  final Color backgroundColor;

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

  /// Measures how correct it is for units of an [Army] to be at this tile.
  /// This changes when an army changes position, or changes [RangeMode].
  final Map<Army, int> _unitSafeDeployment = Map<Army, int>();

  /// Same as [_unitDemandGradient] but for [_unitSafeDeployment].
  final Map<Army, double> _unitSafeDeploymentGradient = Map<Army, double>();

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
      final value = 150 + (good * 10).clamp(0, 100).toInt();
      return Color(value, value, value);
    } else if (isEvil) {
      final value = 150 + (evil * 10).clamp(0, 100).toInt();
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
    _unitSafeDeployment[army] = 0;
    _unitSafeDeploymentGradient[army] = 0;
  }

  /// Just show the gradient of the evil army.
  double getDebugArmyDemandGradient(Army army) {
    return _unitSafeDeploymentGradient[army] ?? 0;
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

  /// [allArmies] are needed to target enemy army positions (enemy cores)
  void updateUnitDemand(Neighborhood hood, Army army, Armies allArmies) {
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

    // Increase demand when there are enemy armies here (e.g. evil core).
    final bool enemyArmiesOnThisTile = allArmies.armies
        .any((other) => other.isEvil != army.isEvil && other.pos == pos);
    if (enemyArmiesOnThisTile) {
      unitDemand += 50;
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
      if (army.isEvil) {
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

    if (pos.x == 39 && pos.y == 13) {
      // print("NYC!");
    }

    _units[army] ??= 0;

    // Die if army is dead.
    if (!army.isAlive && _units[army] > 0) {
      final dieCount = max(_units[army] ~/ 2, 1);
      assert(
          dieCount <= _units[army],
          "Tried to remove more units ($dieCount) "
          "then there are (${_units[army]}) of $army");
      _units[army] -= dieCount;
      army.bury(dieCount);
      _updateGoodOrEvil(army.isEvil, -dieCount);
    }

    if (_units[army] > 0) {
      // Withdraw when appropriate.
      if (!army.canExpandTo(hood.center) || !army.hasArrived) {
        _updateUnitsByMovingWithSafeDeploymentGradient(hood, army);
      } else {
        // Attack or move.
        final didAttack = _updateUnitsByTryingAttack(hood, army, pubSub);
        if (!didAttack) {
          _updateUnitsByMovingWithNeedGradient(hood, army);
        }
      }
    }

    // Spawn new units.
    if (army.isEvil) {
      if (army.pos == pos &&
          (army as EvilArmy).isGeneratingUnits(currentTime)) {
        const coreSpawn = 50;
        _units[army] += coreSpawn;
        army.maxStrength += coreSpawn;
        army.field(coreSpawn);
        _updateGoodOrEvil(true, coreSpawn);
      }
      return;
    }

    assert(army is PlayerArmy);
    final playerArmy = army as PlayerArmy;

    // Bail out if there's no closest city. In that case, nothing to do for
    // good units.
    if (closestCity == null) return;

    // Try invasion.
    final didInvade = _updateUnitsByTryingInvasion(playerArmy, pubSub);

    // Once we invaded, don't do another update.
    if (didInvade) return;

    // The following logic doesn't make sense for tiles that are owned
    // by enemy faction.
    if (isEnemyFactionOccupied(playerArmy)) return;

    // Now ask for reinforcements.
    final reinforcements = _requestUnits(playerArmy, closestCity, hood);
    _units[playerArmy] += reinforcements;
    _updateGoodOrEvil(false, reinforcements);

    // Or offer good units back if we're at the place.
    if (_units[playerArmy] > 0) {
      final withdrawals =
          _offerUnits(playerArmy, closestCity, _units[playerArmy]);
      _units[playerArmy] -= withdrawals;
      _updateGoodOrEvil(false, withdrawals);
    }
  }

  void updateUnitSafeDeployment(Neighborhood hood, Army army) {
    if (!army.canExpandTo(this)) {
      _unitSafeDeployment[army] = 0;
    } else {
      _unitSafeDeployment[army] = 10;
    }

    if (isEnemyFactionOccupied(army)) {
      _unitSafeDeployment[army] -= 1;
    }

    if (!army.isEvil &&
        (hood.closestCity?.isInCompleteWithdrawal(army) ?? false)) {
      if (hood.closestCity.pos == pos) {
        _unitSafeDeployment[army] += 10;
      }
      return;
    }
  }

  void updateUnitSafeDeploymentGradient(Neighborhood hood, Army army) {
    _unitSafeDeploymentGradient[army] ??= 0;

    // Decay the gradient over time. (This tends to zero.)
    const timeDecay = 0.2;
    _unitSafeDeploymentGradient[army] *= timeDecay;

    final landNeighbors =
        hood.neighbors.where((t) => !t.isOcean).toList(growable: false);
    if (landNeighbors.length > 0) {
      final maxNeedGradient = landNeighbors.fold<double>(
          0,
          (prev, tile) => max(prev,
              tile._unitSafeDeploymentGradient.putIfAbsent(army, () => 0)));
      const spaceDecay = 0.8;
      _unitSafeDeploymentGradient[army] += maxNeedGradient * spaceDecay;
    }

    // Re-pump local need into the gradient.
    _unitSafeDeploymentGradient[army] += _unitSafeDeployment[army];
  }

  /// TODO: move to army
  int _computeAndSubtractGiven(Army army, int requested) {
    final willingToGive = min(army.availableStrength, army.maxUnitsPerRequest);
    final given = min(willingToGive.round(), requested);
    army.field(given);
    return given;
  }

  int _getUnitSurplus(Army army) {
    final demand = _unitDemand[army] ?? 0;
    final actual = army.isEvil ? _evil : _good;
    return actual - demand;
  }

  /// Offer at most [offeredUnits] units to an army in [city].
  ///
  /// This method will return the number of [Tile.good] that it will take.
  /// This method is _not_ responsible for subtracting it.
  int _offerUnits(PlayerArmy army, City city, int offeredUnits) {
    // Only city tiles can take back units.
    if (city.pos != pos) return 0;

    if (army.deployedAt == city) return 0;

    final takenBack = min(offeredUnits, army.fieldedUnits);
    army.withdraw(takenBack);
    return takenBack;
  }

  /// Claims units that then cannot be available elsewhere.
  int _requestUnits(PlayerArmy army, City city, Neighborhood hood) {
    // Evil tiles cannot request units.
    if (isEvil) return 0;

    // Armies in flight cannot offer units.
    if (!army.hasArrived) return 0;

    // Tiles around cities can get units if available.
    if (army.canDisembarkTo(hood.pos)) {
      final request = hood.evil.ceil() + 10;
      final distance = (hood.pos - pos).length;
      final distanceModifiedRequest = request / (1 + distance);
      return _computeAndSubtractGiven(army, distanceModifiedRequest.round());
    }

    // By default, we don't give any units.
    return 0;
  }

  /// Updates [_evil] or [_good], according to [isEvil].
  void _updateGoodOrEvil(bool isEvil, int difference) {
    if (isEvil) {
      _evil += difference;
    } else {
      _good += difference;
    }
  }

  void _updateTileAfterBeingTakenOver(
      Army army, PubSub pubSub, _FightResult result) {
    _units.updateAll((a, n) {
      if (n == 0) return 0;
      assert(a.isEvil != army.isEvil,
          "There was a friendly unit in attacked tile $this");
      a.bury(n);
      return 0;
    });
    _good = 0;
    _evil = 0;

    // Notify world that this tile has been taken over.
    pubSub.publishTileTakenOver(TileTakenOverEvent(this, army.isEvil));

    // Add attackers to target tile.
    _units[army] = result.attackerMoveForward;
    _updateGoodOrEvil(army.isEvil, result.attackerMoveForward);
  }

  /// Move with the need gradient, between non-enemy tiles.
  void _updateUnitsByMovingWithNeedGradient(Neighborhood hood, Army army) {
    assert(army.canExpandTo(hood.center));
    final neediestTile = hood.neighbors.fold<Tile>(null, (prev, tile) {
      if (tile.isOcean) return prev;
      if (tile.isEnemyFactionOccupied(army)) return prev;
      if (!army.canExpandTo(tile)) {
        // No movement beyond max deployment range.
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
      if (!army.canExpandTo(hood.center)) {
        // Move everything if the unit is out of army range.
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

  void _updateUnitsByMovingWithSafeDeploymentGradient(
      Neighborhood hood, Army army) {
    final safestTile = hood.neighbors.fold<Tile>(null, (prev, tile) {
      if (tile.isOcean) return prev;
      if (tile.isEnemyFactionOccupied(army)) return prev;
      if (prev == null) return tile;
      prev._unitSafeDeploymentGradient[army] ??= 0;
      tile._unitSafeDeploymentGradient[army] ??= 0;
      if (tile._unitSafeDeploymentGradient[army] >
          prev._unitSafeDeploymentGradient[army]) return tile;
      return prev;
    });

    _unitSafeDeploymentGradient[army] ??= 0;
    if (safestTile != null &&
        safestTile._unitSafeDeploymentGradient[army] >
            _unitSafeDeploymentGradient[army]) {
      int contingent = _units[army];

      // Add units to the other tile.
      safestTile._units[army] =
          safestTile._units.putIfAbsent(army, () => 0) + contingent;
      safestTile._updateGoodOrEvil(army.isEvil, contingent);

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
        .where((t) => t.isEnemyFactionOccupied(army) && army.canExpandTo(t))
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
    final defenderTile = enemyTiles.first;
    // Since _good and _evil are mutually exclusive, this just gives the target
    // tile's strength, regardless of affiliation.
    final defenderStrength = defenderTile._good + defenderTile._evil;

    if (unitSurplus <= defenderStrength) {
      // Too weak to attack
      return false;
    }

    // TODO: allow all armies on one tile to attack at once, not just [army] here
    var result = _resolveSuccessfulAttack(_units[army], defenderStrength);

    // Update this tile.
    _units[army] = result.attackerStayBehind;
    _updateGoodOrEvil(
        army.isEvil,
        // The difference between the original strength on this tile
        // and the resulting one (after some attackers die and others
        // move forward).
        result.attackerStayBehind - result.attackerStartingStrength);

    // Remove defenders, add attackers, and notify via pubsub.
    defenderTile._updateTileAfterBeingTakenOver(army, pubSub, result);

    return true;
  }

  /// Try invading the tile from above.
  bool _updateUnitsByTryingInvasion(PlayerArmy army, PubSub pubSub) {
    if (!isEnemyFactionOccupied(army)) return false;
    if (!army.canDisembarkTo(pos)) return false;

    if (army.availableStrength == 0) return false;

    final force = min(army.maxUnitsPerInvasion, army.availableStrength);

    // TODO: allow invasion on stronger tiles, leading to attacker losses
    if (force <= evil) return false;

    final result = _resolveSuccessfulAttack(force, evil);

    // Remove defenders from target tile.
    _updateTileAfterBeingTakenOver(army, pubSub, result);

    return true;
  }
}

class _FightResult {
  final int defenderLosses;
  final int attackerStartingStrength;
  final int defenderStartingStrength;
  final int attackerLosses;
  final int attackerStayBehind;
  _FightResult(
      {this.attackerStartingStrength,
      this.defenderStartingStrength,
      this.defenderLosses,
      this.attackerLosses,
      this.attackerStayBehind});

  int get attackerMoveForward =>
      attackerStartingStrength - attackerLosses - attackerLosses;
}
