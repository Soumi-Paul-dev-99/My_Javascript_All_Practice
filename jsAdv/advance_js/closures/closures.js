// function initCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const counter1 = initCounter(); // create a new counter
// const counter2 = initCounter(); // create another counter

// counter1(); // prints 1
// counter1(); // prints 2
// counter2(); // prints 1
// counter1(); // prints 3
// counter2(); // prints 2

// //global scope
// let x = 1;
// const parentFunction = () => {
//   //local scope
//   let myValue = 2;
//   console.log(x);
//   console.log(myValue);

//   const childFunction = () => {
//     // it has access to the global scope which is public variable. also it has access to parent function which is private variable.
//     console.log((x += 5));
//     console.log((myValue += 1));
//   };
//   return childFunction;
// };

// const result = parentFunction();
// result();
// result();
// console.log(x); // last value of x
// console.log(myValue); // reference error, private variable.

//closure with IIFE(Immefiately Invoked Function Expression)
// const privateCounter = (() => {
//   let count = 0;
//   console.log(`initial value : ${count}`);
//   return () => {
//     count += 1;
//     console.log(count);
//   };
// })(); // only prints o/p= initial value :0
// privateCounter(); // here 1 will be printed
// privateCounter();
// privateCounter();

// const credits = ((num) => {
//   let credits = num;
//   console.log(`initial credits value :${credits}`);
//   return () => {
//     credits -= 1;
//     if (credits > 0) {
//       console.log(`playing game, ${credits}  credits remaining`);
//     }
//     if (credits <= 0) {
//       console.log("not enough credits");
//     }
//   };
// })(3);

// credits();
// credits();
// credits();

function fn() {
  for (var i = 0; i < 3; i++) {
    function inner(i) {
      setTimeout(function log() {
        console.log(i);
      }, i * 1000);
    }
    inner(i);
  }
}

fn();
