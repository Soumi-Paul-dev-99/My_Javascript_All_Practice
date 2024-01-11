//craete a counter function which has incre,ment and getValue functionality

// const privateCounter = () => {
//   let count = 0;

//   return {
//     increment: (val = 1) => {
//       count += val;
//     },
//     getValue: () => {
//       return count;
//     },
//   };
// };

// const counter = privateCounter();
// console.log(counter.getValue());
// counter.increment();
// console.log(counter.getValue());
// counter.increment();
// console.log(counter.getValue());

// const multiply = function (x, y) {
//   console.log(x * y);
// };

// const multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5);

//How to find position of all uppercase characters in string?
// const str = "RituParna";

// var positions = [];
// for (var i = 0; i < str.length; i++) {
//   if (str[i].match(/[A-Z]/) != null) {
//     positions.push(i);
//   }
// }
// console.log(positions);

//using closure function i can use var and print the value of 1 2 3
// for (var i = 1; i < 4; i++) {
//   function inner(i) {
//     setTimeout(() => console.log(i), 0);
//   }
//   inner(i);
// }

// let dog = {
//   name: "doggo",
//   sayName() {
//     console.log(this.name);
//   },
// };
// dog.sayName();

// function Dog(name) {
//   this.name = name;
// }
// Dog.prototype.bark = function () {
//   //i add .prototype here. without prototype it wont work
//   console.log(this.name + " says woof");
// };
// let fido = new Dog("fido");
// fido.bark();

var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]; //array
var mf = 1; //default maximum frequency
var m = 0; //counter
var item; //to store item with maximum frequency
for (
  var i = 0;
  i < arr1.length;
  i++ //select element (current element)
) {
  for (
    var j = i;
    j < arr1.length;
    j++ //loop through next elements in array to compare calculate frequency of current element
  ) {
    if (arr1[i] == arr1[j])
      //see if element occurs again in the array
      m++; //increment counter if it does
    if (mf < m) {
      //compare current items frequency with maximum frequency
      mf = m; //if m>mf store m in mf for upcoming elements
      item = arr1[i]; // store the current element.
    }
  }
  m = 0; // make counter 0 for next element.
}
