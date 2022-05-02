const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],
  length: 0,

  getLength() {

    return this.length
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    this.length++
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position) || position <= 0 || position >= this.chain.length) {
      this.chain.length = 0;
      throw new Error('You can\'t remove incorrect link!');
    }

    this.chain.splice(position - 1, 1);
    this.length--
    return this
  },
  reverseChain() {

    this.chain.reverse();
    return this
  },
  finishChain() {
    let str = this.chain.join('~~');
    this.chain.length = 0;
    return str
  }
};

module.exports = {
  chainMaker
};
