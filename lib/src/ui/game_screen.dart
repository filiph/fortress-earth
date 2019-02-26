import 'dart:collection';
import 'dart:math';

import 'package:fortress_earth/src/armies.dart';
import 'package:fortress_earth/src/constants.dart';
import 'package:fortress_earth/src/shared_state.dart';
import 'package:fortress_earth/src/simulation.dart';
import 'package:fortress_earth/src/ui/audio.dart';
import 'package:fortress_earth/src/ui/dialogs/army_actions_dialog.dart';
import 'package:fortress_earth/src/ui/input.dart';
import 'package:fortress_earth/src/ui/panels/armies_panel.dart';
import 'package:fortress_earth/src/ui/panels/chat_panel.dart';
import 'package:fortress_earth/src/ui/panels/cities_panel.dart';
import 'package:malison/malison.dart';
import 'package:malison/malison_web.dart';
import 'package:piecemeal/piecemeal.dart';

class GameScreen extends Screen<Input> {
  final void Function() fullscreenCallback;

  Stopwatch _stopwatch = Stopwatch();

  int _latestUpdateTime = 0;

  int _latestRenderTime = 0;

  double _gradientLowClamp = 0;

  double _gradientHighClamp = 1;

  UnitPanel _unitPanel;

  final ChatPanel _chatPanel = ChatPanel(
      mapOffsetLeft,
      mapOffsetTop + mapHeight ~/ 1.7,
      32,
      height - (mapOffsetTop + mapHeight ~/ 1.7));

  final CitiesPanel _citiesPanel;

  bool _showNeedGradient = false;

  bool _showFramerate = false;

  final UISharedState state;

  final Simulation sim;

  final List<PlayerArmy> _selectedArmies = [];

  GameScreen(this.sim, this.state, {this.fullscreenCallback})
      : _citiesPanel = CitiesPanel(mapOffsetLeft + mapWidth - 30,
            mapOffsetTop + mapHeight - 4, 30, 16, sim.world.cities, state) {
    _unitPanel = UnitPanel(mapOffsetLeft + 50, mapOffsetTop + mapHeight - 2, 47,
        14, sim.armies, UnmodifiableListView<PlayerArmy>(_selectedArmies));
  }

  void activate(Screen<Input> popped, Object result) {
    if (result == null) {
      _selectedArmies.clear();
      return;
    }
    assert(popped is ArmyActionsDialog);

    if (result is GoDialogResult) {
      for (final army in result.armies) {
        army.setDestination(result.destination.pos);
        sim.world.clearDemand(army);
      }
      _selectedArmies.clear();
    } else if (result is ModeDialogResult) {
      print("changed mode of ${result.armies} to ${result.rangeMode}");
      for (final army in result.armies) {
        army.setRangeMode(result.rangeMode);
        sim.world.clearDemand(army);
      }
      _selectedArmies.clear();
    } else {
      throw UnimplementedError('$result');
    }
  }

  bool handleInput(Input input) {
    switch (input) {
      case Input.pause:
        ui.running = !ui.running;
        break;

      case Input.fullscreen:
        if (fullscreenCallback != null) fullscreenCallback();
        break;

      case Input.sound:
        switchAudioOnOff();
        break;

      case Input.debugNeedGradient:
        _showNeedGradient = !_showNeedGradient;
        break;

      case Input.debugShowFramerate:
        _showFramerate = !_showFramerate;
        break;

      case Input.debugAddCore:
        sim.addEnemyCore();
        break;

      default:
        return false;
    }

    return true;
  }

  bool keyDown(int keyCode, {bool shift, bool alt}) {
    var army = _getArmyFromKeyCode(keyCode);
    if (army != null) {
      assert(_selectedArmies.isEmpty);
      _selectedArmies.add(army);
      ui.push(ArmyActionsDialog(
        50,
        mapOffsetTop + mapHeight - 6,
        sim.world,
        // The initial list of armies starts with one.
        UnmodifiableListView(_selectedArmies),
        state,
        (additionalKeyCode) {
          var additional = _getArmyFromKeyCode(additionalKeyCode);
          if (additional == null) {
            return false;
          }
          if (_selectedArmies.contains(additional)) {
            _selectedArmies.remove(additional);
          } else {
            _selectedArmies.add(additional);
          }
          return true;
        },
      ));
      audioPlayer.bleep();
      return true;
    }

    print("unhandled keyDown: $keyCode (${String.fromCharCode(keyCode)})");
    return false;
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
        final tile = sim.world.tiles[vec];

        String char;
        Color foregroundColor;
        Color backgroundColor = tile.backgroundColor;
        if (_showNeedGradient) {
          //double value = tile.debugEvilDemandGradient;
          double value = tile.getDebugArmyDemandGradient(
              sim.armies.playerArmies[KeyCode.zero]);
          _gradientLowClamp = min(value, _gradientLowClamp);
          _gradientHighClamp = max(value, _gradientHighClamp);
          double normalized =
              _normalizeValue(value, _gradientLowClamp, _gradientHighClamp);
          int index = (normalized * 10).floor();
          char = const [0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9][index].toString();
        } else if (sim.world.cities.containsKey(vec)) {
          if (state.citiesPanelActive) {
            char = String.fromCharCode(sim.world.cities[vec].keyCode)
                .toUpperCase();
            foregroundColor = Color.black;
            backgroundColor = tile.isEvil ? Color.red : Color.yellow;
          } else {
            char = '■';
            foregroundColor = tile.isEvil ? Color.red : Color.yellow;
          }
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
          backgroundColor,
        );
      }
    }

    // Evil armies on map.
    for (final army in sim.armies.evilArmies) {
      if (!army.isAlive) continue;
      terminal.drawChar(mapOffsetLeft + army.pos.x, mapOffsetTop + army.pos.y,
          'X'.codeUnitAt(0), Color.black, army.color);
    }

    // Player armies on map.
    for (final army in sim.armies.playerArmies.values) {
      if (!army.isAlive) continue;
      terminal.drawChar(mapOffsetLeft + army.pos.x, mapOffsetTop + army.pos.y,
          army.keyCode, Color.black, army.color);
    }

    // Army table / panel.
    _unitPanel.render(terminal);

    // Chat panel.
    _chatPanel.render(terminal);

    // Cities panel.
    _citiesPanel.render(terminal);

    terminal.writeAt(width - 30, 0, "  Fortress Earth - tech demo  ");
    terminal.writeAt(
        width - 30, 1, "   ${sim.world.currentTime.toIso8601String()}    ");

    if (_showFramerate) {
      final renderMilliseconds =
          (_latestRenderTime / 1000).toStringAsFixed(3).padLeft(6);
      final updateMilliseconds =
          (_latestUpdateTime / 1000).toStringAsFixed(3).padLeft(6);
      terminal.writeAt(0, 0, "render: ${renderMilliseconds}ms  ");
      terminal.writeAt(18, 0, "update: ${updateMilliseconds}ms  ");
    }

    _latestRenderTime = _stopwatch.elapsedMicroseconds;
    _stopwatch.stop();
  }

  void update() {
    _stopwatch.reset();
    _stopwatch.start();

    sim.update();

    dirty();

    _latestUpdateTime = _stopwatch.elapsedMicroseconds;
  }

  PlayerArmy _getArmyFromKeyCode(int keyCode) {
    return sim.armies.playerArmies[keyCode];
  }

  static double _normalizeValue(double value, double minimum, double maximum) {
    return ((value - minimum).clamp(minimum, maximum) / (maximum - minimum));
  }
}
