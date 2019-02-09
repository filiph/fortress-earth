import 'package:fortress_earth/src/pub_sub.dart';
import 'package:fortress_earth/src/tile.dart';
import 'package:piecemeal/piecemeal.dart';
import 'package:test/test.dart';

void main() {
  group("pubsub", () {
    PubSub pubsub;

    List<TileTakenOverEvent> events;

    /// A helper function to record the fact that an event was received.
    void _recordEventFired(TileTakenOverEvent event) {
      events.add(event);
    }

    setUp(() {
      pubsub = PubSub();
      events = [];
    });

    tearDown(() {
      pubsub.close();
    });

    test("subscription works", () {
      pubsub.tileTakenOver.listen(_recordEventFired);
      pubsub.seal();
      pubsub
          .publishTileTakenOver(TileTakenOverEvent(Tile(Vec(0, 0), 20), true));
      expect(events.length, 1);
      expect(events.single.tile.pos, Vec(0, 0));
    });

    test("event doesn't fire when there are no listener", () {
      pubsub.seal();
      pubsub
          .publishTileTakenOver(TileTakenOverEvent(Tile(Vec(0, 0), 20), true));
      expect(events.length, 0);
    });

    test("event doesn't fire after subscription cancelled", () {
      final sub = pubsub.tileTakenOver.listen(_recordEventFired);
      pubsub.seal();
      pubsub
          .publishTileTakenOver(TileTakenOverEvent(Tile(Vec(1, 0), 20), true));
      sub.cancel();
      pubsub.publishTileTakenOver(
          TileTakenOverEvent(Tile(Vec(0, 100), 20), true));
      expect(events.length, 1);
      expect(events.single.tile.pos, Vec(1, 0));
    });

    test("event broadcasted to listeners in order of subscription", () {
      void zerothRecord(TileTakenOverEvent event) {
        // The [record] function shouldn't have fired yet.
        expect(events, isEmpty);
      }

      void secondRecord(TileTakenOverEvent event) {
        // The [record] function should have recorded this same event just now.
        expect(events.last.tile, event.tile);
        expect(events.last.winningFactionIsEvil, event.winningFactionIsEvil);
      }

      pubsub.tileTakenOver.listen(zerothRecord);
      pubsub.tileTakenOver.listen(_recordEventFired);
      pubsub.tileTakenOver.listen(secondRecord);
      pubsub.seal();
      pubsub
          .publishTileTakenOver(TileTakenOverEvent(Tile(Vec(1, 0), 20), true));
    });
  });
}
