import 'dart:math';

import 'package:fortress_earth/src/armies.dart';
import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/constants.dart';
import 'package:fortress_earth/src/neighborhood.dart';
import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

final _random = Random();

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

  /// Currently stationed evil units.
  int evil;

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
  final Map<Army, int> _units = Map<Army, int>();

  Tile(
    this.pos,
    this.roughness, {
    this.backgroundColor = Color.purple,
    this.evil = 0,
  }) : neutralForegroundColor =
            backgroundColor.blend(Color.black, 0.3 + _random.nextDouble() / 3);

  Color get foregroundColor {
    if (isGood) {
      final value = 150 + (unitsAll * 10).clamp(0, 100);
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

  bool get isEvil {
    assert(evil >= 0, "evil cannot be negative: $this");
    return evil > 0;
  }

  bool get isGood {
    assert(unitsAll >= 0, "good cannot be negative: $this");
    return unitsAll > 0;
  }

  bool get isNeutral => unitsAll == 0 && evil == 0 && !isOcean;

  bool get isOcean => roughness == oceanRoughness;

  /// Just show the gradient of a single army, the HQ.
  @deprecated
  double get unitDemandGradientDEBUG =>
      _unitDemandGradient[_unitDemandGradient.keys
          .singleWhere((a) => a.name == 'HQ', orElse: () => null)] ??
      0;

  /// Currently stationed good units.
  int get unitsAll => _units.values.fold(0, (a, b) => a + b);

  @override
  String toString() => 'Tile<'
      'x=${pos.x},y=${pos.y},'
      'good=$unitsAll,evil=$evil,roughness=$roughness,'
      'ocean=$isOcean'
      '>';

  void updateUnitDemand(Neighborhood hood, Army army) {
    int unitDemand = 0;

    // First, compute need of this particular square.
    final neutralNeighbors = hood.neighbors.where((t) => t.isNeutral).length;
    if (isNeutral) {
      // Every neutral square automatically gets a unitDemand.
      unitDemand += 1;
      // Every neutral field surrounded by many good neighbors gets a boost.
      // This makes sure we're filling in the gaps.
      if (hood.neighborsWithGoodInThem.length > neutralNeighbors) {
        unitDemand += 5;
      }
    }

    if (isEvil) {
      unitDemand += (evil * dominanceCoefficient).ceil();
    }

    // Second, consider the hood (if there's many units around, we might not
    // need that many more.
    final hoodEvil = hood.evil.ceil();
    final hoodGood = hood.good.floor();
    // The evil of the hood is not as important as the one on this tile.
    const hoodCoefficient = 0.2;
    unitDemand += ((hoodEvil - hoodGood) * hoodCoefficient).floor();

    if (hood.closestCity != null && hood.closestCity.pos == pos) {
      // We're at the city tile. We might need lots of units if there's
      // unit deficit (e.g. an army just left the city).
      unitDemand += hood.closestCity.getUnitDeficit(army);
    }
    _unitDemand[army] = unitDemand;
  }

  void updateUnitDemandGradient(Neighborhood hood, Army army) {
    _unitDemandGradient[army] ??= 0;
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

    // Decay the gradient over time.
    const timeDecay = 0.5;
    _unitDemandGradient[army] *= timeDecay;
  }

  void updateUnits(Neighborhood hood, Army army) {
    if (isEvil) {
      // TODO: implement possible take over.
      return;
    }

    // Short-circuit ocean tiles: they can't update.
    if (isOcean) return;

    // Move with the need gradient.
    _units[army] ??= 0;
    if (_units[army] > 0) {
      final neediestTile = hood.neighbors.fold<Tile>(null, (prev, tile) {
        if (tile.isEvil || tile.isOcean) return prev;
        if (tile.closestCity != closestCity) return prev;
        if (tile.closestCity != null &&
            (tile.closestCity.pos - tile.pos).lengthSquared >
                maxDeploymentRange * maxDeploymentRange) {
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
        if (hood.closestCity?.isInCompleteWithdrawal(army) ?? false) {
          // Move everything if there are no more armies in the closest city.
          contingent = _units[army];
        }

        neediestTile._units[army] =
            neediestTile._units.putIfAbsent(army, () => 0) + contingent;
        _units[army] -= contingent;
      }
    }

    if (hood.closestCity == null) return;

    // Now ask for reinforcements.
    _units[army] += hood.closestCity.requestUnits(army, this, hood);

    // Or offer good units back if we're at the place.
    _units[army] -= hood.closestCity.offerUnits(army, this, _units[army]);
  }
}
