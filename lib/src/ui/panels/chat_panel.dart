import 'package:fortress_earth/src/ui/panels/panel.dart';
import 'package:malison/malison.dart';

class ChatPanel extends Panel {
  ChatPanel(int x, int y, int width, int height) : super(x, y, width, height);

  @override
  void renderPanel(Terminal terminal) {
    terminal.writeAt(0, 0, "Chat");

    terminal.writeAt(0, 2, "@realDonald  [1] Green Berets");

    terminal.writeAt(0, 4, "Cannot believe the fake news");
    terminal.writeAt(0, 5, "media have already taken a");
    terminal.writeAt(0, 6, "(wrong!) stance on my great");
    terminal.writeAt(0, 7, "battle at Paris. Sad!");

    for (int y = 9; y < terminal.height; y++) {
      terminal.writeAt(0, y, y.isEven ? "Blah" : "Lorem ipsum");
    }
  }
}
