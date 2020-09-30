const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.direct = (type === true || type === undefined) ? true : false;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.vigenereSquare = [];

    for (let i = 0; i < 26; i++) {
      this.vigenereSquare.push(this.alphabet);
      this.alphabet = this.alphabet.slice(1, this.alphabet.length) + this.alphabet[0];
    }
  }

  getKeyString = (message, key) => {
    let keyString = "";
    let currentChar = 0;

    for (let j = 0; j < message.length; j++) {
      if ((message[j]).toUpperCase().charCodeAt(0) < 65 || (message[j]).toUpperCase().charCodeAt(0) > 90) {
        keyString += message[j];
      } else {
        keyString += (key[currentChar % key.length]).toUpperCase();
        currentChar++;
      }
    }

    return keyString;
  }

  getMessage = (message, key, encrypt) => {
    if (message === undefined || key === undefined) {
      throw new Error();
    }

    let keyString = this.getKeyString(message, key);
    let resultMessage = "";

    for (let k = 0; k < message.length; k++) {
      let stringNumber = 0;
      this.vigenereSquare.forEach((str, index) => {
        if (str[0] === keyString[k]) { stringNumber = index; }
      });
      if ((message[k]).toUpperCase().charCodeAt(0) < 65 || (message[k]).toUpperCase().charCodeAt(0) > 90) {
        resultMessage += message[k];
      } else {
        resultMessage += this.vigenereSquare[encrypt ? stringNumber : 0][this.vigenereSquare[encrypt ? 0 : stringNumber].indexOf((message[k]).toUpperCase())];
      }
    }

    return this.direct ? resultMessage : resultMessage.split("").reverse().join("");
  }

  encrypt = (message, key) => this.getMessage(message, key, true);

  decrypt = (encryptedMessage, key) => this.getMessage(encryptedMessage, key, false);
}

module.exports = VigenereCipheringMachine;
