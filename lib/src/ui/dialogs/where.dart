import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/ui/input.dart';
import 'package:fortress_earth/src/units.dart';
import 'package:fortress_earth/src/world.dart';
import 'package:malison/malison.dart';
import 'package:malison/malison_web.dart';

class WhereDialog extends Screen<Input> {
  final World world;

  final Unit unit;

  City _selectedCity;

  WhereDialog(this.world, this.unit);

  bool get isTransparent => true;

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
    for (final city in world.cities.values) {
      if (city.keyCode == keyCode) {
        _selectedCity = city;
        // TODO: add animation (at least wait a while)
        ui.pop(_selectedCity);
        return true;
      }
    }

    return false;
  }

  void render(Terminal fullTerminal) {
    final terminal = fullTerminal.rect(
        40, fullTerminal.height - 20, fullTerminal.width ~/ 2, 18);

    terminal.clear();
    terminal.writeAt(0, 0, "Sending ${unit.name} to ...");
    if (_selectedCity != null) {
      terminal.writeAt(0, 1, "Selected city: $_selectedCity");
    }
  }
}
