import 'dart:math';

import 'package:fortress_earth/src/armies.dart';
import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/constants.dart';
import 'package:fortress_earth/src/neighborhood.dart';
import 'package:fortress_earth/src/pub_sub.dart';
import 'package:fortress_earth/src/tile.dart';
import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

final _random = Random();

class World {
  static final List<City> defaultCities = [
    // From: http://www.freeworldmaps.net/cities/top50/top50-cities-world.png
    City("Los Angeles", Vec(22, 15)),
    City("New York", Vec(39, 13)),
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

  DateTime _currentTime;

  final Array2D<Tile> _tiles;

  final Map<Vec, City> _cities;

  World(
    this.mapWidth,
    this.mapHeight,
    Tile Function(Vec) generator, {
    Iterable<City>? cities,
  }) : _cities = Map.fromIterable(
         cities ?? defaultCities,
         key: (dynamic c) => (c as City).pos,
       ),
       _currentTime = beginningOfPlay,
       _tiles = Array2D<Tile>.generated(mapWidth, mapHeight, generator) {
    assert(() {
      final keyCodes = <int>{};
      for (final city in _cities.values) {
        if (keyCodes.contains(city.keyCode)) return false;
        keyCodes.add(city.keyCode);
      }
      return true;
    }(), "Cities must have unique keyCode callsigns.");
    _updateTilesWithClosestCities();
  }

  Map<Vec, City> get cities => _cities;

  DateTime get currentTime => _currentTime;

  Array2D<Tile> get tiles => _tiles;

  /// Resets demand fields for the given army.
  void clearDemand(Army army) {
    print("Clearing demand for $army");
    for (final tile in tiles) {
      tile.clearDemand(army);
    }
  }

  void update(Armies armies, PubSub pubSub) {
    for (int i = 0; i < 100; i++) {
      final x = _random.nextInt(mapWidth);
      final y = _random.nextInt(mapHeight);
      final vec = Vec(x, y);
      final current = _tiles[vec];
      if (current.isOcean) continue;
      final hood = _getNeighborhoodOf(current);
      for (final army in armies.armies) {
        current.updateUnits(hood, army, currentTime, pubSub);
        current.updateUnitDemand(hood, army, armies);
        current.updateUnitDemandGradient(hood, army);
        current.updateUnitSafeDeployment(hood, army);
        current.updateUnitSafeDeploymentGradient(hood, army);
      }
    }

    _currentTime = _currentTime.add(timeStep);
  }

  Neighborhood _getNeighborhoodOf(Tile center) {
    Tile? getTileWrapped(Vec v) {
      final wrapped = _toroidalWrap(v);
      if (wrapped == null) return null;
      return _tiles[wrapped];
    }

    return Neighborhood(
      center,
      center.pos.cardinalNeighbors
          .map(getTileWrapped)
          .nonNulls
          .toList(growable: false),
      center.pos.intercardinalNeighbors
          .map(getTileWrapped)
          .nonNulls
          .toList(growable: false),
      mapWidth,
      mapHeight,
    );
  }

  /// Wraps the vector to [mapWidth] and [mapHeight] toroidally.
  /// Returns `null` if [vec.y] is out of bounds.
  Vec? _toroidalWrap(Vec vec) {
    var x = vec.x;
    var y = vec.y;
    if (y < 0 || y >= mapHeight) return null;
    while (x < 0) {
      x = x + mapWidth;
    }
    while (x >= mapWidth) {
      x = x - mapWidth;
    }
    return Vec(x, y);
  }

  void _updateTilesWithClosestCities() {
    for (final tile in _tiles) {
      // TODO: toroidal distance
      // TODO(next): A* path, ideally pre-computed
      City? closest;
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
