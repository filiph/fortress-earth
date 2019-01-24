import 'dart:html';

import 'package:fortress_earth/web_engine.dart';

void main() {
  final canvas = querySelector('#canvas') as CanvasElement;

  runGame(canvas);
}
