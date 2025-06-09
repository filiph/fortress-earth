import 'package:fortress_earth/src/ui/panels/panel.dart';
import 'package:fortress_earth/src/ui/theme.dart';
import 'package:malison/malison.dart';

class ChatPanel extends Panel {
  ChatPanel(super.x, super.y, super.width, super.height);

  @override
  void renderPanel(Terminal terminal) {
    terminal.writeAt(0, 0, "Chat");
    terminal.writeAt(0, 2, "Here you'll find text", TextTheme.normal);
    terminal.writeAt(0, 3, "messages from your generals.", TextTheme.normal);

    terminal.writeAt(0, 5, "Use keyboard to send units.", TextTheme.normal);
    terminal.writeAt(0, 6, "Alt-shift-X to add enemy.", TextTheme.normal);
    terminal.writeAt(0, 7, "Alt-S for sound.", TextTheme.normal);

    var y = bounds.height - 6;

    terminal.writeAt(0, y++, "@bot                  [0] HQ", TextTheme.normal);

    y += 1;

    terminal.writeAt(0, y++, "Chat not implemented yet...");
  }
}
