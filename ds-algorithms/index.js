'use strict';

let numbers = [2, 15, 73, 23, 36, 22, 1, 60, 86, 45];
let newNumbers = [];

let reduced = numbers.reduce(function(a, b) {
    return a + b;
  }, 0);

let filtered = numbers.filter(function(num) {
  return num < 20;
}).reduce(function(a, b) {
  return a + (b * 2);
}, 0);

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

// filter(numbers, testing);
//
// console.log(newNumbers);


console.log(filtered);
console.log(reduced);

// Object.keys(obj) returns an array of the properties in the object.

function keys(obj) {
  let filtered = Object.keys(obj).filter(function(value) {
    return obj[value] > 5;
  }).map(function(val) {
    return obj[val];
  });

  return filtered;
}

console.log(keys({a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}));
