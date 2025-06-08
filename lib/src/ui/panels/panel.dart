import 'package:fortress_earth/src/ui/animation.dart';
import 'package:fortress_earth/src/ui/draw.dart';
import 'package:malison/malison.dart';
import 'package:meta/meta.dart';
import 'package:piecemeal/piecemeal.dart';

abstract class Panel {
  static const defaultBorderColor = Color(0x26, 0x2a, 0x42);

  Rect bounds;

  Panel(int x, int y, int width, int height)
      : bounds = Rect(x, y, width, height);

  void addAnimation(Animation animation) => _animations.add(animation);

  Color get borderColor => defaultBorderColor;

  bool get isVisible => bounds != null;

  final List<Animation> _animations = [];

  void render(Terminal terminal) {
    if (bounds == null) return;

    Draw.box(
        terminal, bounds.x, bounds.y, bounds.width, bounds.height, borderColor);
    renderPanel(terminal.rect(
        bounds.x + 2, bounds.y, bounds.width - 4, bounds.height - 1));

    while (_animations.isNotEmpty && _animations.first.isFinished) {
      _animations.removeAt(0);
    }

    if (_animations.isEmpty) return;

    _animations.first
        .update(terminal.rect(bounds.x, bounds.y, bounds.width, bounds.height));
  }

  @protected
  void renderPanel(Terminal terminal);
}
