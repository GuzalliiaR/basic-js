/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumberAfterDelete = 0;
  const arrN = n.toString().split('');

  arrN.forEach((el, i) => {
    const clearArrN = arrN.toSpliced(i, 1);
    let numberAfterDelete = Number(clearArrN.join(''));
    maxNumberAfterDelete = Math.max(maxNumberAfterDelete, numberAfterDelete);
  })
  console.log(n, maxNumberAfterDelete);
  return maxNumberAfterDelete;
}

module.exports = {
  deleteDigit
};
