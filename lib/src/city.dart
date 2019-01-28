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

  final List<Unit> _units = [];

  final Vec pos;

  /// Keeps track of the units that the city provided from the pool in [_units].
  ///
  /// When this is lower than [availableUnits], then the city can release
  /// more units. When it's higher, the city will take them back.
  int _releasedUnits = 0;

  City(this.name, this.pos, {int keyCode})
      : keyCode = keyCode ?? name.codeUnitAt(0);

  /// Units currently at this city that are available to be released to
  /// the field. This cannot be a negative number.
  int get availableUnits => max(0, _sumUnitStrength - _releasedUnits);

  /// Returns `true` if city is withdrawing all units.
  bool get isInCompleteWithdrawal => _units.isEmpty;

  /// Units that were released from this city but need to get back.
  /// For example, the unit that brought them has left the city.
  int get unitDeficit => max(0, _releasedUnits - _sumUnitStrength);

  int get _sumUnitStrength =>
      _units.map((unit) => unit.strength).fold(0, (a, b) => a + b);

  /// Deploys [unit] in this city.
  void deploy(Unit unit) {
    assert(!_units.contains(unit));
    assert(unit.deployedAt == this);
    _units.add(unit);
  }

  /// Offer at most [offeredGood] units to this city.
  ///
  /// The method will return the number of [Tile.good] that it will take.
  /// The tile is responsible for subtracting it.
  int offerUnits(Tile tile, int offeredGood) {
    // Only city tiles can take back units.
    if (tile.pos != pos) return 0;

    final unitsTaken = min(offeredGood, unitDeficit);
    _releasedUnits -= unitsTaken;
    return unitsTaken;
  }

  void release(Unit unit) {
    assert(_units.contains(unit));
    assert(unit.deployedAt == this);
    _units.remove(unit);
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
      return _computeAndSubstractGiven(distanceModifiedRequest.round());
    }

    // By default, we don't give any units.
    return 0;
  }

  int _computeAndSubstractGiven(int requested) {
    final willingToGive = min(availableUnits, maxUnitsPerRequest);
    final given = min(willingToGive.round(), requested);
    _releasedUnits += given;
    return given;
  }
}
