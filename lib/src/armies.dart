import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/world.dart';
import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

class Army {
  final int keyCode;

  int strength = 500;

  final String name;

  final Color color;

  /// Current position. Starts in the middle of the Atlantic.
  Vec _pos = Vec(50, 18);

  Vec _destination = Vec.zero;

  City _deployedAt;

  int _beforeNextMove = 0;

  /// The lesser this numbers, the faster the unit will travel.
  final ticksPerMove = 10;

  Army(this.keyCode, this.name, this.color, {Vec initialDestination}) {
    _destination = initialDestination ?? _pos;
  }

  City get deployedAt => _deployedAt;

  bool get hasArrived => _destination == _pos;

  Vec get pos => _pos;

  void setDestination(Vec vec) {
    if (_deployedAt != null) {
      _deployedAt.release(this);
    }
    _destination = vec;
  }

  void updatePosition(World world) {
    if (hasArrived) return;

    _beforeNextMove -= 1;
    if (_beforeNextMove > 0) return;

    final direction = (_destination - _pos).nearestDirection;
    _pos += direction;

    _beforeNextMove = ticksPerMove;

    if (hasArrived) {
      final city = world.cities[pos];
      _deployedAt = city;
      _deployedAt.deploy(this);
    }
  }
}

class Armies {
  final Map<int, Army> armies = Map.unmodifiable({
    KeyCode.one: Army(KeyCode.one, "Marines", Color.lightGreen,
        initialDestination: Vec(92, 18)),
    KeyCode.two: Army(KeyCode.two, "Marines", Color.lightGreen,
        initialDestination: Vec(37, 26)),
    KeyCode.three: Army(KeyCode.three, "Marines", Color.lightGreen),
    KeyCode.four: Army(KeyCode.four, "Army", Color.lightBlue),
    KeyCode.five: Army(KeyCode.five, "Army", Color.lightBlue,
        initialDestination: Vec(66, 12)),
    KeyCode.six: Army(KeyCode.six, "Army", Color.lightBlue),
    KeyCode.seven: Army(KeyCode.seven, "Air Force", Color.lightAqua),
    KeyCode.eight: Army(KeyCode.eight, "Squad", Color.lightPurple,
        initialDestination: Vec(77, 17)),
    KeyCode.nine: Army(KeyCode.nine, "Squad", Color.lightPurple),
    KeyCode.zero: Army(KeyCode.zero, "HQ", Color.lightGold,
        initialDestination: Vec(40, 13)),
  });

  void update(World world) {
    for (final army in armies.values) {
      army.updatePosition(world);
    }
  }
}
