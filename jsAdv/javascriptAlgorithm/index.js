//Creates astack
// var Stack = function () {
//   this.count = 0;
//   this.storage = {};

//   //Adds a value onto the end of the stack
//   this.push = function (value) {
//     this.storage[this.count] = value;
//     this.count++;
//   };

//   //Removes and returns the value at the end of the stack
//   this.pop = function () {
//     if (this.count === 0) {
//       return undefined;
//     }

//     this.count--;
//     var result = this.storage[this.count];
//     delete this.storage[this.count];
//     return result;
//   };

//   this.size = function () {
//     return this.count;
//   };

//   //return the value at the end of the stack
//   this.peek = function () {
//     return this.storage[this.count - 1];
//   };
// };

// var myStack = new Stack();

// myStack.push(1);
// myStack.push(2);
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
// myStack.push("ritu");
// console.log(myStack.size());
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());

//set method

const myMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

//delete by specific key
// myMap.delete(1);

//size is not a function size is property in ES6
// myMap.size;

//Clear all
// myMap.clear();

//check if the property present or not
console.log(myMap.has(4));
//we cantcheck by value

// console.log(myMap);
