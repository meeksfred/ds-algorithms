'use strict';

// let nums = [2, 5, 12, 6, 33, 23];
// let rotations = 3;
//
// function leftRotation(array, d) {
//     let rotated = [];
//
//     for(let i=0; i<array.length; i++) {
//         let newIndex = (i + (array.length - d)) % array.length;
//         rotated[newIndex] = array[i];
//     }
//
//     return rotated;
// }
//
//
// console.log(leftRotation(nums, rotations));

function leftRotation(array, rotations) {
  while(rotations--) {
    array.push(array[0]);
    for (let i = 0; i < array.length - 1; i++) {
      array[i] = array[i+1];
    }
    array.pop();
  }
  return array;
}

console.log(leftRotation([1, 2, 3, 4, 5, 6], 4));
