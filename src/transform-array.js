const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next' && arr[i+2] === '--double-prev' ) {
      i += 2;
    }
    if (arr[i] === '--discard-next' && arr[i+1] != undefined) {
        i += 1;
    }
    if (arr[i] === '--discard-prev') {
      results.pop();
    }
    if (arr[i] === '--double-next' && arr[i+1] != undefined) {
      results.push(arr[i+1]);
    }
    if (arr[i] === '--double-prev' && i != 0 && arr[i-2] != '--discard-next') {
      results.push(arr[i-1]);
    }
    if (arr[i] != '--discard-next' && arr[i] != '--discard-prev' && arr[i] != '--double-next' && arr[i] != '--double-prev') {
      results.push(arr[i]);
    }
  }
  return results;
}

module.exports = {
  transform
};
