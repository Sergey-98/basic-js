const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let prom = [];
  let count = 0;
  for (let i = 0; i < names.length; i++) {
    if (!prom.includes(names[i])) {
      prom.push(names[i]);
      count += 1;
    } else if (prom.includes(names[i]) && !prom.includes(`${names[i]}(${count})`)) {
      count = 1;
      prom.push(`${names[i]}(${count})`);
    } else if (prom.includes(names[i])) {
      count += 1;
      prom.push(`${names[i]}(${count})`);
    }
  }
  return prom;
}

module.exports = {
  renameFiles
};
