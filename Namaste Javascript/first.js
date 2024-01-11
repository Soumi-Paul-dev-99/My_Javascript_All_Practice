var n = 2;
function sqare(num) {
  var ans = num * num;
  return ans;
}
var num2 = sqare(n);
var square4 = sqare(4);
document.write(num2);
document.write("<br>");
document.write(square4);

var num3 = 7;
function getnum() {
  console.log("namaste javascript");
}
getnum();
console.log(num3);

var x = 1;
a();
b();
console.log(x);
function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 100;
  console.log(x);
}
