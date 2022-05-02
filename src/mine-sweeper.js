const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arr3 = [];
  for (let i = 0; i < matrix.length; i++) {
    let arr2 = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let sum = 0;
      for (let k = -1; k <= 1; k++) {
        for (let q = -1; q <= 1; q++) {
          if ((i + k) >= 0 && (i + k) < matrix.length) {
            if ((j + q) >= 0 && (j + q) < matrix[i].length) {
              if (matrix[i + k][j + q] === true) {
                if (k !== 0 || q !== 0) {
                  sum = sum + 1
                }
              }
            }
          }
        }
      }
      arr2[j] = sum;
    }
    arr3[i] = arr2;
  }
  return arr3
}

module.exports = {
  minesweeper
};
