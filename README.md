[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

# Fortress Earth

A keyboard-only game of grand strategy based on cellular automaton behavior.

Design goals:

- **Low-barrier.** Immediate startup. Web-based.
  Minimal hardware requirements. No gore or mature themes.
- **Keyboard-only.** No mouse input needed, 
  so the game can be played comfortably even on a laptop.
  Player should feel like a "hacker" while ordering her armies around.
- **Grand strategy.** Player is a "commander-in-chief":
  making only the most strategic of decisions, such as sending armies around
  the world.

## Development

This is a pure Dart web project. It uses `pkg:malison` to render ASCII art
in the browser in a browser-independent and performant way.

### Re-building the map

The game runs on a map (currently map of the Earth). This map is represented
in code in the generated `lib/src/data/earth_terrain.part.dart`.

To recreate this data, you can run `make build_map`. This will download
the underlying data from https://www.naturalearthdata.com and parse it.
