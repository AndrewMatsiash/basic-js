const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let a = 0;

  for (i = 1; i <= disksNumber; i++) {
    a = 2 * a + 1;
  }

  let obj = {
    turns: a,
    seconds: Math.floor(a / turnsSpeed * 3600),
  }


  return obj
}

module.exports = {
  calculateHanoi
};
