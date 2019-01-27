import 'package:fortress_earth/src/city.dart';
import 'package:fortress_earth/src/shared_state.dart';
import 'package:fortress_earth/src/ui/panels/panel.dart';
import 'package:fortress_earth/src/ui/theme.dart';
import 'package:malison/malison.dart';
import 'package:piecemeal/piecemeal.dart';

class CitiesPanel extends Panel {
  final List<City> _cities;

  final SharedState state;

  CitiesPanel(
      int x, int y, int width, int height, Map<Vec, City> cities, this.state)
      : _cities = cities.values.toList(growable: false)
          ..sort((a, b) => a.name.compareTo(b.name)),
        super(x, y, width, height);

  Color get borderColor =>
      state.citiesPanelActive ? TextTheme.important : Panel.defaultBorderColor;

  @override
  void renderPanel(Terminal terminal) {
    terminal.writeAt(0, 0, "Cities");

    // List of cities.
    int y = 2;
    for (final city in _cities) {
      terminal.writeAt(0, y, "${city.name}");
      terminal.writeAt(12, y, city.availableUnits.toString().padLeft(6) + 'K');
      terminal.writeAt(22, y, 'OK', TextTheme.ok);

      y++;
    }
  }
}
