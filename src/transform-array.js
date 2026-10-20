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
const CONTROL = new Set(['--discard-next', '--discard-prev', '--double-next', '--double-prev']);

function transform(arr) {
  let newArray = [];
  let skipNext = false;   // если true, то текущий элемент нужно выбросить
  let prevDiscarded = false;  // если true, то предыдущий элемент был выброшен

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  arr.forEach((element, i) => {
    // если текущий element помечен флагом skipNext=true, то выходим из итерации, предварительно перевернув значения флагов
    if (skipNext) {
      skipNext = false;
      prevDiscarded = true;  // т.к. для будущей итерации (i+1), текущий element будет считаться пропущенным предыдущим элементом
      return;
    }

    // если element равен какому-то контролу
    if (CONTROL.has(element)) {
      if (element === '--discard-next') {
        skipNext = true;
        prevDiscarded = false;
      } else if (element === '--discard-prev') {
        // если предыдущий элемент не был выброшен, то его можно удалить методом pop()
        if (!prevDiscarded) newArray.pop();
        prevDiscarded = false;
      } else if (element === '--double-next') {
        // дублировать следующий элемент можно только если он существует
        if (i + 1 < arr.length) newArray.push(arr[i + 1]);
        prevDiscarded = false;
      } else if (element === '--double-prev') {
        // если предыдущий элемент не был выброшен и массив newArray не пустой,
        // то можно дублировать последний элемент в newArray
        if (!prevDiscarded && newArray.length > 0) newArray.push(newArray[newArray.length - 1]);
      }
      return;
    }

    newArray.push(element);
    prevDiscarded = false;
  })

  console.log(`при arr=${arr}: newArr=${newArray}`);
  return newArray;
}

module.exports = {
  transform
};
