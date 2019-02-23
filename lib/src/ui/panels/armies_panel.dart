import 'dart:collection';

import 'package:fortress_earth/src/ui/panels/panel.dart';
import 'package:fortress_earth/src/ui/theme.dart';
import 'package:fortress_earth/src/armies.dart';
import 'package:malison/malison.dart';

class UnitPanel extends Panel {
  Armies armies;

  UnmodifiableListView selected;

  UnitPanel(int x, int y, int width, int height, this.armies, this.selected)
      : super(x, y, width, height);

  @override
  void renderPanel(Terminal terminal) {
    terminal.writeAt(0, 0, "Armies");

    var y = 2;
    for (final key in armies.playerArmies.keys) {
      final army = armies.playerArmies[key];
      var isSelected = selected.contains(army);
      var background = isSelected ? TextTheme.background : Color.black;

      terminal.writeAt(0, y, ' ' * bounds.width, Color.white, background);

      terminal.drawChar(0, y, key, army.color, background);
      terminal.writeAt(2, y, army.name, Color.white, background);

      terminal.writeAt(
        14,
        y,
        army.hasArrived ? "STNDBY" : "TRANST",
        army.hasArrived ? TextTheme.detail : TextTheme.normal,
        background,
      );

      terminal.writeAt(
        24,
        y,
        army.isAlive ? "OK" : "DEAD",
        army.isAlive ? TextTheme.ok : TextTheme.highlight,
        background,
      );

      terminal.writeAt(
        30,
        y,
        army.fieldedUnits.toString().padLeft(4),
        TextTheme.normal,
        background,
      );

      y++;
    }
  }
}
