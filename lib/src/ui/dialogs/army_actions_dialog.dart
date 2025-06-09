import 'dart:collection';

import 'package:fortress_earth/src/armies.dart';
import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/shared_state.dart';
import 'package:fortress_earth/src/ui/audio.dart';
import 'package:fortress_earth/src/ui/dialogs/where_dialog.dart';
import 'package:fortress_earth/src/ui/input.dart';
import 'package:fortress_earth/src/ui/panels/commands_panel.dart';
import 'package:fortress_earth/src/ui/panels/panel.dart';
import 'package:fortress_earth/src/ui/theme.dart';
import 'package:fortress_earth/src/world.dart';
import 'package:malison/malison.dart';
import 'package:malison/malison_web.dart';

class ArmyActionsDialog extends Screen<Input> {
  final World world;

  final UnmodifiableListView<PlayerArmy> armies;

  /// A callback function for unhandled keys that the underlying game screen
  /// should handle.
  ///
  /// Returns true if an army was 'caught' by the keyCode.
  final bool Function(int) onKeyCallback;

  Input? _selectedInput;

  final int _screenX;

  final int _screenY;

  final UISharedState state;

  ArmyActionsDialog(
    this._screenX,
    this._screenY,
    this.world,
    this.armies,
    this.state,
    this.onKeyCallback,
  ) {
    _commandsPanel = _buildCommandsPanel();
  }

  @override
  bool get isTransparent => true;

  @override
  void activate(Screen<Input> popped, Object? result) {
    if (result == null) return;
    assert(result is City);
    assert(popped is WhereDialog);
    assert(_selectedInput == Input.go);

    ui.pop(GoDialogResult(armies, result as City));
  }

  @override
  bool handleInput(Input input) {
    switch (input) {
      case Input.cancel:
        ui.pop();
        break;

      case Input.go:
        _selectedInput = Input.go;
        ui.push(WhereDialog(world.cities.values, state));
        audioPlayer.bleep();
        break;

      case Input.tight:
        ui.pop(ModeDialogResult(armies, RangeMode.tight));
        audioPlayer.bleep();
        break;

      case Input.expanded:
        ui.pop(ModeDialogResult(armies, RangeMode.expanded));
        audioPlayer.bleep();
        break;

      case Input.destroy:
        ui.pop(ModeDialogResult(armies, RangeMode.seekAndDestroy));
        audioPlayer.bleep();
        break;

      default:
        return false;
    }

    return true;
  }

  @override
  bool keyDown(int keyCode, {required bool shift, required bool alt}) {
    if (shift || alt) return false;
    var isChanged = onKeyCallback(keyCode);
    if (isChanged) {
      _commandsPanel = _buildCommandsPanel();
      audioPlayer.bleep();
      dirty();
    }
    return isChanged;
  }

  late CommandsPanel _commandsPanel;

  @override
  void render(Terminal terminal) {
    terminal.rect(_screenX, _screenY, 47, 6).clear();

    _commandsPanel.borderColor = _selectedInput == null
        ? TextTheme.important
        : Panel.defaultBorderColor;
    _commandsPanel.render(terminal);
  }

  CommandsPanel _buildCommandsPanel() => CommandsPanel(
    _screenX,
    _screenY,
    47,
    5,
    armies.map((a) => String.fromCharCode(a.keyCode)).join(', '),
    ["Go", "Tight", "Expanded", "Destroy"],
  );
}

class GoDialogResult {
  final List<PlayerArmy> armies;
  final City destination;

  const GoDialogResult(this.armies, this.destination);
}

class ModeDialogResult {
  final List<PlayerArmy> armies;
  final RangeMode rangeMode;

  const ModeDialogResult(this.armies, this.rangeMode);
}
