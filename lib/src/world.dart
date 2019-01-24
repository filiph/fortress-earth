import 'dart:math';

import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/neighborhood.dart';
import 'package:fortress_earth/src/tile.dart';
import 'package:piecemeal/piecemeal.dart';

final _random = Random();

class World {
  final int mapWidth;
  final int mapHeight;

  Array2D<Tile> _tiles;

  final Map<Vec, City> _cities;

  World(this.mapWidth, this.mapHeight, Tile Function(Vec) generator,
      Iterable<City> cities)
      : _cities = Map.fromIterable(cities, key: (c) => c.pos) {
    _tiles = Array2D<Tile>.generated(mapWidth, mapHeight, generator);
  }

  Map<Vec, City> get cities => _cities;

  Array2D<Tile> get tiles => _tiles;

  void update() {
    for (int i = 0; i < 100; i++) {
      final x = _random.nextInt(mapWidth);
      final y = _random.nextInt(mapHeight);
      final vec = Vec(x, y);
      final current = _tiles[vec];
      if (current.isOcean) continue;
      final hood = _getNeighborhoodOf(vec);
      current.updateFromNeighborhood(hood);
    }
  }

  Neighborhood _getNeighborhoodOf(Vec center) {
    Tile getTileWrapped(Vec v) {
      final wrapped = _toroidalWrap(v);
      if (wrapped == null) return null;
      return _tiles[wrapped];
    }

    // TODO: toroidal distance
    // TODO(next): A* path, ideally pre-computed
    City closest;
    int closestDistance = 0xFFFFFFFF;
    for (final candidate in _cities.values) {
      final distance = (center - candidate.pos).lengthSquared;
      if (distance < closestDistance) {
        closest = candidate;
        closestDistance = distance;
      }
    }

    return Neighborhood(
      center,
      center.cardinalNeighbors
          .map(getTileWrapped)
          .where((t) => t != null)
          .toList(growable: false),
      center.intercardinalNeighbors
          .map(getTileWrapped)
          .where((t) => t != null)
          .toList(growable: false),
      closest,
    );
  }

  /// Wraps the vector to [mapWidth] and [mapHeight] toroidally.
  /// Returns `null` if [vec.y] is out of bounds.
  Vec _toroidalWrap(Vec vec) {
    var x = vec.x;
    var y = vec.y;
    if (y < 0 || y >= mapHeight) return null;
    while (x < 0) x = x + mapWidth;
    while (x >= mapWidth) x = x - mapWidth;
    return Vec(x, y);
  }
}
