// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }
// z();
// function outest() {
//   var c = 1000;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     let a = 10;
//     return inner;
//   }
//   return outer;
// }
// var close = outest()("hello");
// close();

//data hiding example
function counter() {
  var count = 0;
  return function incrementcounter() {
    count++;
    console.log(count);
  };
}
var counter1 = counter();
counter1();
counter1();

var counter2 = counter();
counter2();
counter2();
