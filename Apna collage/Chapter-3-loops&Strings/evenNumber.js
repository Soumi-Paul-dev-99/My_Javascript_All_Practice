//print all even numbers from 0 to 100.

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) console.log("even number", i);
// }

// //print all odd numbers from 0 to 100.

// for (let num = 1; num <= 100; num++) {
//   if (num % 2 !== 0) console.log("odd number", num);
// }

// Create a game where you start with any random number .ask the user to keep gussing the game number until the user enter correct value;

let gameNum = 25;
let userNum = prompt("guess the game number :");
while (userNum != gameNum) {
  userNum = prompt("you enter wrong number guess again:");
}
console.log("congratulation,you entered write guess");
