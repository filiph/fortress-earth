import 'package:fortress_earth/src/armies.dart';
import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/shared_state.dart';
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

  // TODO: allow selecting more armies - List<Army>
  //       need a way to notify GameScreen that more armies were added
  final PlayerArmy army;

  Input _selectedInput;

  final int _screenX;

  final int _screenY;

  final UISharedState state;

  CommandsPanel commandsPanel;

  ArmyActionsDialog(
      this._screenX, this._screenY, this.world, this.army, this.state) {
    commandsPanel = CommandsPanel(_screenX, _screenY, 47, 5, army.name,
        ["Go", "Tight", "Expanded", "Destroy"]);
  }

  bool get isTransparent => true;

  void activate(Screen<Input> popped, Object result) {
    if (result == null) return;
    assert(result is City);
    assert(popped is WhereDialog);
    assert(_selectedInput == Input.go);

    ui.pop(GoDialogResult(army, result as City));
  }

  bool handleInput(Input input) {
    switch (input) {
      case Input.cancel:
        ui.pop();
        break;

      case Input.go:
        _selectedInput = Input.go;
        ui.push(WhereDialog(world.cities.values, state));
        break;

      case Input.tight:
        ui.pop(ModeDialogResult(army, RangeMode.tight));
        break;

      case Input.expanded:
        ui.pop(ModeDialogResult(army, RangeMode.expanded));
        break;

      case Input.destroy:
        ui.pop(ModeDialogResult(army, RangeMode.seekAndDestroy));
        break;

      default:
        return false;
    }

    return true;
  }

  void render(Terminal terminal) {
    terminal.rect(_screenX, _screenY, 47, 6).clear();

    commandsPanel.borderColor =
        _selectedInput == null ? TextTheme.important : Panel.defaultBorderColor;
    commandsPanel.render(terminal);
  }
}

class GoDialogResult {
  final PlayerArmy army;
  final City destination;

  const GoDialogResult(this.army, this.destination);
}

class ModeDialogResult {
  final PlayerArmy army;
  final RangeMode rangeMode;

  const ModeDialogResult(this.army, this.rangeMode);
}
