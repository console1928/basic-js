const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity === "string" &&
    !isNaN(Number(sampleActivity)) &&
    Number(sampleActivity) > 0 &&
    Number(sampleActivity) <= 15
  ) {
    return Math.ceil(Math.log2(MODERN_ACTIVITY / Number(sampleActivity)) * HALF_LIFE_PERIOD);
  } else {
    return false;
  }
};
