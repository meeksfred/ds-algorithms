'use strict';

let numbers = [2, 15, 73, 23, 36, 22, 1, 60, 86, 45];
let newNumbers = [];

// let reduced = numbers.reduce(function(a, b) {
//     return a + b;
//   }, 0);
//
// let filtered = numbers.filter(function(num) {
//   return num < 20;
// })

let filter = function(array, cb) {
  array.forEach(function(num) {
    if ( cb(num) ) {
      newNumbers.push(num);
    }
  })
}

function testing(number) {
  if ((number * 2) / 4 > 18) {
    return true;
  }
}

filter(numbers, testing);

console.log(newNumbers);


// console.log(filtered);
//
// console.log(reduced);
