const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  let arr = n.toString().split('');
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    let removedNum = arr.splice(i, 1)
    let newNum = arr.join('');
    let newNumNumber = +newNum;
    resultArr.push(newNumNumber);
    arr.splice(i, 0, removedNum);
  }

  let sortArr = resultArr.sort((a, b) => a - b);
  return sortArr[sortArr.length - 1]
}

module.exports = {
  deleteDigit
};
