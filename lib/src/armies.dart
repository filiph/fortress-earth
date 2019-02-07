import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/constants.dart';
import 'package:fortress_earth/src/world.dart';
import 'package:malison/malison.dart';
import 'package:meta/meta.dart';
import 'package:piecemeal/piecemeal.dart';

class Armies {
  final Map<int, PlayerArmy> playerArmies = Map.unmodifiable({
    KeyCode.one: PlayerArmy(KeyCode.one, "Marines", Color.lightGreen,
        initialDestination: Vec(92, 18)),
    KeyCode.two: PlayerArmy(KeyCode.two, "Marines", Color.lightGreen,
        initialDestination: Vec(37, 26)),
    KeyCode.three: PlayerArmy(KeyCode.three, "Marines", Color.lightGreen),
    KeyCode.four: PlayerArmy(KeyCode.four, "Infantry", Color.lightBlue),
    KeyCode.five: PlayerArmy(KeyCode.five, "Infantry", Color.lightBlue),
    KeyCode.six: PlayerArmy(KeyCode.six, "Infantry", Color.lightBlue),
    KeyCode.seven: PlayerArmy(KeyCode.seven, "Air Force", Color.lightAqua),
    KeyCode.eight: PlayerArmy(KeyCode.eight, "Squad", Color.lightPurple,
        initialDestination: Vec(77, 17)),
    KeyCode.nine: PlayerArmy(KeyCode.nine, "Squad", Color.lightPurple),
    KeyCode.zero: PlayerArmy(KeyCode.zero, "HQ", Color.lightGold,
        initialDestination: Vec(40, 13)),
  });

  final List<EvilArmy> evilArmies = [
    EvilArmy("Cal Pawns", initialPosition: Vec(24, 13)),
    EvilArmy("EU Pawns", initialPosition: Vec(70, 13)),
  ];

  Iterable<Army> get armies sync* {
    yield* playerArmies.values;
    yield* evilArmies;
  }

  void update(World world) {
    for (final army in playerArmies.values) {
      army.updatePosition(world);
    }

    for (final evilArmy in evilArmies) {
      evilArmy.updatePosition(world);
    }
  }
}

class Army {
  final bool isEvil;

  int strength = 500;

  final String name;

  /// Distance from army [pos] after which units cannot go further.
  final double maxDeploymentRange;

  final Color color;

  /// Current position. Starts in the middle of the Atlantic.
  Vec _pos;

  Vec _destination = Vec.zero;

  int _beforeNextMove = 0;

  /// The lesser this numbers, the faster the unit will travel.
  final ticksPerMove = 10;

  Army._(this.name, this.color, this.isEvil,
      {@required initialPosition, Vec initialDestination})
      : assert(initialPosition != null),
        _pos = initialPosition,
        maxDeploymentRange =
            isEvil ? double.infinity : defaultMaxDeploymentRange {
    _destination = initialDestination ?? _pos;
  }

  bool get hasArrived => _destination == _pos;

  Vec get pos => _pos;

  @mustCallSuper
  void setDestination(Vec vec) {
    _destination = vec;
  }

  @mustCallSuper
  void updatePosition(World world) {
    if (hasArrived) return;

    _beforeNextMove -= 1;
    if (_beforeNextMove > 0) return;

    final direction = (_destination - _pos).nearestDirection;
    _pos += direction;

    _beforeNextMove = ticksPerMove;
  }
}

class EvilArmy extends Army {
  static const _generatingUnitsDuration = Duration(days: 365);

  final DateTime spawnTime;

  EvilArmy(String name, {DateTime spawnTime, Vec initialPosition})
      : spawnTime = spawnTime ?? beginningOfPlay,
        super._(name, Color.red, true, initialPosition: initialPosition);

  bool isGeneratingUnits(DateTime time) {
    assert(time.isUtc);
    if (time.isBefore(spawnTime)) return false;
    return time.isBefore(spawnTime.add(_generatingUnitsDuration));
  }
}

class PlayerArmy extends Army {
  final int keyCode;

  /// The city that this Army was stationed at last.
  City _latestCity;

  City _deployedAt;

  PlayerArmy(this.keyCode, String name, Color color,
      {Vec initialPosition = const Vec(50, 18), Vec initialDestination})
      : super._(name, color, false,
            initialPosition: initialPosition,
            initialDestination: initialDestination);

  /// The city at which this army is currently deployed. Similar to
  /// [_latestCity] with one difference: [deployedAt] reverts to `null`
  /// as soon as this army leaves the city.
  City get deployedAt => _deployedAt;

  @override
  void setDestination(Vec vec) {
    if (_deployedAt?.pos == vec) {
      // Setting the destination we're currently at.
      return;
    }
    _latestCity = _deployedAt;
    if (_deployedAt != null) {
      _deployedAt.release(this);
    }
    super.setDestination(vec);
  }

  @override
  void updatePosition(World world) {
    if (hasArrived) return;

    super.updatePosition(world);

    if (hasArrived) {
      final city = world.cities[pos];
      _deployedAt = city;
      _deployedAt.deploy(this);
      _latestCity = city;
    }
  }
}
