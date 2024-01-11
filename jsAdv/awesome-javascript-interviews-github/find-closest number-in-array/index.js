// Q.find the number in array which is closest to the given number

const closestNumber = (arr, num) => {
  return arr.sort((a, b) => Math.abs(22 - a) - Math.abs(22 - b))[0];
};

console.log(closestNumber([5, 10, 15, 25, 30, 35, 40], 22));

//*************************** */
const arr = [5, 10, 15, 30, 25, 35, 40];

console.log(arr.sort((a, b) => b));
console.log(arr.sort((a, b) => Math.abs(22 - b)));
console.log(arr.sort((a, b) => Math.abs(22 - a)));
console.log(arr.sort((a, b) => Math.abs(22 - a) - Math.abs(22 - b)));

// Comparing 5 and 10: Math.abs(22 - 5) - Math.abs(22 - 10) = 17 - 12 = 5. The result is positive, indicating that 5 is further away from 22 compared to 10.
// Comparing 10 and 15: Math.abs(22 - 10) - Math.abs(22 - 15) = 12 - 7 = 5. Again, the result is positive, indicating that 10 is further away from 22 compared to 15.
// Comparing 15 and 30: Math.abs(22 - 15) - Math.abs(22 - 30) = 7 - 8 = -1. The result is negative, indicating that 15 is closer to 22 compared to 30.
// Comparing 30 and 25: Math.abs(22 - 30) - Math.abs(22 - 25) = 8 - 3 = 5. The result is positive, indicating that 30 is further away from 22 compared to 25.
// Comparing 25 and 35: Math.abs(22 - 25) - Math.abs(22 - 35) = 3 - 13 = -10. The result is negative, indicating that 25 is closer to 22 compared to 35.
// Comparing 35 and 40: Math.abs(22 - 35) - Math.abs(22 - 40) = 13 - 18 = -5. Again, the result is negative, indicating that 35 is closer to 22 compared to 40.

console.log(arr.sort((a, b) => Math.abs(22 - a) - Math.abs(22 - b))[0]);

// *********************************************
