import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

class Unit {
  final int keyCode;

  final String name;

  final Color color;

  Vec _pos = Vec.zero;

  Vec _destination = Vec.zero;
  int _beforeNextMove = 0;

  /// The lesser this numbers, the faster the unit will travel.
  final ticksPerMove = 10;

  Unit(this.keyCode, this.name, this.color);

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
    KeyCode.one: Unit(KeyCode.one, "Green Berets", Color.lightGreen),
    KeyCode.two: Unit(KeyCode.two, "Green Berets", Color.lightGreen),
    KeyCode.three: Unit(KeyCode.three, "Green Berets", Color.lightGreen),
    KeyCode.four: Unit(KeyCode.four, "Army", Color.lightBlue),
    KeyCode.five: Unit(KeyCode.five, "Army", Color.lightBlue),
    KeyCode.six: Unit(KeyCode.six, "Army", Color.lightBlue),
    KeyCode.seven: Unit(KeyCode.seven, "Aerial", Color.lightAqua),
    KeyCode.eight: Unit(KeyCode.eight, "Death Squad", Color.lightPurple),
    KeyCode.nine: Unit(KeyCode.nine, "Death Squad", Color.lightPurple),
    KeyCode.zero: Unit(KeyCode.zero, "HQ", Color.lightGold),
  });

  void update() {
    for (final unit in units.values) {
      unit.updatePosition();
    }
  }
}
