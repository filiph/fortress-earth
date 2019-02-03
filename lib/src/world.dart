import 'dart:math';

import 'package:fortress_earth/src/armies.dart';
import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/neighborhood.dart';
import 'package:fortress_earth/src/tile.dart';
import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

final _random = Random();

class World {
  static final defaultCities = [
    // From: http://www.freeworldmaps.net/cities/top50/top50-cities-world.png
    City("Los Angeles", Vec(22, 15)),
    City("New York", Vec(40, 13)),
    City("Paris", Vec(66, 12)),
    City("Moscow", Vec(76, 10)),
    City("Beijing", Vec(109, 13)),
    City("Delhi", Vec(92, 18)),
    City("Jakarta", Vec(105, 26)),
    City("Cairo", Vec(77, 17)),
    City("Kinshasa", Vec(70, 26)),
    City("Sao Paulo", Vec(49, 31)),
    City("Quito", Vec(37, 26)),
    City("Sydney", Vec(119, 35), keyCode: KeyCode.y),
  ];

  final int mapWidth;

  final int mapHeight;

  Array2D<Tile> _tiles;

  Map<Vec, City> _cities;

  World(this.mapWidth, this.mapHeight, Tile Function(Vec) generator,
      {Iterable<City> cities}) {
    _cities = Map.fromIterable(cities ?? defaultCities, key: (c) => c.pos);
    assert(() {
      final keyCodes = Set<int>();
      for (final city in _cities.values) {
        if (keyCodes.contains(city.keyCode)) return false;
        keyCodes.add(city.keyCode);
      }
      return true;
    }(), "Cities must have unique keyCode callsigns.");
    _tiles = Array2D<Tile>.generated(mapWidth, mapHeight, generator);
    _updateTilesWithClosestCities();
  }

  Map<Vec, City> get cities => _cities;

  Array2D<Tile> get tiles => _tiles;

  /// Resets demand fields for the given army.
  void clearDemand(Army army) {
    for (final tile in tiles) {
      tile.clearDemand(army);
    }
  }

  void update(Iterable<Army> armies) {
    for (int i = 0; i < 100; i++) {
      final x = _random.nextInt(mapWidth);
      final y = _random.nextInt(mapHeight);
      final vec = Vec(x, y);
      final current = _tiles[vec];
      if (current.isOcean) continue;
      final hood = _getNeighborhoodOf(current);
      for (final army in armies) {
        current.updateUnits(hood, army);
        current.updateUnitDemand(hood, army);
        current.updateUnitDemandGradient(hood, army);
      }
    }
  }

  Neighborhood _getNeighborhoodOf(Tile center) {
    Tile getTileWrapped(Vec v) {
      final wrapped = _toroidalWrap(v);
      if (wrapped == null) return null;
      return _tiles[wrapped];
    }

    return Neighborhood(
      center,
      center.pos.cardinalNeighbors
          .map(getTileWrapped)
          .where((t) => t != null)
          .toList(growable: false),
      center.pos.intercardinalNeighbors
          .map(getTileWrapped)
          .where((t) => t != null)
          .toList(growable: false),
      mapWidth,
      mapHeight,
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

  void _updateTilesWithClosestCities() {
    for (final tile in _tiles) {
      // TODO: toroidal distance
      // TODO(next): A* path, ideally pre-computed
      City closest;
      int closestDistance = 0xFFFFFFFF;
      for (final candidate in _cities.values) {
        final distance = (tile.pos - candidate.pos).lengthSquared;
        if (distance < closestDistance) {
          closest = candidate;
          closestDistance = distance;
        }
      }
      tile.closestCity = closest;
    }
  }
}
