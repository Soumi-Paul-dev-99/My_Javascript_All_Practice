// function a() {
//     c();
//   function c() {
//     console.log(b);
//   }
// }
// var b = 10;
// a();

// function a() {
//   var b = 10;
//   c();
//   function c() {
//     console.log(b);
//   }
// }
// a();

let b = 20;
{
  let b = 100;
  var a = 10;
  const c = 30;
  console.log(b);
  console.log(a);
  console.log(c);
}
console.log(b);
console.log(a);
console.log(c);
