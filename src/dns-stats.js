/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let DNSStats = {};

  domains.forEach((domain) => {
    const domainElements = domain.split('.');
    let key = '';
    for (let i = domainElements.length - 1; i >= 0; i--) {
      key = key + '.' + domainElements[i];

      DNSStats[key] = DNSStats[key] ? DNSStats[key] + 1 : 1;
    }
  })

  return DNSStats;
}

module.exports = {
  getDNSStats
};
