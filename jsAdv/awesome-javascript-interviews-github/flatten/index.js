//Q.flatten an array

const flattened = (arr) => [].concat(...arr.flat());

let myArr1 = [[1], [2], [3, 4], 5];
let myArr2 = [[1], [2], [[3], 4], 5];
var myArr3 = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8, 9],
];

console.log(flattened(myArr1));
console.log(flattened(myArr2));
console.log(flattened(myArr3));
