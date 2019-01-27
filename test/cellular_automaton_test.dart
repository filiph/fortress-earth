import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/tile.dart';
import 'package:fortress_earth/src/world.dart';
import 'package:piecemeal/piecemeal.dart';
import 'package:test/test.dart';

void main() {
  group('small flat 5x5 world without city', () {
    World world;

    const height = 20;

    setUp(() {
      world = World(5, 5, (v) => Tile(v, height), cities: []);
    });

    test('everything stays neutral', () {
      expect(world.tiles[Vec(3, 3)].isNeutral, isTrue);
      expect(world.tiles[Vec(3, 3)].isGood, isFalse);

      for (int i = 0; i < 1000; i++) {
        world.update();
      }

      expect(world.tiles[Vec(3, 3)].isNeutral, isTrue);
      expect(world.tiles[Vec(3, 3)].isGood, isFalse);
    });
  });

  group('small flat 5x5 world with city', () {
    World world;

    const height = 20;

    setUp(() {
      world =
          World(5, 5, (v) => Tile(v, height), cities: [City("SFO", Vec(0, 0))]);
    });

    test('good slowly overtakes', () {
      expect(world.tiles[Vec(3, 3)].isNeutral, isTrue);
      expect(world.tiles[Vec(3, 3)].isGood, isFalse);

      for (int i = 0; i < 1000; i++) {
        world.update();
      }

      expect(world.tiles[Vec(3, 3)].isNeutral, isFalse);
      expect(world.tiles[Vec(3, 3)].isGood, isTrue);
    });
  });
}
