'use strict';

// Find whether a number is a prime number.

function isPrime(num) {
  if (num < 3) return true;

  for (let i = 2; i < num/2; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(isPrime(7));
console.log(isPrime(24));
console.log(isPrime(37));
console.log(isPrime(2));
console.log(isPrime(8));
