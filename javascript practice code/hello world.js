// Write a function createHelloWorld. It should return a new function that always returns "Hello World".


var createHelloWorld = function(){
    return function(...args){
        return "hello world"
    }
};

console.log(createHelloWorld()());


// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

var createCounter = function (start){
    let count = start;
    return function() {
        return count++
    }  
    
}
const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());