const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!sampleActivity || (typeof sampleActivity) !== 'string' || isNaN(sampleActivity) || +sampleActivity < 1) {
    return false
  }
  let year = 0
  let per = 0
  per = 0.693 / HALF_LIFE_PERIOD
  year = (Math.log(MODERN_ACTIVITY / sampleActivity)) / per

  if (year < 0) return false

  return Math.trunc(Math.ceil(year))
}

module.exports = {
  dateSample
};
