import 'dart:html' as html;
import 'dart:math';

import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/constants.dart';
import 'package:fortress_earth/src/data/earth_terrain.dart';
import 'package:fortress_earth/src/tile.dart';
import 'package:fortress_earth/src/world.dart';
import 'package:malison/malison.dart';
import 'package:malison/malison_web.dart';
import 'package:piecemeal/piecemeal.dart';

final _random = Random();

void runGame(html.CanvasElement canvas) {
  final terminal = CanvasTerminal(width, height,
      Font('Menlo, Consolas', size: 14, w: 10, h: 14, x: 1, y: 11), canvas);
  final ui = UserInterface<String>(terminal);

  ui.keyPress.bind("animate", KeyCode.space);
  ui.keyPress.bind("profile", KeyCode.p);

  final world = World(
    mapWidth,
    mapHeight,
    (v) => Tile(v, getTerrainRoughness(v), backgroundColor: getTerrainColor(v)),
    [
      City("SFO", Vec(21, 15)),
      City("NYC", Vec(40, 13)),
      City("PAR", Vec(66, 12)),
      City("MOS", Vec(76, 10)),
      City("BEI", Vec(109, 13)),
      City("DEL", Vec(92, 18)),
    ],
  );

  ui.push(GameScreen(ui, world));

  ui.handlingInput = true;
  ui.running = true;
}

class GameScreen extends Screen<String> {
  final UserInterface<String> ui;

  final World world;

  Stopwatch _stopwatch = Stopwatch();

  int _latestUpdateTime = 0;

  int _latestRenderTime = 0;

  GameScreen(this.ui, this.world);

  bool handleInput(String input) {
    switch (input) {
      case "animate":
        ui.running = !ui.running;
        break;

      case "profile":
        profile();
        break;

      default:
        return false;
    }

    return true;
  }

  void profile() {
    ui.running = true;
    for (var i = 0; i < 1000; i++) {
      update();
      ui.refresh();
    }
  }

  void render(Terminal terminal) {
    _stopwatch.reset();
    _stopwatch.start();

    terminal.clear();

    // Top bar
    // terminal.writeAt(0, 0, "*" * terminal.width);

    // Bottom bar
    terminal.writeAt(0, terminal.height - 1, "═" * terminal.width);

    // Below-map bar
    terminal.writeAt(
        0, mapOffsetTop + world.tiles.height, '▀' * terminal.width);

    // Map.
    for (int x = mapOffsetLeft; x < mapOffsetLeft + world.tiles.width; x++) {
      for (int y = mapOffsetTop; y < mapOffsetTop + world.tiles.height; y++) {
        final tile = world.tiles.get(x, y);
        final char = tile.isNeutral ? '░' : '▓';
        terminal.writeAt(
          x,
          y,
          char,
          tile.foregroundColor,
          tile.backgroundColor,
        );
      }
    }

    // Cities.
    for (final cityVec in world.cities.keys) {
      terminal.writeAt(mapOffsetLeft + cityVec.x, mapOffsetTop + cityVec.y, 'X',
          Color.black, Color.yellow);
    }

    // List of cities.
    int y = mapOffsetTop + mapHeight + 2;
    for (final city in world.cities.values) {
      terminal.writeAt(width - 30, y, "${city.name} ${city.availableUnits}");
      y++;
    }

    final renderMilliseconds =
        (_latestRenderTime / 1000).toStringAsFixed(3).padLeft(6);
    final updateMilliseconds =
        (_latestUpdateTime / 1000).toStringAsFixed(3).padLeft(6);
    terminal.writeAt(5, height - 1, "  render: ${renderMilliseconds}ms  ");
    terminal.writeAt(30, height - 1, "  update: ${updateMilliseconds}ms  ");

    _latestRenderTime = _stopwatch.elapsedMicroseconds;
    _stopwatch.stop();
  }

  void update() {
    _stopwatch.reset();
    _stopwatch.start();

    world.update();

    dirty();

    _latestUpdateTime = _stopwatch.elapsedMicroseconds;
  }
}
