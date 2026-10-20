const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // 1. Проверка, что аргумент есть и это строка
  if (typeof sampleActivity !== 'string') return false;

  // 2. Приведение sampleActivity к числу.
  // Если sampleActivity === '', N это NaN или N - это физически не верная величина, то return false
  const N = Number(sampleActivity);
  if (Number.isNaN(N) || N <= 0 || N > 15) return false;

  const t = Math.ceil((Math.log(MODERN_ACTIVITY / N) * HALF_LIFE_PERIOD) / 0.693);
  return t;
}

module.exports = {
  dateSample
};
