import 'dart:io';

import 'package:args/args.dart';
import 'package:fortress_earth/src/constants.dart';
import 'package:image/image.dart';
import 'package:piecemeal/piecemeal.dart';

void main(List<String> args) {
  final parser = ArgParser();
  parser.addOption('width',
      abbr: 'w',
      help: 'Width of the output map.',
      defaultsTo: mapWidth.toString());
  parser.addOption('height',
      abbr: 'h',
      help: 'Height of the output map.',
      defaultsTo: mapHeight.toString());
  parser.addOption('bottom-trim',
      help: 'Percentage of the height to trim from the bottom. '
          'This works well with Earth\'s map, where the bottom 15% is ice.',
      defaultsTo: '0');
  parser.addOption('water-map',
      help: 'Image with same dimensions as the main one '
          'which has water as '
          '0x${waterTileColor.toRadixString(16).toUpperCase()}.');

  final results = parser.parse(args);

  if (results.rest.length != 1) {
    stderr.writeln("Please provide path to input file.");
    stderr.writeln("\n  dart tool/parse_map.dart path/to/image.tif\n");
    stderr.writeln("This tool extracts image data from a file and prints out "
        "contents of lib/src/data/earth_terrain.part.dart. Full usage "
        "could look like:\n\n"
        "  dart tool/parse_map.dart assets/NE2_HR_LC_SR_W/NE2_HR_LC_SR_W.tif "
        "--water-map assets/NE2_HR_LC/NE2_HR_LC.tif --bottom-trim 15 "
        "> lib/src/data/earth_terrain.part.dart\n\n"
        "which does everything for you..\n");
    stderr.writeln(parser.usage);
    exit(1);
  }

  final imagePath = results.rest.single;
  final width = int.parse(results['width']);
  final height = int.parse(results['height']);
  final bottomTrim = int.parse(results['bottom-trim']) / 100;
  final waterMapPath = (results['water-map']);

  final file = File(imagePath);
  final image = decodeNamedImage(file.readAsBytesSync(), imagePath);

  final xRatio = image.width / width;
  final yRatio = (image.height * (1 - bottomTrim)) / height;

  print(_filePreamble);
  for (int x = 0; x < width; x++) {
    for (int y = 0; y < height; y++) {
      final imageX = x * xRatio;
      final imageY = y * yRatio;
      final pixel = image.getPixelCubic(imageX, imageY);
      final vecHashCode = Vec(x, y).hashCode;
      final rgb = pixel & 0xFFFFFF;
      print("  $vecHashCode: $rgb,");
    }
  }
  print('};');

  if (waterMapPath == null) {
    return;
  }

  final waterMapFile = File(waterMapPath);
  Image waterImage =
      decodeNamedImage(waterMapFile.readAsBytesSync(), waterMapPath);

  if (waterImage.width != image.width || waterImage.height != image.height) {
    stderr.writeln("Water image must have same dimensions as image.");
    exit(1);
  }

  print(_waterMapPreamble);
  for (int x = 0; x < width; x++) {
    for (int y = 0; y < height; y++) {
      final imageX = x * xRatio;
      final imageY = y * yRatio;
      var pixel = waterImage.getPixelCubic(imageX, imageY);
//      if (pixel == waterTileColor) {
//         Sample another place just in case we're close to land.
//        pixel = waterImage.getPixelCubic(imageX + xRatio / 3, imageY + yRatio / 3);
//      }
      final vecHashCode = Vec(x, y).hashCode;
      final isOcean = pixel == waterTileColor;
      print("  $vecHashCode: $isOcean,");
    }
  }
  print('};');
}

final _filePreamble = '''
part of 'earth_terrain.dart';

const Map<int, int> _earthTerrain = {''';

final _waterMapPreamble = '''

const Map<int, bool> _isOcean = {''';

const waterTileColor = 0xFFFFFFFF;
