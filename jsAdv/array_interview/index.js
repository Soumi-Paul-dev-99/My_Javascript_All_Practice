//1. const arrayOfOddNumbers = [1, 3, 5];
// arrayOfOddNumbers[100] = 199;
// console.log(arrayOfOddNumbers.length);
//o/p= 101
// (101)[1,3,5, empty*97,199]

//2.How can you double elements of an array using reduce? Please note that you cannot create additional variables.
// const arrayOfNumbers = [1, 2, 3, 4];
// arrayOfNumbers.reduce((accumulator, currentValue, index, array) => array[index] = array[index] * 2);

//3. Find minimum and maximum element in an array
// const array = [3, 2, 1, 56, 10000, 167];
// minValue = Math.min(...array);
// maxValue = Math.max(...array);
// const maxIndex = array.indexOf(maxValue);
// if (maxIndex !== -1) {
//   array.splice(maxIndex, 1);
// }
// console.log(array);
// const secondHighest = Math.max(...array);
// console.log(secondHighest);
// console.log(minValue);
// console.log(maxValue);

//4. console.log(array.reverse())
//5. console.log(array.sort())

// 6. function countOccurrences(arr,n,x)
// {
//     let res = 0;
//     for (let i=0; i<n; i++)
//     {
//         if (x == arr[i])
//             res++;
//     }
//     return res;
// }

// arr=[1, 2, 2, 2, 2, 3, 4, 7 ,8 ,8]
// let  n = arr.length;
// let x = 8;
// console.log(countOccurrences(arr, n, x));

//7. Find Subarray with given sum array javascript
// function subArraySum(arr, n, sum)
// {
//     let curr_sum=0;

//     // Pick a starting point
//     for (let i = 0; i < n; i++)
//     {
//         curr_sum = arr[i];

//         // Try all subarrays starting with 'i'
//         for (let j = i + 1; j <= n; j++)
//         {
//             if (curr_sum == sum)
//             {
//                console.log("Sum found between indexes " +
//                                 i + " and " + (j - 1));
//                 return;
//             }
//             if (curr_sum > sum || j == n)
//                 break;
//             curr_sum = curr_sum + arr[j];
//         }
//     }
//    console.log("No subarray found");
//     return;
// }

// // Driver Code
// let arr= [15, 2, 4, 8, 9, 5, 10, 23];
// let n = arr.length;
// let sum = 23;
// subArraySum(arr, n, sum);

//remove particular element
// var removeElement = function (nums, val) {
//   for (let i = nums.length - 1; i > -1; i--) {
//     if (nums[i] === val) {
//       nums.splice(i, 1);
//       console.log(nums);
//     }
//   }
// };

// removeElement([1, 2, 3, 4, 5, 6, 7], 6);

// let num = 2;
// num = 6;
// console.log(num);

// let test;
// console.log(test);

// const num
// num = 6
// console.log(num);

//

// const array = ["one", "one", "one", "two", "three", "one"];

// const count = {};

// for (const element of array) {
//   console.log("element", element);
//   count[element] = (count[element] || 0) + 1;
// }
// console.log(count);
