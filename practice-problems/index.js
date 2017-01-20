'use strict';


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//
// let finalNumber = numbers.map(function(number){
//   return number * 3;
// }).reduce(function(newArr, number){
//   newArr.push(number);
//
//   if(number % 2 === 0){
//     newArr.push(number);
//   }
//
//   return newArr;
// }, []);
//
// console.log(finalNumber);
//
// let foo = [{one: 2}, {three: 4}, {five: 6}, {seven: 8}];
//
// Object.keys(foo).forEach(function(key){
//   console.log(foo[key]);
// });
//
// let food = [{one: 2}, {three: 4}, {five: 6}, {seven: 8}];
//
// Object.keys(food).forEach(function(key){
//     console.log(Object.keys(food[key]));
//
// });

// var arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 7, 8, 8];
//
// function lonelyInteger(arr) {
//     var answer;
//     var tempArr = arr;
//
//     for(var i = 0; i<arr.length; i++){
//         var current = arr[i];
//         tempArr.splice(i, 1);
//
//         if(tempArr.indexOf(current) === -1){
//             answer = current;
//         }
//
//     }
//
//     return answer;
//
// }
//
// console.log(lonelyInteger(arr));

// let current = ["aaa", "bbb", "yyy", "zzz"];
// let history = [[ "aaa", "bbb" ], [ "ccc", "ddd", "eee", "fff" ], [ "ggg", "hij", "abc" ]];
// let newStrings;
// let newHistory;

// function stringCheck(current, history){
//
//   let tempHistory = history.join(',').split(',');
//
//   for(let i=0; i<current.length; ++i){
//
//     tempHistory.find(function(string){
//       if(string === current[i]){
//         current.splice(i,1);
//       }
//     });
//   }
//
//   newStrings = current;
//
//   history.splice(0, 1);
//   newHistory = history;
//   newHistory.push(newStrings);
//   return newHistory, newStrings;
// }
//
// stringCheck(current, history);
//
// console.log(newHistory, newStrings);

// function stringCheck(current, history){
//
//   let tempHistory = history.join(',').split(',');
//
//   for(let i=0; i<current.length; ++i){
//
//     for(let z=0; z<tempHistory.length; z++){
//       if(current[i] === tempHistory[z]){
//         current.splice(i,1);
//       }
//     }
//   }
//   newStrings = current;
//
//   console.log(newStrings);
//
//   history.splice(0, 1);
//   newHistory = history;
//   newHistory.push(newStrings);
//   return newHistory, newStrings;
// }



// var findTheDifference = function(s, t) {
//     t = t.split(',');
//     s = s.split(',');
//     console.log(t, 't');
//     for(var i=0;i<t.length; ++i){
//         let current = t[i];
//         if(s.find(current) === null){
//             return i;
//         }
//     }
// };
//
// findTheDifference('abcd', 'abcde');


// // FIZZBUZZ
// function fizzbuzz(){
//   for (var i=1; i<=100; i++){
//     var output = "";
//
//     if (i % 3 === 0)
//      output += "Fizz";
//
//     if (i % 5 === 0)
//      output += "Buzz";
//
//     console.log(output || i);
//   }
// };
//
// fizzbuzz();

// FIZZBUZZ
// function fizBuzz(){
//   for(let i=0; i<100; ++i){
//
//     if( i % (3*5) == 0)
//       console.log('fizbuzz');
//
//
//     else if( i % 3 == 0)
//       console.log('Fizz');
//
//
//     else if( i % 5 == 0)
//       console.log('Buzz');
//
//
//     else
//       console.log(i);
//
//   }
// }
//
// fizBuzz();
