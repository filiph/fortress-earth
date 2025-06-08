import 'dart:html';
import 'dart:js';

import 'package:fortress_earth/web_engine.dart';

void main() {
  final canvas = querySelector('#canvas') as CanvasElement;
  canvas.onDoubleClick.listen((_) {
    _toggleFullscreen();
  });

  runGame(canvas, fullscreenCallback: _toggleFullscreen);
}

/// See: https://stackoverflow.com/a/29715395/9457
void _toggleFullscreen() {
  // See https://stackoverflow.com/a/45192772/1416886
  bool checkFullscreen() => 1 >= window.outerHeight - window.innerHeight!;

  final isFullscreen = checkFullscreen();

  JsObject jsElement;
  if (isFullscreen) {
    jsElement = JsObject.fromBrowserObject(document);
  } else {
    var div = querySelector("#canvas")!;
    jsElement = JsObject.fromBrowserObject(div);
  }

  const requestMethods = [
    "requestFullscreen",
    "webkitRequestFullscreen",
    "mozRequestFullScreen",
    "msRequestFullscreen",
    "oRequestFullscreen",
  ];

  const exitMethods = [
    "exitFullscreen",
    "webkitExitFullscreen",
    "mozCancelFullScreen",
    "msExitFullscreen",
    "oExitFullscreen",
  ];

  final methods = isFullscreen ? exitMethods : requestMethods;

  for (var method in methods) {
    if (jsElement.hasProperty(method)) {
      jsElement.callMethod(method);
      return;
    }
  }
}
