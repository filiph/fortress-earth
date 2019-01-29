import 'package:fortress_earth/src/constants.dart';
import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

part 'earth_terrain.part.dart';

Color getTerrainColor(Vec vec) {
  final pixel = _earthTerrain[vec.hashCode];

  final b = (pixel & 0xFF0000) >> 16;
  final g = (pixel & 0x00FF00) >> 8;
  final r = (pixel & 0x0000FF);

  if (_isOcean[vec.hashCode]) {
    // Dim oceans
    return Color(r ~/ 3, g ~/ 3, b ~/ 2);
  }

  double dim = 1.8;
  return Color(r ~/ dim, g ~/ dim, b ~/ dim);
}

int getTerrainRoughness(Vec vec) {
  if (_isOcean[vec.hashCode]) {
    // Short-circuit oceans.
    return oceanRoughness;
  }

  final color = getTerrainColor(vec);

  // Discard green, and compute "luminosity". Good approximation
  // of roughness (desserts, mountains).
  return (color.r + color.b) ~/ 2;
}
