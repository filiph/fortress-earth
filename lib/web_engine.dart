import 'dart:html' as html;

import 'package:fortress_earth/src/constants.dart';
import 'package:fortress_earth/src/data/earth_terrain.dart';
import 'package:fortress_earth/src/shared_state.dart';
import 'package:fortress_earth/src/tile.dart';
import 'package:fortress_earth/src/ui/game_screen.dart';
import 'package:fortress_earth/src/ui/input.dart';
import 'package:fortress_earth/src/armies.dart';
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

  ui.keyPress.bind(Input.go, KeyCode.g);

  ui.keyPress.bind(Input.fullscreen, KeyCode.f, alt: true);

  ui.keyPress.bind(Input.debugNeedGradient, KeyCode.n, shift: true);

  final world = World(
    mapWidth,
    mapHeight,
    (v) => Tile(v, getTerrainRoughness(v), backgroundColor: getTerrainColor(v)),
  );

  world.tiles[Vec(70, 13)].hasEvilCore = true;
  world.tiles[Vec(24, 13)].hasEvilCore = true;

  final armies = Armies();

  final state = SharedState();

  ui.push(
      GameScreen(world, armies, state, fullscreenCallback: fullscreenCallback));

  ui.handlingInput = true;
  ui.running = true;
}
