// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let sum1 = Number.parseInt(array1.join(""));
  let sum2 = Number.parseInt(array2.join(""));
  return sum1 + sum2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let str = String(value);
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] == str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) {
    return "Required field";
  } else {
    return Number(input) ? "" : "Must be a number besides 0";
  }
}
