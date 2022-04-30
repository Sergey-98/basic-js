const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  str = String(str);

 let repeatTimes, separator, addition, additionRepeatTimes, additionSeparator;
  if (options.repeatTimes) {
    repeatTimes = options.repeatTimes;
  } else {
    repeatTimes = 1;
  }
  if (options.separator) {
    separator = options.separator;
  } else {
    separator = '+';
  }
  if (options.addition || options.addition === false || options.addition === null) {
    addition = (typeof options.addition != 'string') ? String(options.addition) : options.addition;
  } else {
    addition = '';
  }
  if (options.additionRepeatTimes) {
    additionRepeatTimes = options.additionRepeatTimes;
  } else {
    additionRepeatTimes = 1;
  }
  if (options.additionSeparator) {
    additionSeparator = options.additionSeparator;
  } else {
    additionSeparator = '|';
  }
  //----------------
  let addArr = [];
  let strArr = [];
  if (addition != '') {
    for (let i = 0; i < additionRepeatTimes; i++) {
      addArr.push(addition);
    }
    addArr = addArr.join(additionSeparator);
  }
  for(let i = 0; i < repeatTimes; i++) {
    strArr.push(str + addArr);
  }
  strArr = strArr.join(separator);
  //----------------
  let add = addition.repeat;
  return strArr;
}

module.exports = {
  repeater
};
