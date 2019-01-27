/// Enum class defining the high-level inputs from the user.
///
/// Physical keys on the keyboard are mapped to these, which the user interface
/// then interprets.
///
/// From https://github.com/munificent/hauberk.
class Input {
  /// Selects a menu item.
  static const ok = Input("ok");

  /// Cancels selection.
  static const cancel = Input("cancel");

  /// Exit to game menu.
  static const exitToGameMenu = Input("exitToGameMenu");

  /// Pause update.
  static const pause = Input("pause");

  /// Directional inputs.
  static const n = Input("n");
  static const ne = Input("ne");
  static const e = Input("e");
  static const se = Input("se");
  static const s = Input("s");
  static const sw = Input("sw");
  static const w = Input("w");
  static const nw = Input("nw");

  /// Long-range directional inputs (move more squares per keypress).
  static const longN = Input("longN");
  static const longNE = Input("longNE");
  static const longE = Input("longE");
  static const longSE = Input("longSE");
  static const longS = Input("longS");
  static const longSW = Input("longSW");
  static const longW = Input("longW");
  static const longNW = Input("longNW");

  /// Verbs. These open UIs.
  static const go = Input("send");

  /// Interface inputs.
  static const fullscreen = Input("fullscreen");

  /// Debug inputs.
  static const debugNeedGradient = Input("debugNeedGradient");

  final String name;

  const Input(this.name);
}
