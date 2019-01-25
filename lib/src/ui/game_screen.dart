import 'package:fortress_earth/src/constants.dart';
import 'package:fortress_earth/src/world.dart';
import 'package:malison/malison.dart';
import 'package:malison/malison_web.dart';

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

      case "need-gradient":
        _showNeedGradient = !_showNeedGradient;
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
        var char = tile.isNeutral ? '░' : '▓';
        if (_showNeedGradient) {
          int index =
              ((tile.goodNeedGradient.clamp(-100, 100) + 100) / 20).floor();
          char = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9][index].toString();
        }
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

  bool _showNeedGradient = false;

  void update() {
    _stopwatch.reset();
    _stopwatch.start();

    world.update();

    dirty();

    _latestUpdateTime = _stopwatch.elapsedMicroseconds;
  }
}
