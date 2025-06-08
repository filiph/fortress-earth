import 'package:fortress_earth/src/armies.dart';
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
  final String name;

  final int keyCode;

  final List<PlayerArmy> _armies = [];

  final Vec pos;

  City(this.name, this.pos, {int? keyCode})
    : keyCode = keyCode ?? name.codeUnitAt(0);

  /// Deploys [army] in this city.
  void deploy(PlayerArmy army) {
    assert(!_armies.contains(army));
    assert(army.deployedAt == this);
    _armies.add(army);
  }

  /// Returns `true` if city is withdrawing all units of [army].
  bool isInCompleteWithdrawal(Army army) => !_armies.contains(army);

  void release(PlayerArmy army) {
    assert(_armies.contains(army));
    assert(army.deployedAt == this);
    _armies.remove(army);
  }
}
