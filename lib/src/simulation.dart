import 'dart:math';

import 'package:fortress_earth/src/armies.dart';
import 'package:fortress_earth/src/pub_sub.dart';
import 'package:fortress_earth/src/tile.dart';
import 'package:fortress_earth/src/world.dart';
import 'package:piecemeal/piecemeal.dart';

Random _random = Random();

class Simulation {
  final World world;

  final Armies armies;

  /// Send and receive events that other parts of the simulation should act on.
  final PubSub pubSub = PubSub();

  Simulation(this.world, this.armies) {
    pubSub.tileTakenOver.listen(_handleTileTakenOver);
    pubSub.seal();
  }

  /// Adds an enemy core to the map.
  ///
  /// If no place can be found, then the method will throw in debug mode
  /// and will have no effect in production.
  void addEnemyCore() {
    // Try
    Tile? tile;
    for (var i = 0; i < 100; i++) {
      var pos = Vec(
        _random.nextInt(world.mapWidth),
        _random.nextInt(world.mapHeight),
      );
      var candidate = world.tiles[pos];
      if (candidate.isOcean) continue;
      if (candidate.isGood) continue;
      if (candidate.isEvil) continue;
      tile = candidate;
    }
    assert(tile != null);
    // In production, just ignore the call.
    if (tile == null) return;

    var army = EvilArmy(
      "Arrivals",
      initialPosition: tile.pos,
      spawnTime: world.currentTime,
    );
    armies.evilArmies.add(army);
  }

  void close() {
    pubSub.close();
  }

  void update() {
    world.update(armies, pubSub);
    armies.update(world);
  }

  void _handleTileTakenOver(TileTakenOverEvent event) {
    for (final army in armies.armies) {
      // Mark overrun armies as dead.
      if (army.pos == event.tile.pos &&
          army.isEvil != event.winningFactionIsEvil) {
        army.isAlive = false;
      }
    }
  }
}
