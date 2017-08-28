'use strict';

// Find the greatest common divisor between two numbers.

function greatestCommonDivisor(a, b) {
  let denominator = 2;
  let answer = 1;

  if (a < 2 || b < 2) return 1;

  while (a >= denominator && b >= denominator) {
    if (a % denominator === 0 && b % denominator === 0) {
      answer = denominator;
    }
    denominator++;
  }

  return answer;
}

console.log(greatestCommonDivisor(24, 36));
console.log(greatestCommonDivisor(124, 245));
console.log(greatestCommonDivisor(244, 424));
console.log(greatestCommonDivisor(1, 8));
