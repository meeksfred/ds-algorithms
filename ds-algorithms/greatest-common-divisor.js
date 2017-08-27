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

  console.log(answer);
}

greatestCommonDivisor(24, 36);
greatestCommonDivisor(124, 245);
greatestCommonDivisor(244, 424);
