import 'dart:math';

import 'package:fortress_earth/src/armies.dart';
import 'package:fortress_earth/src/neighborhood.dart';
import 'package:fortress_earth/src/tile.dart';
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

  final List<PlayerArmy> _armies = [];

  final Vec pos;

  /// Keeps track of the units that the city provided from the pool
  /// in [_armies], per army.
  ///
  /// When this is lower than [getAvailableUnits()], then the city can release
  /// more units. When it's higher, the city will take them back.
  Map<Army, int> _releasedUnits = Map<Army, int>();

  City(this.name, this.pos, {int keyCode})
      : keyCode = keyCode ?? name.codeUnitAt(0);

  /// Sum of the deficit of all armies. Only for show.
  @deprecated
  int get unitDeficitAll => max(
      0,
      _releasedUnits.values.fold(0, _sum) -
          _armies.map((a) => a.strength).fold<int>(0, _sum));

  /// Deploys [army] in this city.
  void deploy(PlayerArmy army) {
    assert(!_armies.contains(army));
    assert(army.deployedAt == this);
    _armies.add(army);
  }

  /// The sum of all un-released strength of the military stationed at this
  /// city.
  int get availableUnitsAll => max(
      0,
      _armies.map((a) => a.strength).fold(0, _sum) -
          _releasedUnits.values.fold<int>(0, _sum));

  int getAvailableUnits(Army army) {
    if (!_armies.contains(army)) return 0;
    return max(0, army.strength - _releasedUnits.putIfAbsent(army, () => 0));
  }

  /// Units of [army] that were released from this city but need to get back.
  /// For example, the army that brought them has left the city.
  int getUnitDeficit(Army army) {
    if (!_armies.contains(army)) {
      return _releasedUnits[army] ?? 0;
    }
    return max(0, _releasedUnits[army] - army.strength);
  }

  /// Returns `true` if city is withdrawing all units of [army].
  bool isInCompleteWithdrawal(Army army) => !_armies.contains(army);

  /// Offer at most [offeredUnits] units to this city.
  ///
  /// The method will return the number of [Tile.good] that it will take.
  /// The tile is responsible for subtracting it.
  int offerUnits(Army army, Tile tile, int offeredUnits) {
    // Only city tiles can take back units.
    if (tile.pos != pos) return 0;

    final unitsTaken = min(offeredUnits, getUnitDeficit(army));
    _releasedUnits[army] ??= 0;
    _releasedUnits[army] -= unitsTaken;
    return unitsTaken;
  }

  void release(PlayerArmy army) {
    assert(_armies.contains(army));
    assert(army.deployedAt == this);
    _armies.remove(army);
  }

  /// Claims units that cannot be available elsewhere. Called by tiles.
  int requestUnits(Army army, Tile tile, Neighborhood hood) {
    // Evil tiles cannot request units.
    if (tile.isEvil) return 0;

    // Tiles around cities can get units if available.
    final distance = (hood.pos - pos).length;
    if (distance <= 2) {
      final request = hood.evil.ceil() + 10;
      final distanceModifiedRequest = request / (1 + distance);
      return _computeAndSubstractGiven(army, distanceModifiedRequest.round());
    }

    // By default, we don't give any units.
    return 0;
  }

  int _computeAndSubstractGiven(Army army, int requested) {
    final willingToGive = min(getAvailableUnits(army), maxUnitsPerRequest);
    final given = min(willingToGive.round(), requested);
    _releasedUnits[army] ??= 0;
    _releasedUnits[army] += given;
    return given;
  }

  static int _sum(int a, int b) => a + b;
}
