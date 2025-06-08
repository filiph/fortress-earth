import 'package:fortress_earth/src/armies.dart';
import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/simulation.dart';
import 'package:fortress_earth/src/tile.dart';
import 'package:fortress_earth/src/world.dart';
import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';
import 'package:test/test.dart';

void main() {
  group('small flat 5x5 world without city', () {
    late World world;
    late Simulation sim;
    Armies armies;

    const height = 20;

    setUp(() {
      world = World(5, 5, (v) => Tile(v, height), cities: []);
      armies = Armies.from([]);
      sim = Simulation(world, armies);
    });

    tearDown(() {
      sim.close();
    });

    test('everything stays neutral', () {
      expect(world.tiles[Vec(3, 3)].isNeutral, isTrue);
      expect(world.tiles[Vec(3, 3)].isGood, isFalse);

      for (int i = 0; i < 1000; i++) {
        sim.update();
      }

      expect(world.tiles[Vec(3, 3)].isNeutral, isTrue);
      expect(world.tiles[Vec(3, 3)].isGood, isFalse);
    });
  });

  group('small flat 5x5 world with city', () {
    late World world;
    late Simulation sim;
    late Armies armies;

    PlayerArmy army;

    const height = 20;

    setUp(() {
      world = World(
        5,
        5,
        (v) => Tile(v, height),
        cities: [City("SFO", Vec(0, 0))],
      );
      army = PlayerArmy('a'.codeUnitAt(0), 'Army', Color.blue)
        ..setDestination(Vec(0, 0));
      armies = Armies.from([army]);
      sim = Simulation(world, armies);
    });

    tearDown(() {
      sim.close();
    });

    test('good slowly overtakes', () {
      expect(world.tiles[Vec(3, 3)].isNeutral, isTrue);
      expect(world.tiles[Vec(3, 3)].isGood, isFalse);

      for (int i = 0; i < 1000; i++) {
        sim.update();
      }

      expect(world.tiles[Vec(3, 3)].isNeutral, isFalse);
      expect(world.tiles[Vec(3, 3)].isGood, isTrue);
    });

    test('good vs evil successfully runs', () {
      final evilArmy = EvilArmy("Pawns", initialPosition: Vec(3, 3));
      armies.evilArmies.add(evilArmy);

      expect(world.tiles[Vec(3, 3)].isNeutral, isTrue);
      expect(world.tiles[Vec(3, 3)].isGood, isFalse);

      for (int i = 0; i < 1000; i++) {
        sim.update();
      }

      expect(world.tiles[Vec(3, 3)].isNeutral, isFalse);
      expect(world.tiles[Vec(3, 3)].isEvil, isTrue);
    });
  });
}
