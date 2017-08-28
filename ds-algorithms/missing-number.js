'use strict';

// Find the missing number from an unsorted array of numbers.

function missingNumber(array) {
  array = array.sort((a, b) => {
    return a - b;
  });

  for (let i=0; i < array.length; i++) {
    if (array[i] !== (i+1)) {
      return array[i] - 1;
    }
  }
  return null;
}

console.log(missingNumber([1, 5, 3, 2, 8, 9, 6, 10, 4]));
console.log(missingNumber([1, 2, 3, 4, 5, 6, 7]));
console.log(missingNumber([9, 4, 3, 5, 1, 2, 6, 8, 10, 7, 15, 13, 12, 11]));
