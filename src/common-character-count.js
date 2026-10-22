/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const s1Array = [...new Set(s1.split(''))];
  let commonCharacterCount = 0;

  for (let i = 0; i < s1Array.length; i++) {
    const letterChecked = s1Array[i];
    let repeatingS1 = 0;
    let repeatingS2 = 0;

    for (letter of s1) {
      if (letterChecked === letter) {
        repeatingS1 += 1;
      }
    }

    for (letter of s2) {
      if (letterChecked === letter) {
        repeatingS2 += 1;
      }
    }

    const minRepeating = Math.min(repeatingS1, repeatingS2);
    commonCharacterCount += minRepeating;
  }

  return commonCharacterCount;
}

module.exports = {
  getCommonCharacterCount
};
