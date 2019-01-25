import 'dart:math';

import 'package:fortress_earth/src/constants.dart';
import 'package:fortress_earth/src/neighborhood.dart';
import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

final _random = Random();

class Tile {
  final int roughness;
  final Vec pos;
  final Color backgroundColor;

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

  int get diff => good - evil;

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

  bool get isEvil => evil > 0;

  bool get isGood => good > 0;

  bool get isNeutral => good == 0 && evil == 0 && !isOcean;

  bool get isOcean => roughness == oceanRoughness;

  @override
  String toString() => 'Tile<good=$good,evil=$evil,roughness=$roughness>';

  void updateGood(Neighborhood hood) {
    if (isEvil) {
      throw UnimplementedError();
    }

    // Short-circuit ocean tiles: they can't update.
    if (isOcean) return;

    // Take over neutral tiles.
    if (isNeutral &&
        hood.distanceSquaredToCity <= maxDeploymentRange * maxDeploymentRange) {
      // For a tile to be taken over, it must be adjacent to other good ones.
      final goodNeighbors = hood.neighborsWithGoodInThem;
      if (goodNeighbors.length > 0) {
        // The less neighbors, the smaller chance we'll take over this tile.
        if (_random.nextInt(8) < goodNeighbors.length) {
          for (final neighbor in goodNeighbors) {
            int contingent = neighbor.good ~/ 2;
            good += contingent;
            neighbor.good -= contingent;
          }
        }
      }
    }

    // Move with the need gradient.
    if (isGood && goodNeed < 0) {
      final neediestTile = hood.neighbors.fold<Tile>(null, (prev, tile) {
        if (!tile.isGood) return prev;
        if (prev == null) return tile;
        if (tile.goodNeedGradient > prev.goodNeedGradient) return tile;
        return prev;
      });

      if (neediestTile != null &&
          neediestTile.goodNeedGradient > goodNeedGradient) {
        int contingent = diff ~/ 2;
        neediestTile.good += contingent;
        good -= contingent;
      }
    }

    // Now ask for reinforcements.
    if (hood.closestCity == null) return;
    good += hood.closestCity.requestUnits(this, hood);
  }

  void updateGoodNeed(Neighborhood hood) {
    if (!isGood) {
      goodNeed = 0;
      return;
    }
    final neutralNeighbors = hood.neighbors.where((t) => t.isNeutral).length;
    final evil = hood.evil.ceil();
    final good = hood.good.floor();
    if (hood.goodIsWinning) {
      goodNeed = 1 + neutralNeighbors + evil - good;
      return;
    }

    // Evil is winning.
    goodNeed =
        1 + neutralNeighbors + ((evil - good) * dominanceCoefficient).ceil();
  }

  void updateGoodNeedGradient(Neighborhood hood) {
    final goodNeighbors = hood.neighborsWithGoodInThem;
    if (goodNeighbors.length > 0) {
      final totalGoodNeedGradient = goodNeighbors.fold<double>(
          0, (prev, tile) => prev + tile.goodNeedGradient);
      final average = totalGoodNeedGradient / goodNeighbors.length;
      const spaceDecay = 0.5;
      goodNeedGradient += average * spaceDecay;
    }

    // Re-pump local need into the gradient.
    goodNeedGradient += goodNeed;

    // Decay the gradient over time.
    const timeDecay = 0.5;
    goodNeedGradient *= timeDecay;
  }
}
