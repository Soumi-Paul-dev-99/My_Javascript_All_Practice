// function x() {
//   var i = 1;
//   setTimeout(function () {
//     //this function forms a aclosure
//     console.log(i);
//   }, 3000);
// }
// x();

//print 1 after 1 sec and 2 after 2 sec and so on with var
// function x() {
//   // var i = 1;
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         //this function forms a aclosure
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i); //every time this create a new copy of i here
//   }
//   console.log("hello javascript");
// }
// x();

//print 1 after 1 sec and 2 after 2 sec and so on with let
// function x() {
//   // var i = 1;
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       //this function forms a aclosure
//       console.log(x);
//     }, x * 1000);
//   }

//   console.log("hello javascript");
// }
// x();

//data hiding
// function counter() {
//   var count = 0;
//   return function incrementCounter() {
//     count++;
//     console.log(count);
//   };
// }
// console.log(count);
//it can only be achieved through function
// function counter() {
//   var count = 0;
//   return function incrementCounter() {
//     //with return it forms a closure and returns a function
//     count++;
//     console.log(count);
//   };
// }
// var counter1 = counter();
// counter1();
// counter1();
// var counter2 = counter(); // it makes a fresh counter itself
// counter2();
// counter2();

//for decrement we have to use constructor function
// function Counter() {
//   var count = 0;
//   this.incrementCounter = function () {
//     count++;
//     console.log(count);
//   };
//   this.decrementCounter = function () {
//     count--;
//     console.log(count);
//   };
// }
// var counter1 = new Counter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();
// counter1.decrementCounter();
// counter1.decrementCounter();

//relation between garbage collector and closure
