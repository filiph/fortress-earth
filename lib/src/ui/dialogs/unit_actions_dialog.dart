import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/ui/dialogs/where.dart';
import 'package:fortress_earth/src/ui/input.dart';
import 'package:fortress_earth/src/units.dart';
import 'package:fortress_earth/src/world.dart';
import 'package:malison/malison.dart';
import 'package:malison/malison_web.dart';

class UnitActionsDialog extends Screen<Input> {
  final World world;

  final Unit unit;

  Input _selectedInput;

  UnitActionsDialog(int x, int y, this.world, this.unit);

  bool get isTransparent => true;

  void activate(Screen<Input> popped, Object result) {
    if (result == null) return;
    assert(result is City);
    assert(popped is WhereDialog);
    assert(_selectedInput == Input.send);

    ui.pop(SendDialogResult(unit, result as City));
  }

  bool handleInput(Input input) {
    switch (input) {
      case Input.cancel:
        ui.pop();
        break;

      case Input.send:
        _selectedInput = Input.send;
        ui.push(WhereDialog(world.cities.values));
        break;

      default:
        return false;
    }

    return true;
  }

  void render(Terminal fullTerminal) {
    final terminal = fullTerminal.rect(
        0, fullTerminal.height - 20, fullTerminal.width ~/ 2, 20);

    terminal.clear();
    terminal.writeAt(0, 0, unit.name);
  }
}

class SendDialogResult {
  final Unit unit;
  final City destination;

  const SendDialogResult(this.unit, this.destination);
}
