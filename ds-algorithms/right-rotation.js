'use strict';

function rightRotation(array, rotations) {
  while(rotations--) {
    array.unshift(array[array.length - 1])
    array.pop();
  }
  return array;
}

console.log(rightRotation([1, 2, 3, 4, 5, 6], 3));
