import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/shared_state.dart';
import 'package:fortress_earth/src/ui/audio.dart';
import 'package:fortress_earth/src/ui/input.dart';
import 'package:malison/malison_web.dart';

class WhereDialog extends Screen<Input> {
  final List<City> cities;

  City? _selectedCity;

  final UISharedState state;

  WhereDialog(Iterable<City> cities, this.state)
    : cities = cities.toList(growable: false);

  bool get isTransparent => true;

  bool handleInput(Input input) {
    switch (input) {
      case Input.cancel:
        ui.pop();
        state.citiesPanelActive = false;
        break;

      default:
        return false;
    }

    return true;
  }

  bool keyDown(int keyCode, {required bool shift, required bool alt}) {
    for (final city in cities) {
      if (city.keyCode == keyCode) {
        _selectedCity = city;
        // TODO: add animation (at least wait a while)
        ui.pop(_selectedCity);
        state.citiesPanelActive = false;
        audioPlayer.bleep();
        return true;
      }
    }

    return false;
  }

  void update() {
    // Make sure we show the city dialog.
    state.citiesPanelActive = true;
  }
}
