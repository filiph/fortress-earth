import 'dart:math';

import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/tile.dart';
import 'package:piecemeal/piecemeal.dart';

class Neighborhood {
  /// The discounted effect of intercardinal neighbours (being farther away
  /// than cardinal neighbors).
  static const double intercardinalDiscount = 1 / sqrt2;

  static const infiniteDistance = 0xFFFFFFFF;

  City get closestCity => center.closestCity;

  final int worldWidth;

  final int worldHeight;

  final Tile center;

  Vec get pos => center.pos;

  final List<Tile> _cardinalNeighbors;

  final List<Tile> _intercardinalNeighbors;

  Iterable<Tile> get neighbors =>
      _cardinalNeighbors.followedBy(_intercardinalNeighbors);

  Iterable<Tile> get sameCityNeighbors {
    if (closestCity == null) return neighbors;
    return neighbors.where((t) => t.closestCity == closestCity);
  }

  Neighborhood(
    this.center,
    this._cardinalNeighbors,
    this._intercardinalNeighbors,
    this.worldWidth,
    this.worldHeight,
  );

  int get availableUnits => closestCity?.availableUnits ?? 0;

  /// Returns the count of cardinal neighbors that are good.
  int get cardinalsWithGoodInThem =>
      _cardinalNeighbors.where((t) => t.isGood).length;

  /// Returns the count of neighbors that are good.
  List<Tile> get neighborsWithGoodInThem =>
      neighbors.where((t) => t.isGood).toList(growable: false);

  /// The difference between good and evil.
  ///
  /// If positive, `good` is stronger than `evil` in the neighborhood.
  double get diff => good - evil;

  int get distanceSquaredToCity {
    // TODO: toroidal wrapping
    if (closestCity == null) return infiniteDistance;
    return (pos - closestCity.pos).lengthSquared;
  }

  double get evil =>
      _cardinalNeighbors.map((t) => t.evil).fold(0, sum) +
      intercardinalDiscount *
          _intercardinalNeighbors.map((t) => t.evil).fold<int>(0, sum);

  double get good =>
      goodInCardinals +
      intercardinalDiscount *
          _intercardinalNeighbors.map((t) => t.good).fold<int>(0, sum);

  /// Sum of good units in cardinal neighbors.
  int get goodInCardinals => _cardinalNeighbors.map((t) => t.good).fold(0, sum);

  bool get goodIsWinning => good >= evil;

  Direction get towardsCity {
    if (closestCity == null) return Direction.none;
    // TODO: toroidal wrapping
    return (closestCity.pos - pos).nearestDirection;
  }

  Direction get towardsEnemy {
    // TODO: compute from hood (front line)

    if (towardsCity.length == 0) {
      // We're at a city tile.
      return Direction.all[_random.nextInt(Direction.all.length)];
    }

    return towardsCity.rotate180;
  }

  Tile get tileTowardsEnemy {
    final vec = _toroidalWrap(pos + towardsEnemy);
    return neighbors.where((t) => t.pos == vec).single;
  }

  Vec _toroidalWrap(Vec v) {
    int x = v.x;
    int y = v.y;
    // Y will put you on the other end
    if (y < 0) {
      y = 0;
      x += worldWidth ~/ 2;
    }
    if (y >= worldHeight) {
      y = worldHeight - 1;
      x += worldWidth ~/ 2;
    }
    // X is simply wrapped around.
    while (x < 0) x += worldWidth;
    while (x >= worldWidth) x -= worldWidth;

    return Vec(x, y);
  }

  static int sum(int a, int b) => a + b;
}

final _random = Random();
