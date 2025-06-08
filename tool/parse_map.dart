import 'dart:io';

import 'package:args/args.dart';
import 'package:fortress_earth/src/constants.dart';
import 'package:image/image.dart';
import 'package:piecemeal/piecemeal.dart';

void main(List<String> args) {
  final parser = ArgParser();
  parser.addOption(
    'width',
    abbr: 'w',
    help: 'Width of the output map.',
    defaultsTo: mapWidth.toString(),
  );
  parser.addOption(
    'height',
    abbr: 'h',
    help: 'Height of the output map.',
    defaultsTo: mapHeight.toString(),
  );
  parser.addOption(
    'bottom-trim',
    help:
        'Percentage of the height to trim from the bottom. '
        'This works well with Earth\'s map, where the bottom 15% is ice.',
    defaultsTo: '0',
  );
  parser.addOption(
    'water-map',
    help:
        'Image with same dimensions as the main one '
        'which has water as $waterTileColor.',
  );

  final results = parser.parse(args);

  if (results.rest.length != 1) {
    stderr.writeln("Please provide path to input file.");
    stderr.writeln("\n  dart tool/parse_map.dart path/to/image.tif\n");
    stderr.writeln(
      "This tool extracts image data from a file and prints out "
      "contents of lib/src/data/earth_terrain.part.dart. Full usage "
      "could look like:\n\n"
      "  dart tool/parse_map.dart assets/NE2_HR_LC_SR_W/NE2_HR_LC_SR_W.tif "
      "--water-map assets/NE2_HR_LC/NE2_HR_LC.tif --bottom-trim 15 "
      "> lib/src/data/earth_terrain.part.dart\n\n"
      "which does everything for you..\n",
    );
    stderr.writeln(parser.usage);
    exit(1);
  }

  final imagePath = results.rest.single;
  final width = int.parse(results['width'] as String);
  final height = int.parse(results['height'] as String);
  final bottomTrim = int.parse(results['bottom-trim'] as String) / 100;
  final waterMapPath = (results['water-map'] as String?);

  final file = File(imagePath);
  final image = decodeNamedImage(imagePath, file.readAsBytesSync())!;

  final xRatio = image.width / width;
  final yRatio = (image.height * (1 - bottomTrim)) / height;

  print(_filePreamble);
  for (int x = 0; x < width; x++) {
    for (int y = 0; y < height; y++) {
      final imageX = x * xRatio;
      final imageY = y * yRatio;
      final pixel = image.getPixelCubic(imageX, imageY);
      final vecHashCode = Vec(x, y).hashCode;
      assert(pixel.format == Format.uint8);
      final rgb =
          "${(pixel.r as int).toString().padLeft(2, '0')}"
          "${(pixel.g as int).toString().padLeft(2, '0')}"
          "${(pixel.b as int).toString().padLeft(2, '0')}";
      print("  $vecHashCode: $rgb,");
    }
  }
  print('};');

  if (waterMapPath == null) {
    return;
  }

  final waterMapFile = File(waterMapPath);
  Image waterImage = decodeNamedImage(
    waterMapPath,
    waterMapFile.readAsBytesSync(),
  )!;

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

final waterTileColor = ColorUint8.rgba(0xFF, 0xFF, 0xFF, 0xFF);
