const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value = ' ') {
  this.arr.push(`( ${value} )`);
  return this;
},
  removeLink(position) {
    console.log(this.arr);
    if (typeof position === 'number' && Number.isInteger(position) == true && this.arr.length - 1 >= position && position >= 1) {
      this.arr.splice(position - 1, 1);
    } else {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    this.arr = this.arr.join('~~');
    let res = this.arr;
    this.arr = [];
    return res;
    
  }
};

module.exports = {
  chainMaker
};
