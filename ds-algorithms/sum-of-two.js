'use strict';

// From unsorted array, check if there are any two numbers whose sum is equal to the given number.

function sumTwo(array, num) {
  let sumCheck = {};

  for(let i=0; i<array.length; i++) {
    if (array[i] === sumCheck[array[i]]) return true; // or if (sumCheck[array[i]]) return true;

    let diff = num - array[i];
    sumCheck[diff] = diff; // or true; (combined with ^)
  }

  return false;
}

console.log(sumTwo([1, 2, 3, 7, 4, 5, 6], 10));
console.log(sumTwo([1, 2, 3, 7, 4, 5, 6], 15));
console.log(sumTwo([1, 2, 3, 7, 4, 5, 6], 2));
console.log(sumTwo([6, 7, 2, 4, 1, 5, 3], 10));
console.log(sumTwo([1], 1));
