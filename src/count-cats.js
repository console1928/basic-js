const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let result = 0;
  for (let arr of backyard) {
    for (let el of arr) {
      if (el === "^^") { result++ }
    }
  }
  return result;
};
