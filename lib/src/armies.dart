import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/constants.dart';
import 'package:fortress_earth/src/tile.dart';
import 'package:fortress_earth/src/world.dart';
import 'package:malison/malison.dart';
import 'package:meta/meta.dart';
import 'package:piecemeal/piecemeal.dart';

class Armies {
  static final _defaultPlayerArmies =
      Map<int, PlayerArmy>.unmodifiable(<int, PlayerArmy>{
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
        initialDestination: Vec(39, 13)),
  });

  static final _defaultEvilArmies = <EvilArmy>[
    //EvilArmy("Cal Pawns", initialPosition: Vec(24, 13)),
    //EvilArmy("EU Pawns", initialPosition: Vec(70, 13)),
  ];

  final Map<int, PlayerArmy> playerArmies;

  final List<EvilArmy> evilArmies;

  Armies()
      : playerArmies = _defaultPlayerArmies,
        evilArmies = _defaultEvilArmies;

  factory Armies.from(List<Army> source) {
    int keyCode = 'a'.codeUnitAt(0);

    final playerEntries =
        source.whereType<PlayerArmy>().map((army) => MapEntry(keyCode++, army));
    final playerMap = Map<int, PlayerArmy>.fromEntries(playerEntries);

    final evilList = source.whereType<EvilArmy>().toList();

    return Armies._(playerMap, evilList);
  }

  Armies._(this.playerArmies, this.evilArmies);

  Iterable<Army> get armies sync* {
    yield* playerArmies.values;
    yield* evilArmies;
  }

  void update(World world) {
    for (final army in playerArmies.values) {
      army.updatePosition(world, armies);
    }

    for (final evilArmy in evilArmies) {
      evilArmy.updatePosition(world, armies);
    }
  }
}

abstract class Army {
  final bool isEvil;

  /// The max number of units. Also the initial number of available units.
  int maxStrength = 500;

  /// Number of units that are out there.
  int get fieldedUnits => _fieldedUnits;

  int _fieldedUnits = 0;

  void field(int count) {
    assert(
        count <= availableStrength,
        "$this is trying to field $count units "
        "although only $availableStrength is available");

    _fieldedUnits += count;
  }

  void withdraw(int count) {
    assert(
        count <= _fieldedUnits,
        "$this is trying to withdraw $count units "
        "although only $_fieldedUnits was fielded");

    _fieldedUnits -= count;
  }

  int _deadUnits = 0;

  bool isAlive = true;

  final String name;

  final Color color;

  /// Current position. Starts in the middle of the Atlantic.
  Vec _pos;

  Vec _destination = Vec.zero;

  int _beforeNextMove = 0;

  /// The lesser this numbers, the faster the unit will travel.
  final ticksPerMove = 10;

  Army._(this.name, this.color, this.isEvil,
      {@required Vec initialPosition, Vec initialDestination})
      : assert(initialPosition != null),
        _pos = initialPosition {
    _destination = initialDestination ?? _pos;
  }

  int get availableStrength {
    assert(
        maxStrength >= fieldedUnits + deadUnits,
        "There are more fielded ($fieldedUnits) and dead ($deadUnits) "
        "than the max strength ($maxStrength) of $this");
    return maxStrength - fieldedUnits - deadUnits;
  }

  /// The number of units that have died and aren't replaced yet
  /// by new recruits.
  int get deadUnits => _deadUnits;

  bool get hasArrived => _destination == _pos;

  /// Distance from army [pos] after which units cannot go further.
  double get maxDeploymentRange;

  /// Max number of units that this army can land with in an enemy-controlled
  /// city.
  int get maxUnitsPerInvasion => maxUnitsPerRequest * 10;

  /// Max number of units that this army can deploy at one time.
  int get maxUnitsPerRequest => 10;

  Vec get pos => _pos;

  /// Just [maxDeploymentRange] squared. Useful for distance comparisons
  /// without the need to compute the square root.
  double get _maxDeploymentRangeSquared =>
      maxDeploymentRange * maxDeploymentRange;

  /// Marks [count] units as dead.
  void bury(int count) {
    assert(
        count <= fieldedUnits ||
            // TODO: remove this and instead make sure the math is okay even
            //       for dying armies
            !isAlive,
        "Unfielded units cannot die: "
        "$this was trying to bury $count units out of $fieldedUnits. "
        "The max strength was $maxStrength and there are $deadUnits dead.");
    _deadUnits += count;
    _fieldedUnits -= count;
    // TODO: report loss of units to pubSub
  }

  /// Returns `true` if [tile] is in [maxDeploymentRange] and army is
  /// in expansion mode.
  bool canExpandTo(Tile tile);

  @mustCallSuper
  void setDestination(Vec vec) {
    assert(isAlive, "Trying to set destination of a dead army.");
    _destination = vec;
  }

  @override
  String toString() => "$runtimeType<$name>";

  @mustCallSuper
  void updatePosition(World world, Iterable<Army> otherArmies) {
    if (!isAlive) return;
    if (hasArrived) return;

    _beforeNextMove -= 1;
    if (_beforeNextMove > 0) return;

    final direction = (_destination - _pos).nearestDirection;
    _pos += direction;

    _beforeNextMove = ticksPerMove;
  }
}

class EvilArmy extends Army {
  static const _generatingUnitsDuration = Duration(hours: 360 * 2);

  final DateTime spawnTime;

  EvilArmy(String name, {DateTime spawnTime, Vec initialPosition})
      : spawnTime = spawnTime ?? beginningOfPlay,
        super._(name, Color.red, true, initialPosition: initialPosition);

  @override
  double get maxDeploymentRange => double.infinity;

  /// Always returns `true` for [EvilArmy].
  @override
  bool canExpandTo(Tile tile) => true;

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

  RangeMode _rangeMode = RangeMode.tight;

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
  double get maxDeploymentRange {
    switch (_rangeMode) {
      case RangeMode.tight:
        return 3;
      case RangeMode.expanded:
        return defaultMaxDeploymentRange;
      case RangeMode.seekAndDestroy:
        return double.infinity;
      default:
        throw StateError('Unhandled range mode: $_rangeMode');
    }
  }

  bool canDisembarkTo(Vec position) {
    if (!hasArrived) return false;

    final distanceSquared = (position - pos).lengthSquared;
    const maxDistance = 2;
    return distanceSquared <= maxDistance * maxDistance;
  }

  /// Returns `true` if [tile] is in [maxDeploymentRange] from "home".
  bool canExpandTo(Tile tile) {
    if (deployedAt == null) return false;

    final Vec home = deployedAt.pos;
    final distanceSquared = (tile.pos - home).lengthSquared;
    return distanceSquared <= _maxDeploymentRangeSquared;
  }

  @override
  void setDestination(Vec vec) {
    if (_deployedAt?.pos == vec) {
      // Setting the destination we're currently at.
      super.setDestination(vec);
      return;
    }
    _latestCity = _deployedAt;
    if (_deployedAt != null) {
      _deployedAt.release(this);
      _deployedAt = null;
    }
    super.setDestination(vec);
  }

  void setRangeMode(RangeMode rangeMode) {
    _rangeMode = rangeMode;
  }

  @override
  void updatePosition(World world, Iterable<Army> otherArmies) {
    if (hasArrived) return;

    super.updatePosition(world, otherArmies);

    if (hasArrived) {
      final city = world.cities[pos];
      _deployedAt = city;
      _deployedAt.deploy(this);
      _latestCity = city;

      _moveToClosestUnoccupiedTile(
          world, pos, otherArmies.whereType<PlayerArmy>().toList());
    }
  }

  void _moveToClosestUnoccupiedTile(
      World world, Vec start, List<PlayerArmy> otherArmies) {
    final List<Vec> open = <Vec>[];
    final Set<Vec> close = Set();
    open.addAll(start.neighbors);
    Vec result;

    while (open.isNotEmpty) {
      var current = open.removeAt(0);
      var tile = world.tiles[current];
      if (tile.isOcean) {
        close.add(current);
        open.addAll(current.neighbors.where((vec) => !close.contains(vec)));
        continue;
      }
      if (otherArmies.any((army) => army.pos == current)) {
        close.add(current);
        open.addAll(current.neighbors.where((vec) => !close.contains(vec)));
        continue;
      }
      result = current;
      break;
    }
    if (result == null) {
      throw StateError('Cannot find place for $this to land.');
    }
    _destination = result;
    _pos = result;
  }
}

/// Mode of operation for a given [PlayerArmy].
enum RangeMode {
  /// Hug the city.
  tight,

  /// Expand to an expanded area around the city.
  expanded,

  /// Just go and destroy.
  seekAndDestroy
}
