'use strict';

function reverseString(string) {
  if (!string || string.length < 2) return string;
  return string.split('').reverse().join('');
}

console.log(reverseString('hello world'));
console.log(reverseString('Hello! Lets see how this, might work?'));

function reverseAString(string) {
  let reversed = '';

  if(!string || string.length < 2) return string;

  for (let i = string.length-1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed;
}

console.log(reverseAString('hello world'));
