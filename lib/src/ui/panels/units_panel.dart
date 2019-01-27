import 'package:fortress_earth/src/ui/panels/panel.dart';
import 'package:fortress_earth/src/units.dart';
import 'package:malison/malison.dart';

class UnitPanel extends Panel {
  Units units;

  UnitPanel(int x, int y, int width, int height, this.units)
      : super(x, y, width, height);

  @override
  void renderPanel(Terminal terminal) {
    terminal.writeAt(0, 0, "Units");
    
    var y = 2;
    for (final key in units.units.keys) {
      final unit = units.units[key];
      terminal.drawChar(0, y, key, unit.color);
      terminal.writeAt(2, y, unit.name);

      y++;
    }
  }
}
