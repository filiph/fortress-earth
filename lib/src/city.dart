import 'dart:math';

import 'package:fortress_earth/src/neighborhood.dart';
import 'package:fortress_earth/src/tile.dart';
import 'package:fortress_earth/src/units.dart';
import 'package:piecemeal/piecemeal.dart';

/// Remaps [value] within the range [min]-[max] to the output range
/// [outMin]-[outMax].
double lerpDouble(num value, num min, num max, double outMin, double outMax) {
  assert(min < max);

  if (value <= min) return outMin;
  if (value >= max) return outMax;

  var t = (value - min) / (max - min);
  return outMin + t * (outMax - outMin);
}

class City {
  static const maxUnitsPerRequest = 10;

  final String name;

  final int keyCode;

  final Vec pos;

  int _availableUnits = 0;

  City(this.name, this.pos, {int keyCode})
      : keyCode = keyCode ?? name.codeUnitAt(0);

  int get availableUnits => _availableUnits;

  /// Deploys [unit] in this city.
  void deploy(Unit unit) {
    _availableUnits += 500;
  }

  /// Claims units that cannot be available elsewhere. Called by tiles.
  int requestUnits(Tile tile, Neighborhood hood) {
    // Evil tiles cannot request units.
    if (tile.isEvil) return 0;

    // Tiles around cities automatically get units if available.
    final distance = (hood.pos - pos).length;
    if (distance <= 2) {
      final request = hood.evil.ceil() + 10;
      final distanceModifiedRequest = request / (1 + distance);
      return _computeAndSubstractGiven(
          hood.pos, distanceModifiedRequest.round());
    }

    // By default, we don't give any units.
    return 0;
  }

  int _computeAndSubstractGiven(Vec tileCenter, int requested) {
    final distance = (tileCenter - pos).length;
    const easyDistance = 5;
    const maxDistance = 15;
    final double logisticalCoefficient =
        lerpDouble(distance, easyDistance, maxDistance, 0, 1);
    final willingToGive =
        (1 - logisticalCoefficient) * min(_availableUnits, maxUnitsPerRequest);
    final given = min(willingToGive.round(), requested);
    _availableUnits -= given;
    return given;
  }
}
