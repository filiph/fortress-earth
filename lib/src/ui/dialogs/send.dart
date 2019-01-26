import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/ui/dialogs/where.dart';
import 'package:fortress_earth/src/ui/input.dart';
import 'package:fortress_earth/src/units.dart';
import 'package:fortress_earth/src/world.dart';
import 'package:malison/malison.dart';
import 'package:malison/malison_web.dart';

class SendDialog extends Screen<Input> {
  final World world;

  final List<Unit> units;

  Unit _selectedUnit;

  SendDialog(this.world, Iterable<Unit> units)
      : units = units.toList(growable: false);

  bool get isTransparent => true;

  void activate(Screen<Input> popped, Object result) {
    if (result == null) return;
    assert(result is City);
    assert(popped is WhereDialog);

    ui.pop(SendDialogResult(_selectedUnit, result as City));
  }

  bool handleInput(Input input) {
    switch (input) {
      case Input.cancel:
        ui.pop();
        break;

      default:
        return false;
    }

    return true;
  }

  bool keyDown(int keyCode, {bool shift, bool alt}) {
    for (final unit in units) {
      if (unit.keyCode == keyCode) {
        _selectedUnit = unit;
        ui.push(WhereDialog(world.cities.values));
        return true;
      }
    }

    return false;
  }

  void render(Terminal fullTerminal) {
    final terminal = fullTerminal.rect(
        0, fullTerminal.height - 20, fullTerminal.width ~/ 2, 20);

    terminal.clear();
    terminal.writeAt(0, 0, "Sending...");
    if (_selectedUnit != null) {
      terminal.writeAt(0, 1, "Selected unit: $_selectedUnit");
    }
  }
}

class SendDialogResult {
  final Unit unit;
  final City destination;

  const SendDialogResult(this.unit, this.destination);
}
