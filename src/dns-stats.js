const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let s = '';
  for (let i = 0; i < domains.length; i++) {
    domains[i] = domains[i].split('.').reverse();
    s = '';
    for (let j = 0; j < domains[i].length; j++) {
      s += `.${domains[i][j]}`;
      if (result[s]) {
        result[s] += 1;
      } else {
        result[s] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
