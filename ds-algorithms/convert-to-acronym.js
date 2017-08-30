'use strict';

// not working locally because I need Node version 6 or higher.
let ignoreList = ['the', 'a', 'of', 'and', 'or', 'to', 'with', 'an'];

function acronyms(string) {
  let acronym = '';
  let newStr = string.split(' ');

  for(let i=0; i<newStr.length; i++) {
    if (!ignoreList.includes(newStr[i].toLowerCase())) {
      acronym += newStr[i][0];
    }
  }

  return acronym;
}

console.log(acronyms('The Federal Bureau of Investigation'));
console.log(acronyms('The Central Intelligence Agency'));
