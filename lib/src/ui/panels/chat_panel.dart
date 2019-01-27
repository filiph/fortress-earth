import 'package:fortress_earth/src/ui/panels/panel.dart';
import 'package:fortress_earth/src/ui/theme.dart';
import 'package:malison/malison.dart';

class ChatPanel extends Panel {
  ChatPanel(int x, int y, int width, int height) : super(x, y, width, height);

  @override
  void renderPanel(Terminal terminal) {
    terminal.writeAt(0, 0, "Chat");
    terminal.writeAt(0, 2, "Here you'll find text", TextTheme.normal);
    terminal.writeAt(0, 3, "messages from your generals.", TextTheme.normal);


    var y = bounds.height - 6;

    terminal.writeAt(0, y++, "@bot                  [0] HQ", TextTheme.normal);

    y += 1;

    terminal.writeAt(0, y++, "Chat not implemented yet...");
  }
}
