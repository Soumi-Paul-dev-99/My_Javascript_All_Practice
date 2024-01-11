// Given an array containing multiple number of max elements - count the number of max elements.

// so, given [ 1, 2, 2, 3, 4, 5, 4, 5]

// I should return 2 as 5 occurs 2 times.

//********************************** */
//my method to count no. of max element

// const arr = [1, 2, 2, 3, 4, 5, 4, 5];
// let max = Math.max(...arr);

// console.log(max);
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (max === arr[i]) {
//     result++;
//   }
// }

// console.log(result);

// *********************************** */

// maxCount = (arr) => {
//   arr = arr.sort((a, b) => b - a);

//   let max = Math.max(...arr);
//   console.log("max", max);

//   let result = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (max === arr[i]) {
//       result++;
//     }

//     if (arr[i] < max) break;
//   }
//   return result;
// };

// const arr = [1, 2, 2, 3, 4, 5, 4, 5];

// console.log(maxCount(arr));

//*************************************** */
//count the number of repeated elements in array

const arr1 = [1, 2, 2, 3, 4, 5, 4, 5];

var count = {};
arr1.forEach(function (i) {
  console.log(i);
  count[i] = (count[i] || 0) + 1;
});
console.log(count);

//For the first element 1:
// Since count[1] does not exist in the count object, (count[1] || 0) evaluates to 0.
// (count[1] || 0) + 1 evaluates to 0 + 1, resulting in 1.
// Assign 1 to count[1]: { 1: 1 }.
// For the second element 2:

// Since count[2] does not exist in the count object, (count[2] || 0) evaluates to 0.
// (count[2] || 0) + 1 evaluates to 0 + 1, resulting in 1.
// Assign 1 to count[2]: { 1: 1, 2: 1 }.
// For the third element 2:

// Since count[2] already exists in the count object with a value of 1, (count[2] || 0) evaluates to 1.
// (count[2] || 0) + 1 evaluates to 1 + 1, resulting in 2.
// Update count[2] with the new value 2: { 1: 1, 2: 2 }.

//*************************************** */

//********** max repeating element ********** */
let arr2 = ["pear", "apple", "orange", "apple"];

var counter = {};
for (let i of arr2) {
  counter[i] == null ? (counter[i] = 1) : counter[i]++;
}

//************************************ */
