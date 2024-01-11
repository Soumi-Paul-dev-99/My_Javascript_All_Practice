/* Write a function that takes an array of integers and returns that array rotated by N positions.
   For example, if N=2, given the input array [1, 2, 3, 4, 5, 6] the function should return [5, 6, 1, 2, 3, 4] */

// function rightRotate(array, k) {
//   var L = array.length;
//   return array.slice(L - k).concat(array.slice(0, L - k));
// }

// console.log(rightRotate([1, 2, 3, 4, 5, 6, 7], 3)); //o/p [5, 6, 7, 1, 2, 3, 4]

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.slice(arr.length - 3)); // [5,6,7] extracts element starting from index 4

console.log(arr.slice(0, arr.length - 3)); //[1,2,3,4] extracts element starting from index 0 to index4
