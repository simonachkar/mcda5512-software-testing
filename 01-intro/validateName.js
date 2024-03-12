function validateName(name) {
  if (!name) {
    return false;
  }

  const regex = /^[a-zA-Z]+$/;
  return regex.test(name);
}

module.exports = validateName;

/**
 * Play around with the regex to break the test
 * - example: exclude S -> add [^S]
 *
 * For more on regular expressions:
 * - Learn the basics: https://regexone.com/
 * - Watch a regex crash course: https://www.youtube.com/watch?v=rhzKDrUiJVk
 */
