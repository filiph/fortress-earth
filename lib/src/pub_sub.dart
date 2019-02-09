import 'dart:async';

import 'package:fortress_earth/src/tile.dart';
import 'package:logging/logging.dart';

final _log = Logger("PubSub");

class PubSub implements Sink<void> {
  StreamController<TileTakenOverEvent> _tileTakenOver;

  bool _sealed = false;

  PubSub() {
    _tileTakenOver = StreamController<TileTakenOverEvent>.broadcast(
      sync: true,
      onListen: _assertNoSubscribersAfterSealed,
    );
  }

  Stream<TileTakenOverEvent> get tileTakenOver => _tileTakenOver.stream;

  /// Do not use.
  ///
  /// This is here to satisfy [Sink]'s contract. We implement [Sink] because
  /// we want to get the linter rule `close_sinks`.
  @override
  @deprecated
  void add(void _) {
    throw UnimplementedError("Please call the concrete publish___() methods.");
  }

  @override
  void close() {
    _log.fine(() => "Closing pubsub");
    _tileTakenOver.close();
  }

  void publishTileTakenOver(TileTakenOverEvent e) {
    _assertSealedBeforePublishing();
    _log.finest(() => "New $e about to be published.");
    _tileTakenOver.add(e);
  }

  void seal() {
    _sealed = true;
  }

  void _assertNoSubscribersAfterSealed() {
    assert(
        !_sealed, "Please do not add more subscribers after pubsub is sealed.");
  }

  void _assertSealedBeforePublishing() {
    assert(_sealed, "Please seal pubsub before publishing events.");
  }
}

class TileTakenOverEvent {
  final Tile tile;
  final bool winningFactionIsEvil;

  TileTakenOverEvent(this.tile, this.winningFactionIsEvil) : super();
}
