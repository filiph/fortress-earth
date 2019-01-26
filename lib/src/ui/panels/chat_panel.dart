import 'package:fortress_earth/src/ui/panels/panel.dart';
import 'package:malison/malison.dart';

class ChatPanel extends Panel {
  ChatPanel(int x, int y, int width, int height) : super(x, y, width, height);

  @override
  void renderPanel(Terminal terminal) {
    terminal.writeAt(0, 0, "Chat");

    var y = bounds.height - 14;

    terminal.writeAt(0, y++, "@realDonald [1] Green Berets", Color.gray);

    y += 1;

    terminal.writeAt(0, y++, "Cannot believe the fake news");
    terminal.writeAt(0, y++, "media have already taken a");
    terminal.writeAt(0, y++, "(wrong!) stance on my great");
    terminal.writeAt(0, y++, "battle at Paris. Sad!");

    y += 2;

    terminal.writeAt(0, y++,   "@samuelJack       [7] Aerial", Color.gray);

    y += 1;

    terminal.writeAt(0, y++, "lol");
  }
}
