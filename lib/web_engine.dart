import 'dart:html' as html;

import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/constants.dart';
import 'package:fortress_earth/src/data/earth_terrain.dart';
import 'package:fortress_earth/src/tile.dart';
import 'package:fortress_earth/src/ui/game_screen.dart';
import 'package:fortress_earth/src/ui/input.dart';
import 'package:fortress_earth/src/units.dart';
import 'package:fortress_earth/src/world.dart';
import 'package:malison/malison.dart';
import 'package:malison/malison_web.dart';
import 'package:piecemeal/piecemeal.dart';

void runGame(html.CanvasElement canvas, {void Function() fullscreenCallback}) {
  final terminal = CanvasTerminal(width, height,
      Font('Menlo, Consolas', size: 14, w: 10, h: 14, x: 1, y: 11), canvas);
  final ui = UserInterface<Input>(terminal);

  ui.keyPress.bind(Input.pause, KeyCode.space);
  ui.keyPress.bind(Input.cancel, KeyCode.escape);
  ui.keyPress.bind(Input.cancel, KeyCode.delete);

  ui.keyPress.bind(Input.send, KeyCode.s);

  ui.keyPress.bind(Input.fullscreen, KeyCode.f, alt: true);

  ui.keyPress.bind(Input.debugNeedGradient, KeyCode.n, shift: true);

  final world = World(
    mapWidth,
    mapHeight,
    (v) => Tile(v, getTerrainRoughness(v),
        backgroundColor: getTerrainColor(v), evil: v == Vec(30, 14) ? 100 : 0),
    [
      // From: http://www.freeworldmaps.net/cities/top50/top50-cities-world.png
      City("Los Angeles", Vec(22, 15)),
      City("New York", Vec(40, 13)),
      City("Paris", Vec(66, 12)),
      City("Moscow", Vec(76, 10)),
      City("Beijing", Vec(109, 13)),
      City("Delhi", Vec(92, 18)),
      City("Jakarta", Vec(105, 26)),
      City("Cairo", Vec(77, 17)),
      City("Kinshasa", Vec(70, 26)),
      City("Sao Paulo", Vec(49, 31)),
      City("Quito", Vec(37, 26)),
      City("Sydney", Vec(119, 35), keyCode: KeyCode.y),
    ],
  );

  final units = Units();

  ui.push(GameScreen(world, units, fullscreenCallback: fullscreenCallback));

  ui.handlingInput = true;
  ui.running = true;
}
