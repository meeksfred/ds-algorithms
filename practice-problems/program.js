'use strict';

const Person = require('./example');

let a = new Person('Joe', 25);
let b = new Person('Max', 25);

console.log(a);
console.log(b);

let numbers = [1, 3, 235, 124, 12, 124, 73, 37, 88, 203];

let filtered = numbers.map(function(num){
    return num * 2;
  }).filter(function(number){
    return number > 100;
  }).filter(function(number){
    return (number % 4 === 0);
  }).reduce(function(a,b){
    return a + b;
  });

console.log(filtered);

let words = ['hi', 'bye', 'world', 'what', 'okay', 'circus', 'pizza'];

words.sort();

console.log(words);
