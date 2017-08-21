'use strict';

let nums = [2, 5, 12, 6, 33, 23];
let rotations = 3;

function leftRotation(array, d) {
    let rotated = [];

    for(let i=0; i<array.length; i++) {
        let newIndex = (i + (array.length - d)) % array.length;
        rotated[newIndex] = array[i];
    }

    console.log(rotated);
}


leftRotation(nums, rotations);