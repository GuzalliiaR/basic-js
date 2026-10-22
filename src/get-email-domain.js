/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let array = email.split('@');
  let domain = array[array.length - 1];
  return domain;
}

module.exports = {
  getEmailDomain
};
