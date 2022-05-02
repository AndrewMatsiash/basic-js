const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(dir = true) {
    this.direct = dir
  }
  encrypt(str, key) {

    if (typeof str !== 'string' || typeof key !== 'string') { throw new Error('Incorrect arguments!') }

    key = key.toUpperCase();
    str = str.toUpperCase();
    let encrStr = '';
    let count = 0;
    for (let i of str) {
      if (i.charCodeAt(0) <= 90 && i.charCodeAt(0) >= 65) {
        let char = i.charCodeAt(0) + key.charCodeAt(count) - 65;
        if (char > 90) {
          char = char - 26;
        }

        encrStr += String.fromCharCode(char);
        count += 1;
        if (count > key.length - 1) {
          count = 0;
        }
      } else {
        encrStr += i;
      }
    }
    if (this.direct == false) {
      encrStr = encrStr.split('').reverse().join('');
    }
    return encrStr
  }
  decrypt(str, key) {
    if (typeof str !== 'string' || typeof key !== 'string') { throw new Error('Incorrect arguments!') }

    key = key.toUpperCase();
    str = str.toUpperCase();
    let decrStr = '';
    let count = 0;
    for (let i of str) {
      if (i.charCodeAt(0) <= 90 && i.charCodeAt(0) >= 65) {
        let char = i.charCodeAt(0) - key.charCodeAt(count) + 65;
        if (char < 65) {
          char = char + 26;
        }

        decrStr += String.fromCharCode(char);
        count += 1;
        if (count > key.length - 1) {
          count = 0;
        }
      } else {
        decrStr += i;
      }

    }
    if (this.direct == false) {
      decrStr = decrStr.split('').reverse().join('');
    }
    return decrStr
  }
}

module.exports = {
  VigenereCipheringMachine
};
