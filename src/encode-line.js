const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === "") {
    return str
  }
  let encoding = "";
  let prev;
  let count;
  count = 1;
  prev = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] != prev) {
      encoding = encoding.concat(count, prev);
      count = 1;
      prev = str[i];
    }
    else
      count++;
  }
  encoding = encoding.concat(count, prev);
  return encoding.replace(/[1]/g, '');
}

module.exports = {
  encodeLine
};
