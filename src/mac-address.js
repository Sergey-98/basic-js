const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let regNum = /[0-9]/;
  let regWord = /[A-F]/;
  let arr = n.split('-');
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length == 2) {
      for (let j = 0; j < arr[i].length; j++) {
        if (regNum.test(arr[i][j]) || regNum.test(arr[i][j]) || regWord.test(arr[i][j]) || regWord.test(arr[i][j])) {
          sum += 1;
        }
      }
  }
}
return (sum == 12) ? true : false;
}
module.exports = {
  isMAC48Address
};
