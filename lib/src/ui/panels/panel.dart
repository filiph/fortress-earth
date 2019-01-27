import 'package:fortress_earth/src/ui/draw.dart';
import 'package:malison/malison.dart';
import 'package:meta/meta.dart';
import 'package:piecemeal/piecemeal.dart';

abstract class Panel {
  static const defaultBorderColor = Color(0x26, 0x2a, 0x42);

  Rect bounds;

  Color get borderColor => defaultBorderColor;

  Panel(int x, int y, int width, int height) {
    bounds = Rect(x, y, width, height);
  }

  bool get isVisible => bounds != null;

  void render(Terminal terminal) {
    if (bounds == null) return;

    Draw.box(
        terminal, bounds.x, bounds.y, bounds.width, bounds.height, borderColor);
    renderPanel(terminal.rect(
        bounds.x + 2, bounds.y, bounds.width - 4, bounds.height - 1));
  }

  @protected
  void renderPanel(Terminal terminal);
}
