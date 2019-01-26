import 'package:fortress_earth/src/ui/panels/panel.dart';
import 'package:malison/malison.dart';

class UnitPanel extends Panel {
  UnitPanel(int x, int y, int width, int height) : super(x, y, width, height);

  @override
  void renderPanel(Terminal terminal) {
    terminal.writeAt(0, 0, "Units");
  }
}
