const { NotImplementedError } = require('../extensions/index.js');

/**

 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  constructor() {
    this.depth = 1;
  }
  calculateDepth(array, depth = 1) {
    if (!Array.isArray(array)) {
      return 0
    }
    if (depth == 1) {
      this.depth = 1
    }
    if (depth > this.depth) this.depth = depth;
    for (let e of array) {
      if (Array.isArray(e)) {
        this.calculateDepth(e, depth + 1);
      }
    }
    return this.depth;
  }
}


module.exports = {
  DepthCalculator
};
