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
  int good;
  int evil;

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
      assert(isNeutral);
      return neutralForegroundColor;
    }
  }

  bool get isEvil => evil > 0;

  bool get isGood => good > 0;

  bool get isNeutral => good == 0 && evil == 0;

  bool get isOcean => roughness == oceanRoughness;

  void updateFromNeighborhood(Neighborhood hood) {
    if (isEvil) {
      throw UnimplementedError();
    }

    // Short-circuit ocean tiles: they can't update.
    if (isOcean) return;

    // Move away from safety.
    if (hood.cardinalsWithGoodInThem == 4) {
      final candidateTile = hood.tileTowardsEnemy;
      if (!candidateTile.isOcean) {
        int contingent = good ~/ 2;
        candidateTile.good += contingent;
        good -= contingent;
      }
    }

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

    // Now ask for reinforcements.
    if (hood.closestCity == null) return;
    good += hood.closestCity.requestUnits(this, hood);
  }
}
