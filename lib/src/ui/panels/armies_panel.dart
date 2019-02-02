import 'package:fortress_earth/src/ui/panels/panel.dart';
import 'package:fortress_earth/src/ui/theme.dart';
import 'package:fortress_earth/src/armies.dart';
import 'package:malison/malison.dart';

class UnitPanel extends Panel {
  Armies armies;

  UnitPanel(int x, int y, int width, int height, this.armies)
      : super(x, y, width, height);

  @override
  void renderPanel(Terminal terminal) {
    terminal.writeAt(0, 0, "Armies");

    var y = 2;
    for (final key in armies.playerArmies.keys) {
      final unit = armies.playerArmies[key];
      terminal.drawChar(0, y, key, unit.color);
      terminal.writeAt(2, y, unit.name);

      terminal.writeAt(
        14,
        y,
        unit.hasArrived ? "STNDBY" : "TRANST",
        unit.hasArrived ? TextTheme.detail : TextTheme.normal,
      );

      y++;
    }
  }
}
