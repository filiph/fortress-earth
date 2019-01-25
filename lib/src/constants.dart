/// Height of the whole UI.
const height = 55;

const mapHeight = height - 12;

const mapOffsetLeft = 0;

const mapOffsetTop = 0;

const mapWidth = width;

/// Distance from city after which units cannot go further.
const double maxDeploymentRange = 10;

/// Very large number representing impassibility of the oceans.
const oceanRoughness = 0xFFFFFF;

/// Width of the whole UI.
const width = 130;

/// How much larger an army must be to dominate over the opposition.
///
/// For example, a [dominanceCoefficient] of `1.5` means that to dominate
/// an evil army of `10`, you need a good army of at least `15`.
const dominanceCoefficient = 1.5;
