const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  let arrayCats = matrix.flat(Infinity);
  let count = [];

  for (let i = 0; i < arrayCats.length; i++) {
    if (arrayCats[i] === '^^') {
      count.push(arrayCats[i])
    }
  }

  return count.length;
}

module.exports = {
  countCats
};
