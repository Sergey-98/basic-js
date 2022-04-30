const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = arr;
  let prom = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] != -1) {
      prom.push(newArr[i]);
    } else {
      continue;
    }
  }
  prom.sort((a, b) => a - b);
  console.log(prom, arr);
  newArr = [];
  let s = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) {
      newArr.push(-1);
    } else {
      s+=1;
      newArr.push(prom[s-1]);
    }
  }
  return newArr;
}

module.exports = {
  sortByHeight
};
