'use strict';

// Remove duplicate members from an array.

function removeDuplicates(array) {
  let exists = {};

  let filtered = array.filter(ele => {
    if(!exists[ele]) {
      exists[ele] = true;
      return ele;
    }
  });

  return filtered;
}

console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9]));
console.log(removeDuplicates(['a', 'b', 'cc', 'c', 'a', 'bb', 'dd', 'b']));

function removeDuplicate(array) {
  let answer = [];
  let charExists = {};
  let current;

  for (let i=0; i<array.length; i++) {
    current = array[i];

    if (!charExists[current]) {
      answer.push(current);
      charExists[current] = true;
    }
  }

  return answer;
}

console.log(removeDuplicate([1, 2, 3, 6, 3, 2, 8, 54, 4, 1, 6]));
