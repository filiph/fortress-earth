import 'package:fortress_earth/src/ui/panels/panel.dart';
import 'package:fortress_earth/src/ui/theme.dart';
import 'package:malison/malison.dart';

class CommandsPanel extends Panel {
  final String title;

  final List<String> commands;

  CommandsPanel(int x, int y, int width, int height, this.title, this.commands,
      this.borderColor)
      : super(x, y, width, height);

  final Color borderColor;

  @override
  void renderPanel(Terminal terminal) {
    terminal.writeAt(0, 0, " Command for: ", TextTheme.detail);
    terminal.writeAt(14, 0, title + " ", TextTheme.normal);

    var y = 2;
    var x = 1;
    for (final command in commands) {
      // Hack: everything except the first command is disabled.
      bool disabled = x != 1;
      terminal.writeAt(
          x, y, command, disabled ? TextTheme.normal : TextTheme.important);
      terminal.writeAt(x, y + 1, '▀', TextTheme.detail);
      x += command.length + 4;
    }
  }
}
