const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  function isControlSequence(el) {
    return el === "--discard-next" || el === "--discard-prev" || el === "--double-next" || el === "--double-prev";
  }

  if (Array.isArray(arr)) {
    let result = arr.map(el => el);
    for (let i = 0; i < result.length; i++) {
      if (result[i] === "--discard-next" && result.length > i + 1 && !isControlSequence(result[i + 1])) {
        result[i + 1] = "--to-be-deleted";
      } else if (result[i] === "--discard-prev" && i > 1 && !isControlSequence(result[i - 1])) {
        result[i - 1] = "--to-be-deleted";
      } else if (result[i] === "--double-next" && result.length > i + 1 && !isControlSequence(result[i + 1])) {
        result[i] = result[i + 1];
      } else if (result[i] === "--double-prev" && i > 1 && !isControlSequence(result[i - 1])) {
        result[i] = result[i - 1];
      }
    }
    return result.filter(el => { return (!isControlSequence(el) && el !== "--to-be-deleted"); });
  } else {
    throw new Error();
  }
};
