//1.function statement
function a() {
  console.log("a called");
}
a();
//this way of creating a function is called function statement
//during the memory creation phase a is created a memory and function is assigned to a.

//2. function expression (function acts like a value)
var b = function () {
  console.log("b called");
};
b();
// b is treated like any other variable it is assigned undefined until the code hits the line itself

//3. function declaration same with function statement

//4. Anonymous function
//does not has their own identity
//  function () {

//  }
//Anonymous function are used when function are used asa values

//5.Named function expression
var b = function abc() {
  console.log("b called");
};
b();
//here we give a function name

//6. difference between parameters and arguments
var b = function (params1, params2) {
  console.log("b called");
};
b(1, 2);
// here params1 and params2 are called parameters
// and we pass inside function b is called arguments

//7.first class functions
//functions inside a function as an  argument is called first class functions

var b = function (params1) {
  console.log("b called");
};
b(function () {});
