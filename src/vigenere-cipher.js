const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (isReverse = true) {
    this.isReverse = isReverse;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    //------------
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    message = message.toUpperCase().split('');
    key = key.toUpperCase().split('');
    //------------
    //-------Формируем новый ключ
    let s = 0;
    let keyArr = [];
    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i])) {
        keyArr.push(key[s]);
      s += 1;
      if (s >= key.length) {
        s = 0;
      }
      } else {
        keyArr.push(message[i]);
      }
      
    }
    let newKey = keyArr;
    //-------------Добавление данных в массив исходя из формулы C[i] = (P[i] + K[i]) % 26;
    let res = [];
    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i])) {
        let C = (this.findIndex(alphabet, message[i]) + this.findIndex(alphabet, newKey[i])) % 26;
        res.push(alphabet[C]);
      } else {
        res.push(message[i]);
      }
    }
    return (this.isReverse) ? res.join('') : res.reverse().join('');
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    //------------
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    message = message.toUpperCase().split('');
    key = key.toUpperCase().split('');
    //------------

    //-------Формируем новый ключ
    let s = 0;
    let keyArr = [];

    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i])) {
        keyArr.push(key[s]);
      s += 1;
      if (s >= key.length) {
        s = 0;
      }
      } else {
        keyArr.push(message[i]);
      }
      
    }
    let newKey = keyArr;
    //-------------
    //-------------Добавление данных в массив исходя из формулы P[i] = (C[i] - K[i] + 26) % 26;
    let res = [];
    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i])) {
        let P = (this.findIndex(alphabet, message[i]) - this.findIndex(alphabet, newKey[i]) + 26) % 26;
        res.push(alphabet[P]);
      } else {
        res.push(message[i]);
      }
    }
    return (this.isReverse) ? res.join('') : res.reverse().join('');
  }
  //--------Метод для определения индекса элемента в алфавите
  findIndex(alphabet, elem) {
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet[i] == elem) {
        return i;
      }
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
