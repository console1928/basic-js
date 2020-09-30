const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value === undefined ? "()" : `( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number" || Number(position.toFixed(0)) !== position || this.chain[position] === undefined) {
      this.chain = [];
      throw new Error();
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join("~~");
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
