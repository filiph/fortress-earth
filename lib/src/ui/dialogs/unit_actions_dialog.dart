import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/shared_state.dart';
import 'package:fortress_earth/src/ui/dialogs/where.dart';
import 'package:fortress_earth/src/ui/input.dart';
import 'package:fortress_earth/src/ui/panels/commands_panel.dart';
import 'package:fortress_earth/src/ui/panels/panel.dart';
import 'package:fortress_earth/src/ui/theme.dart';
import 'package:fortress_earth/src/units.dart';
import 'package:fortress_earth/src/world.dart';
import 'package:malison/malison.dart';
import 'package:malison/malison_web.dart';

class GoDialogResult {
  final Unit unit;
  final City destination;

  const GoDialogResult(this.unit, this.destination);
}

class UnitActionsDialog extends Screen<Input> {
  final World world;

  // TODO: allow selecting more units - List<Unit>
  //       need a way to notify GameScreen that more units were added
  final Unit unit;

  Input _selectedInput;

  final int _screenX;

  final int _screenY;

  final SharedState state;

  UnitActionsDialog(
      this._screenX, this._screenY, this.world, this.unit, this.state);

  bool get isTransparent => true;

  void activate(Screen<Input> popped, Object result) {
    if (result == null) return;
    assert(result is City);
    assert(popped is WhereDialog);
    assert(_selectedInput == Input.go);

    ui.pop(GoDialogResult(unit, result as City));
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

      default:
        return false;
    }

    return true;
  }

  void render(Terminal terminal) {
    terminal.rect(_screenX, _screenY, 47, 6).clear();
    final panel = CommandsPanel(
        _screenX,
        _screenY,
        47,
        5,
        unit.name,
        ["Go", "Upgrade", "Heal", "Interrogate"],
        _selectedInput == null
            ? TextTheme.important
            : Panel.defaultBorderColor);
    panel.render(terminal);
  }
}
