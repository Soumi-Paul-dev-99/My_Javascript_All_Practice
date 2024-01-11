//find highest element from an array
// const array = [1000, 300, 800, 100, 400, 600];

// let highest = 0;
// for (i = 0; i < array.length - 1; i++) {
//   if (array[i] > highest) {
//     highest = array[i];
//   }
// }
// console.log("highest", highest);

//---------------------------------------------------

//find second highest element from an array
// const array = [1000, 300, 800, 100, 400, 600];

// let highest = 0;
// let secondHighest = 0;
// for (i = 0; i < array.length - 1; i++) {
//   if (array[i] > highest) {
//     secondHighest = highest;
//     highest = array[i];
//   } else if (array[i] > secondHighest && array[i] != highest) {
//     secondHighest = array[i];
//   }
// }
// console.log("highest", highest);
// console.log("secondHighest", secondHighest);

//----------------------------------------------------------------------

//find highest element from an array of object
// const array = [
//   { name: "rituparna", salary: 10000 },
//   { name: "rituparna2", salary: 15000 },
//   { name: "rituparna3", salary: 20000 },
//   { name: "rituparna4", salary: 1000 },
// ];

// let highestSalary = 0;
// for (i = 0; i < array.length - 1; i++) {
//   if (array[i].salary > highestSalary) {
//     highestSalary = array[i].salary;
//   }
// }
// console.log("highestSalary", highestSalary);

//--------------------------------------------------------------------
//find second highest element from an array of object
const array = [
  { name: "rituparna", salary: 10000 },
  { name: "rituparna2", salary: 15000 },
  { name: "rituparna3", salary: 20000 },
  { name: "rituparna4", salary: 1000 },
];

let highestSalary = 0;
let secondHighestSalary = 0;
for (i = 0; i < array.length - 1; i++) {
  if (array[i].salary > highestSalary) {
    secondHighestSalary = highestSalary;
    highestSalary = array[i].salary;
  } else if (
    array[i].salary > secondHighestSalary &&
    array[i].salary !== highestSalary
  ) {
    secondHighestSalary = array[i].salary;
  }
}
console.log("secondHighestSalary", secondHighestSalary);
