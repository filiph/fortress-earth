import 'dart:async';
import 'dart:math';

import 'package:malison/malison.dart';
import 'package:meta/meta.dart';

abstract class Animation {
  int _time = 0;

  bool _isFinished = false;

  final Completer<void> _completer = Completer<void>();

  bool get isFinished => _isFinished;

  @protected
  int get time => _time;

  @protected
  void drawFrame(Terminal terminal);

  @protected
  void finish() => _isFinished = true;

  @mustCallSuper
  Future<void> run() {
    return _completer.future;
  }

  @mustCallSuper
  void update(Terminal terminal) {
    drawFrame(terminal);
    _time += 1;
    if (_isFinished) {
      _completer.complete();
    }
  }
}

class BlinkAnimation extends Animation {
  @override
  void drawFrame(Terminal terminal) {
    if (time % 3 > 0) terminal.clear();
    if (time > 10) finish();
  }
}

class WipeAnimation extends Animation {
  /// Number of frames.
  static const length = 10;

  @override
  void drawFrame(Terminal terminal) {
    if (time > length) {
      finish();
      return;
    }

    final progress = time / length;
    assert(progress >= 0);
    assert(progress <= 1);
    final easeOutProgress = sqrt(progress);
    final offsetX = (terminal.width * easeOutProgress).round();
    final offsetY = (terminal.height * easeOutProgress).round();

    terminal
        .rect(
          offsetX,
          offsetY,
          terminal.width - offsetX,
          terminal.height - offsetY,
        )
        .clear();
  }
}
