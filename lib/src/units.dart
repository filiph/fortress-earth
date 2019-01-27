import 'package:fortress_earth/src/world.dart';
import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

class Unit {
  final int keyCode;

  final String name;

  final Color color;

  /// Current position. Starts in the middle of the Atlantic.
  Vec _pos = Vec(50, 18);

  Vec _destination = Vec.zero;

  int _beforeNextMove = 0;

  /// The lesser this numbers, the faster the unit will travel.
  final ticksPerMove = 10;

  Unit(this.keyCode, this.name, this.color, {Vec initialDestination}) {
    _destination = initialDestination ?? _pos;
  }

  bool get hasArrived => _destination == _pos;

  Vec get pos => _pos;

  void setDestination(Vec vec) => _destination = vec;

  void updatePosition() {
    if (hasArrived) return;

    _beforeNextMove -= 1;
    if (_beforeNextMove > 0) return;

    final direction = (_destination - _pos).nearestDirection;
    _pos += direction;

    _beforeNextMove = ticksPerMove;
  }
}

class Units {
  final Map<int, Unit> units = Map.unmodifiable({
    KeyCode.one: Unit(KeyCode.one, "Marines", Color.lightGreen,
        initialDestination: Vec(92, 18)),
    KeyCode.two: Unit(KeyCode.two, "Marines", Color.lightGreen,
        initialDestination: Vec(37, 26)),
    KeyCode.three: Unit(KeyCode.three, "Marines", Color.lightGreen),
    KeyCode.four: Unit(KeyCode.four, "Army", Color.lightBlue),
    KeyCode.five: Unit(KeyCode.five, "Army", Color.lightBlue,
        initialDestination: Vec(66, 12)),
    KeyCode.six: Unit(KeyCode.six, "Army", Color.lightBlue),
    KeyCode.seven: Unit(KeyCode.seven, "Air Force", Color.lightAqua),
    KeyCode.eight: Unit(KeyCode.eight, "Squad", Color.lightPurple,
        initialDestination: Vec(77, 17)),
    KeyCode.nine: Unit(KeyCode.nine, "Squad", Color.lightPurple),
    KeyCode.zero: Unit(KeyCode.zero, "HQ", Color.lightGold,
        initialDestination: Vec(40, 13)),
  });

  void update(World world) {
    for (final unit in units.values) {
      if (unit.hasArrived) continue;
      unit.updatePosition();

      // Hack: see if unit has arrived just now. Better to have a callback
      //       or assign the unit to the city somehow.
      if (unit.hasArrived) {
        world.cities[unit.pos].deploy(unit);
      }
    }
  }
}
