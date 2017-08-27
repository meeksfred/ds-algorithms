'use strict';

// How to get nth Fibonnaci number.

function fibonnaci(n) {
  let fib = [0, 1];

  if (n <= 2) return 1;

  for (let i=2; i<=n; i++) {
    fib[i] = fib[i-2] + fib[i-1];
  }

  // return fib[n];
  console.log(fib[n]);
}

fibonnaci(7);
fibonnaci(3);
fibonnaci(24);
