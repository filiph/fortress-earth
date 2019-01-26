import 'package:fortress_earth/src/constants.dart';
import 'package:fortress_earth/src/ui/dialogs/send.dart';
import 'package:fortress_earth/src/ui/input.dart';
import 'package:fortress_earth/src/ui/panels/chat_panel.dart';
import 'package:fortress_earth/src/ui/panels/cities_panel.dart';
import 'package:fortress_earth/src/ui/panels/units_panel.dart';
import 'package:fortress_earth/src/units.dart';
import 'package:fortress_earth/src/world.dart';
import 'package:malison/malison.dart';
import 'package:malison/malison_web.dart';
import 'package:piecemeal/piecemeal.dart';

class GameScreen extends Screen<Input> {
  final World world;

  final Units units;

  Stopwatch _stopwatch = Stopwatch();

  int _latestUpdateTime = 0;

  int _latestRenderTime = 0;

  final UnitPanel _unitPanel =
      UnitPanel(mapOffsetLeft + 50, mapOffsetTop + mapHeight - 6, 47, 13);

  final ChatPanel _chatPanel = ChatPanel(
      mapOffsetLeft,
      mapOffsetTop + mapHeight ~/ 1.7,
      32,
      height - (mapOffsetTop + mapHeight ~/ 1.7));

  final CitiesPanel _citiesPanel;

  bool _showNeedGradient = false;

  GameScreen(this.world, this.units)
      : _citiesPanel = CitiesPanel(mapOffsetLeft + mapWidth - 30,
            mapOffsetTop + mapHeight - 4, 30, 16, world.cities);

  void activate(Screen<Input> popped, Object result) {
    if (result == null) return;

    assert(result is SendDialogResult);
    assert(popped is SendDialog);

    final dialogResult = result as SendDialogResult;
    dialogResult.unit.setDestination(dialogResult.destination.pos);
  }

  bool handleInput(Input input) {
    switch (input) {
      case Input.pause:
        ui.running = !ui.running;
        break;

      case Input.send:
        // TODO: drop all verbs and dim them
        //       show: Send [WHICH UNIT] to [WHICH CITY]
        ui.push(SendDialog(world, units.units.values));
        break;

      case Input.debugNeedGradient:
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

    // Map.
    for (int x = 0; x < mapWidth; x++) {
      for (int y = 0; y < mapHeight; y++) {
        final screenX = mapOffsetLeft + x;
        final screenY = mapOffsetTop + y;
        final vec = Vec(x, y);
        final tile = world.tiles[vec];

        String char;
        Color foregroundColor;
        if (_showNeedGradient) {
          int index =
              ((tile.goodNeedGradient.clamp(-100, 100) + 100) / 20).floor();
          char = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9][index].toString();
        } else if (world.cities.containsKey(vec)) {
          char = '■';
          foregroundColor = Color.yellow;
        } else if (tile.isNeutral) {
          char = '░';
        } else {
          char = '▓';
        }
        if (foregroundColor == null) {
          foregroundColor = tile.foregroundColor;
        }

        terminal.writeAt(
          screenX,
          screenY,
          char,
          foregroundColor,
          tile.backgroundColor,
        );
      }
    }

    // Units on map.
    for (final unit in units.units.values) {
      terminal.drawChar(mapOffsetLeft + unit.pos.x, mapOffsetTop + unit.pos.y,
          unit.keyCode, Color.black, unit.color);
    }

    // Unit table / panel.
    _unitPanel.render(terminal);

    // Chat panel.
    _chatPanel.render(terminal);

    // Cities panel.
    _citiesPanel.render(terminal);

    // The verbs panel / menu.
    terminal.writeAt(38, height - 3,
        'Send   Command   Unleash   Inspect   Research         Menu');
    terminal.writeAt(38, height - 2,
        '▀      ▀         ▀         ▀         ▀                ▀   ', Color.gray  );

    final renderMilliseconds =
        (_latestRenderTime / 1000).toStringAsFixed(3).padLeft(6);
    final updateMilliseconds =
        (_latestUpdateTime / 1000).toStringAsFixed(3).padLeft(6);
    terminal.writeAt(width - 40, 0, "  render: ${renderMilliseconds}ms  ");
    terminal.writeAt(width - 20, 0, "  update: ${updateMilliseconds}ms  ");

    _latestRenderTime = _stopwatch.elapsedMicroseconds;
    _stopwatch.stop();
  }

  void update() {
    _stopwatch.reset();
    _stopwatch.start();

    world.update();
    units.update();

    dirty();

    _latestUpdateTime = _stopwatch.elapsedMicroseconds;
  }
}
