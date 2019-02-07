const double defaultMaxDeploymentRange = 7;

/// How much larger an army must be to dominate over the opposition.
///
/// For example, a [dominanceCoefficient] of `1.5` means that to dominate
/// an evil army of `10`, you need a good unit count of at least `15`.
const dominanceCoefficient = 1.5;

/// Height of the whole UI.
const height = 55;

const lowerPanelHeight = 12;

const mapHeight = height - lowerPanelHeight;

const mapOffsetLeft = 0;

const mapOffsetTop = 0;

const mapWidth = width;

/// Very large number representing impassibility of the oceans.
const oceanRoughness = 0xFFFFFF;

/// Width of the whole UI.
const width = 130;

/// The first day of play.
final beginningOfPlay = DateTime.utc(2014, 9, 1);

/// Duration of one tick of play.
const timeStep = Duration(hours: 1);