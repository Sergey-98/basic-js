const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = [];
  if (members == null || members == undefined || typeof(members) == 'number') {
    return false;
  }
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) == 'string') {
      let s;
      let mem = members[i].split('');
      for (let j = 0; j < mem.length; j++) {
        if (mem[j] === ' ') {
          s;
        }
        else {
          s = mem[j].toUpperCase();
          j = mem.length;
        }
      }
      // let s = (members[i][0] != ' ') ? members[i][0].toUpperCase() : members[i][1].toUpperCase();

      arr.push(s);
    } else {
      arr;
    }
  }
  return arr.sort().join('');
}

module.exports = {
  createDreamTeam
};
