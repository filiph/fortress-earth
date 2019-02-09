import 'package:fortress_earth/src/armies.dart';
import 'package:fortress_earth/src/pub_sub.dart';
import 'package:fortress_earth/src/world.dart';

class Simulation {
  final World world;

  final Armies armies;

  /// Send and receive events that other parts of the simulation should act on.
  final PubSub pubSub = PubSub();

  Simulation(this.world, this.armies) {
    pubSub.tileTakenOver.listen(_handleTileTakenOver);
    pubSub.seal();
  }

  void update() {
    world.update(armies.armies, pubSub);
    armies.update(world);
  }

  void close() {
    pubSub.close();
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
