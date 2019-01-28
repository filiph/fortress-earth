import 'dart:math';

import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/constants.dart';
import 'package:fortress_earth/src/neighborhood.dart';
import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

final _random = Random();

class Tile {
  final int roughness;
  final Vec pos;
  final Color backgroundColor;

  /// City that influences this tile.
  City closestCity;

  /// When foreground is not needed to show units, we create a shade
  /// of [backgroundColor] to show.
  final Color neutralForegroundColor;

  /// Currently stationed good units.
  int good;

  /// Currently stationed evil units.
  int evil;

  /// The current pressure on this tile. If `0`, this tile has exactly
  /// the amount of good units it needs. If positive, the situation
  /// could be improved. If negative, the tile could send some units elsewhere.
  ///
  /// This updates every time [updateGood] is called, at the end.
  ///
  /// It only depends on needs local to this tile. Contrast to
  /// [goodNeedGradient].
  int goodNeed = 0;

  /// Propagated need. When tile A has higher [goodNeedGradient] than tile B,
  /// then units should move from B to A.
  ///
  /// On every [updateGood], a set portion of neighbors'
  /// [goodNeedGradient]s are consumed by this tile (whether they are
  /// positive or negative). Moreover, this tile's [goodNeedGradient] is
  /// also incremented by the current [goodNeed].
  ///
  /// This way, tiles that are in trouble pump this information into the
  /// gradient.
  double goodNeedGradient = 0;

  /// How far from the nearest city this tile is.
  ///
  /// The higher the number, the harder it is to get material to this tile.
  double goodLogisticsGradient = 0;

  Tile(
    this.pos,
    this.roughness, {
    this.backgroundColor = Color.purple,
    this.good = 0,
    this.evil = 0,
  })  : assert(
            good == 0 || evil == 0, "Cannot have tile with both good and evil"),
        neutralForegroundColor =
            backgroundColor.blend(Color.black, 0.3 + _random.nextDouble() / 3);

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

  @override
  String toString() => 'Tile<'
      'x=${pos.x},y=${pos.y},'
      'good=$good,evil=$evil,roughness=$roughness,'
      'ocean=$isOcean'
      '>';

  void updateGood(Neighborhood hood) {
    if (isEvil) {
      // TODO: implement possible take over.
      return;
    }

    // Short-circuit ocean tiles: they can't update.
    if (isOcean) return;

    // Move with the need gradient.
    if (isGood) {
      final neediestTile = hood.neighbors.fold<Tile>(null, (prev, tile) {
        if (tile.isEvil || tile.isOcean) return prev;
        if (tile.closestCity != closestCity) return prev;
        if (tile.closestCity != null &&
            (tile.closestCity.pos - tile.pos).lengthSquared >
                maxDeploymentRange * maxDeploymentRange) {
          // No movement beyond max deployment range.
          return prev;
        }
        if (prev == null) return tile;
        if (tile.goodNeedGradient > prev.goodNeedGradient) return tile;
        return prev;
      });

      if (neediestTile != null &&
          neediestTile.goodNeedGradient > goodNeedGradient) {
        int contingent = good ~/ 2;
        if (hood.closestCity?.isInCompleteWithdrawal ?? false) {
          // Move everything if there are no more units in the closest city.
          contingent = good;
        }
        neediestTile.good += contingent;
        good -= contingent;
      }
    }

    if (hood.closestCity == null) return;

    // Now ask for reinforcements.
    good += hood.closestCity.requestUnits(this, hood);

    // Or offer good units back if we're at the place.
    good -= hood.closestCity.offerUnits(this, good);
  }

  void updateGoodNeed(Neighborhood hood) {
    goodNeed = 0;

    // First, compute need of this particular square.
    final neutralNeighbors = hood.neighbors.where((t) => t.isNeutral).length;
    if (isNeutral) {
      // Every neutral square automatically gets a goodNeed.
      goodNeed += 1;
      // Every neutral field surrounded by many good neighbors gets a boost.
      // This makes sure we're filling in the gaps.
      if (hood.neighborsWithGoodInThem.length > neutralNeighbors) {
        goodNeed += 5;
      }
    }

    if (isEvil) {
      goodNeed += (evil * dominanceCoefficient).ceil();
    }

    // Second, consider the hood (if there's many units around, we might not
    // need that many more.
    final hoodEvil = hood.evil.ceil();
    final hoodGood = hood.good.floor();
    // The evil of the hood is not as important as the one on this tile.
    const hoodCoefficient = 0.2;
    goodNeed += ((hoodEvil - hoodGood) * hoodCoefficient).floor();

    if (hood.closestCity != null && hood.closestCity.pos == pos) {
      // We're at the city tile. We might need lots of good if there's
      // unit deficit (e.g. a unit just left the city).
      goodNeed += hood.closestCity.unitDeficit;
    }
  }

  void updateGoodNeedGradient(Neighborhood hood) {
    final landNeighbors =
        hood.neighbors.where((t) => !t.isOcean).toList(growable: false);
    if (landNeighbors.length > 0) {
      final totalGoodNeedGradient = landNeighbors.fold<double>(
          0, (prev, tile) => prev + tile.goodNeedGradient);
      final average = totalGoodNeedGradient / landNeighbors.length;
      final maxNeedGradient = landNeighbors.fold<double>(
          0, (prev, tile) => max(prev, tile.goodNeedGradient));
      const spaceDecay = 0.8;
      goodNeedGradient += maxNeedGradient * spaceDecay;
    }

    // Re-pump local need into the gradient.
    goodNeedGradient += goodNeed;

    // Decay the gradient over time.
    const timeDecay = 0.5;
    goodNeedGradient *= timeDecay;
  }
}
