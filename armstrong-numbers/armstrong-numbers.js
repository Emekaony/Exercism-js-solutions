//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// returns the length of a number, does not modify the number
// integer division is accomplished using Math.floor()
const getLengthOfNumber = (num) => {
  let dummy = num;
  let count = 0;
  do {
    dummy = Math.floor(dummy / 10);
    count += 1;
  } while (dummy > 0);
  // console.log(num);
  return count;
};

export const isArmstrongNumber = (num) => {
  // see if every digit raised to the numLength is equal to the number itself
  let expectedSum = num;
  let actualSum = 0;
  let l = getLengthOfNumber(num);
  while (num > 0) {
    let digit = num % 10;
    actualSum += Math.pow(digit, l);
    num = Math.floor(num / 10);
  }

  if (actualSum == expectedSum) {
    return true;
  } else {
    return false;
  }
};

console.log(isArmstrongNumber(154));
