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
  let resultStr = '';
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator
  } = options ?? {};

  str = String(str);

  if (repeatTimes === undefined) repeatTimes = 1;
  if (separator === undefined) separator = '+';

  if (typeof addition !== "string" && addition !== undefined) addition = String(addition);

  if (additionRepeatTimes === undefined) {
    if (addition !== undefined) {
      additionRepeatTimes = 1;
    } else {
      additionRepeatTimes = 0;
    }
  }
  if (additionSeparator === undefined) additionSeparator = '|';

  // код формирования строки resultStr

  // Собираем блок "добавки"
  let additionBlock = [];
  if (addition !== undefined) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionBlock.push(addition);
    }
  }
  const additionBlockStr = additionBlock.join(additionSeparator);

  // Собираем основной блок
  let mainBlock = [];
  for (let i = 0; i < repeatTimes; i++) {
    mainBlock.push(str + additionBlockStr);
  }
  resultStr = mainBlock.join(separator);

  return resultStr;
}

module.exports = {
  repeater
};
