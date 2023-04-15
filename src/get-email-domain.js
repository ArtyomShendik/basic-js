const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = email.split('').reverse();
  let stack = [];

  for (let char of arr) {
    if (char === '@') break;
    stack.push(char);
  }

  return stack.reverse().join('');
}

module.exports = {
  getEmailDomain
};
