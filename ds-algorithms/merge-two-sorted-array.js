'use strict';

// Merge two sorted arrays.

let one = [3, 63, 34, 2, 61, 2, 5];
let two = [7, 45, 88, 32, 2, 55, 1];

function mergeSortedArray(a, b) {
  let sorted = a.concat(b);

  // or, let sorted = a.concat(b).sort((a, b) => {
  //                  return a - b;
  //                  });

  sorted.sort((a, b) => {
    return a - b;
  });

  return sorted;
}

console.log(mergeSortedArray(one, two));
