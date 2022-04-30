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
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      let res = 0;
      res += 1;
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
          let prom = arr.flat();
          res = res + this.calculateDepth(prom);
          i = arr.length;
          // break;
        }
      }
    return res;
    }
  }
}

module.exports = {
  DepthCalculator
};
