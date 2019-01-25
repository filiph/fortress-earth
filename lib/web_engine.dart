import 'dart:html' as html;

import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/constants.dart';
import 'package:fortress_earth/src/data/earth_terrain.dart';
import 'package:fortress_earth/src/tile.dart';
import 'package:fortress_earth/src/ui/game_screen.dart';
import 'package:fortress_earth/src/world.dart';
import 'package:malison/malison.dart';
import 'package:malison/malison_web.dart';
import 'package:piecemeal/piecemeal.dart';

void runGame(html.CanvasElement canvas) {
  final terminal = CanvasTerminal(width, height,
      Font('Menlo, Consolas', size: 14, w: 10, h: 14, x: 1, y: 11), canvas);
  final ui = UserInterface<String>(terminal);

  ui.keyPress.bind("animate", KeyCode.space);
  ui.keyPress.bind("profile", KeyCode.p);
  ui.keyPress.bind("need-gradient", KeyCode.n, shift: true);

  final world = World(
    mapWidth,
    mapHeight,
    (v) => Tile(v, getTerrainRoughness(v),
        backgroundColor: getTerrainColor(v), evil: v == Vec(30, 14) ? 100 : 0),
    [
      City("SFO", Vec(21, 15)),
      City("NYC", Vec(40, 13)),
      City("PAR", Vec(66, 12)),
      City("MOS", Vec(76, 10)),
      City("BEI", Vec(109, 13)),
      City("DEL", Vec(92, 18)),
    ],
  );

  ui.push(GameScreen(ui, world));

  ui.handlingInput = true;
  ui.running = true;
}
