'use strict';

// How to get nth Fibonnaci number.

function fibonnaci(n) {
  let fib = [0, 1];

  if (n <= 2) return 1;

  for (let i=2; i<=n; i++) {
    fib[i] = fib[i-2] + fib[i-1];
  }

  return fib[n];
}

console.log(fibonnaci(7));
console.log(fibonnaci(3));
console.log(fibonnaci(24));
console.log(fibonnaci(2));
