const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let stringifiedStr = str === undefined ? "" : String(str);
  let addition = options.addition === undefined ? "" : String(options.addition);
  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let separator = options.separator || "+";
  let additionSeparator = options.additionSeparator || "|";
  let strings = [];
  let additions = [];

  for (let i = 0; i < additionRepeatTimes; i++) {
    additions.push(addition);
  }

  for (let j = 0; j < repeatTimes; j++) {
    strings.push(stringifiedStr + additions.join(additionSeparator));
  }

  return strings.join(separator);
};
