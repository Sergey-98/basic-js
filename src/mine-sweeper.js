const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let arr = [];
  let count = 0;

  //-----создаем пустой массив для заполнения данными 
  for (let i = 0; i < matrix.length; i++) {
    let prom = new Array(matrix[i].length);
    arr.push(prom);
  }
 //-----заполняем пустой массив полнения данными 
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      arr[i][j] = 0;
    }
  }
//-----Пробегаемся по каждой ячейке и проверив условие, устанавливаем значение ячейке
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j-1]) {
        count += 1;
      }
      if (matrix[i][j+1]) {
        count += 1;
      }
      if (matrix[i+1] && matrix[i+1][j]) {
        count += 1;
      }
      if (matrix[i+1] && matrix[i+1][j-1]) {
        count += 1;
      }
      if (matrix[i+1] && matrix[i+1][j+1]) {
        count += 1;
      }
      if (matrix[i-1] && matrix[i-1][j]) {
        count += 1;
      }
      if (matrix[i-1] && matrix[i-1][j-1]) {
        count += 1;
      }
      if (matrix[i-1] && matrix[i-1][j+1]) {
        count += 1;
      }
      console.log(count);
      arr[i][j] = count;
      count = 0;
    }
  }
  return arr;
}

module.exports = {
  minesweeper
};
