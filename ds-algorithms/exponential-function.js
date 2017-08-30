'use strict';

// Write a function that takes a base and exponent and returns the result.

function exponential(base, exponent) {
  let result = 1;

  if (exponent > 0) result = base * exponential(base, exponent - 1);
  if (exponent < 0) result = base * exponential(base, exponent + 1);

  return result;
}

console.log(exponential(2, 5));
console.log(exponential(-5, 6));
console.log(exponential(-5, 7));
