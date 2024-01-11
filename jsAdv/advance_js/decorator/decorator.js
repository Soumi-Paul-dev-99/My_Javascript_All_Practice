// Javascript Decorator Function

// Decorators wrap a function in another function.

// these wrappers "decorate" the original function with new capabilities
//benefits: D.R.Y and clean code through composition

// Working of decorators in javascript

// "add" function takes the function as
// a parameter for wrapping function
// "print" is wrapped
function add(fn) {
  return function (s) {
    var gg = s + " is Best";

    // By concatenating we extend
    // the function "add"
    fn(gg);
  };
}

// Decorated function
function print(s) {
  console.log(s);
}

// Calling "add"
var g = add(print);
g("GFG");
