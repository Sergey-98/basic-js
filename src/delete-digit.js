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
  let prom = [];
  for (let i = 0; i < arr.length; i++) {
    let copy = n.toString().split('');
    let res = copy.splice(i, 1);
    prom.push(copy.join(''));
  }
  let max = Math.max(...prom);
  return max;
}

module.exports = {
  deleteDigit
};
