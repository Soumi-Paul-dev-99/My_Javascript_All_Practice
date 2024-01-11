// let obj = {};
// console.log(obj);

//in constructor function what we use in a function it is a instance method.that means we can access that any other class.
// if we declare that function as a static we cant use that function any other class.

//must call super constructor in derived class(child class) before accessing or returning from derived constructor function

// const property = "firstName";
// const name = "ritu";

// const user = {
//   // property: name, //we will not get firstName here
//   [property]: name, // we have to write this
// };

// console.log(user);

// const user = {
//   name: "raja",
//   age: 21,
//   isAbsolutelyAwesome: true,
// };

// for (key in user) {
//   //console.log(key); //print only keys
//   console.log(user[key]); //print values
// }

// const obj = {
//   a: "one",
//   b: "two",
//   a: "three",
// };

// console.log(obj); //{a: 'three', b: 'two'} o/p

//Q. create a function multiplyByTwo(obj) that multiplies all numeric property value of nums by two
// let nums = {
//   a: 100,
//   b: 200,
//   title: "My nums",
// };
// multiplyByTwo(nums);
// function multiplyByTwo(obj) {
//   for (key in nums) {
//     if (typeof obj[key] === "number") {
//       obj[key] = obj[key] * 2;
//     }
//   }
// }
// console.log(nums);

//Q. o/p of the following code
// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// const settings = {
//   name: "raja",
//   level: "19",
//   health: "90",
// };

// console.log(JSON.stringify(settings, ["level", "health"]));
//only level and health will be stringify
//o/p {"level":"19","health":"90"}

// const shape = {
//   redius: 10,
//   diameter() {
//     return this.redius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };
//In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever. With arrow functions the this keyword always represents the object that defined the arrow function.

// console.log(shape.diameter()); o/p 20
//console.log(shape.perimeter()); // o/p NAN

//  this keyword concept in normal function and in arrow function
// this.a = 5;

// function getParams() {
//   console.log(this.a); //its targeting window object
// }
// getParams();

// const getParams = () => {
//   console.log(this.a); // in this case it also targetting window object
// };

// getParams();

// const user = {
//   name: "bob",
//   age: 30,
//   getDetails() {
//     console.log(this.name); // this is no longer targetting the window object, its targetting user object
//   },
// };
// user.getDetails();

// const user = {
//   name: "bob",
//   age: 30,
//   childObj: {
//     newName: "Raj",
//     getDetails() {
//       console.log(this.newName, "and", this.name); // this normal function target immediate parent that is child object
//     },
//   },
// };
// user.childObj.getDetails();

// const user = {
//   name: "bob",
//   age: 30,
//   getDetails: () => {
//     console.log(this.name); // its pointing to window object it doesnt have any parent normal function
//   },
// };
// user.getDetails();

// const user = {
//   name: "bob",
//   age: 30,
//   getDetails() {
//     const nestedArrow = () => console.log(this.name); //the value of this will be user now
//     nestedArrow();
//   },
// };
// user.getDetails();

//this in a class
// class user {
//   constructor(n) {
//     this.name = n;
//   }

//   getDetails() {
//     console.log(this.name);
//   }
// }

// const User = new user("ritu");
// console.log(User);

//interview question on this keyword
// const user = {
//   firstName: "ritu",
//   getName() {
//     const firstName = "rituPARNA";
//     return this.firstName;
//   },
// };
// console.log(user.getName());
// O/P ritu

// function makeUser() {
//   return {
//     name: "John",
//     ref: this, //pointing to the window object
//   };
// }
// let user = makeUser();
// console.log(user.ref.name); o/p blank

// How to fix this
// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     },
//   };
// }
// let user = makeUser();
// console.log(user.ref().name); //o/p john

// const user = {
//   name: "John",
//   logMessage() {
//     console.log(this.name);
//   },
// };

// setTimeout(user.logMessage, 1000);  o/p blank

// const user = {
//   name: "John",
//   logMessage() {
//     console.log(this.name);
//   },
// };

// setTimeout(function () {
//   user.logMessage();
// }, 1000);
// o / p; John

// const user = {
//   name: "Ritu",
//   greet() {
//     return `Hello, ${this.name}`;
//   },
//   farewell: () => {
//     return `Goodbye ${this.name}`;
//   },
// };

// console.log(user.greet()); //o/p Hello, Ritu
// console.log(user.farewell()); //o/p Goodbye

// let calculator = {
//   read() {
//     this.a = +prompt("a =", 0);
//     this.b = +prompt("b =", 0);
//   },

//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// var length = 4;
// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method(fn) {
//     fn();
//   },
// };
// object.method(callback);
//o/p 4

// var length = 4;
// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method() {
//     console.log(arguments);
//     arguments[0]();
//   },
// };
// object.method(callback, 2, 3);
//o/p 3 array length

// const calc = {
//   total: 0,
//   add(a) {
//     this.total += a;
//     return this;
//   },
//   multiply(a) {
//     this.total *= a;
//     return this;
//   },
//   subtract(a) {
//     this.total -= a;
//     return this;
//   },
// };
// const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total);

// const user = {
//   name: "user",
//   age: 30,
//   fullName: {
//     first: "userFirst",
//     last: "userLast",
//   },
// };

// const name = "userrrrr";

// const {
//   fullName: { first },
// } = user;

// console.log(first); //object destructuring

// function getItems(fruitList, favouriteFruit, ...args) {
//rest parameter must be last in parameter list
//   return [...fruitList, ...args, ...favouriteFruit];
//spread operator can be anywhere
// }

// console.log(getItems(["banana", "apple"], "pear", "orange"));

//object referencing
// let c = { greeting: "hi" };
// let d;

// d = c;
// c.greeting = "hello";
// console.log(d.greeting); // we simply referencing the object not change the object itself
// //o/p hello
// console.log(c.greeting);
// //o/p hello
// let person = { name: "Lydia" };
// let member = [person];

// person = null; // since we are modifying the whole object not the property so it will no effect
// console.log(member);

// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };
// multiply(); // here value will take the dafault value. o/p 20
// multiply(); // o/p 20
// multiply(value); // here value will change everytime. o/p 20
// multiply(value); //o/p 40

// function changeAgeAndReference(person) {
//   (person.age = 35),
//     (person = {
//       name: "raja",
//       age: 30,
//     });

//   return person;
// }

// const personObj1 = {
//   name: "rohit",
//   age: 56,
// };

// const personObj2 = changeAgeAndReference(personObj1);

// console.log(personObj1);
// console.log(personObj2);

//polyfill for map
// Array.map((num,i,arr) => {})

//custom map function
// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const multiplyTwo = num.myMap((num, i, arr) => {
//   return num * 2;
// });
// console.log(multiplyTwo);

//custom filter function
// Array.prototype.myFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       temp.push(this[i]);
//     }
//   }
//   return temp;
// };

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const moreThanTwo = num.myFilter((num) => {
//   return num > 2;
// });
// console.log(moreThanTwo);

//Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

// let students = [
//   { name: "raja", rollNumber: 31, marks: 80 },
//   { name: "rohit", rollNumber: 15, marks: 69 },
//   { name: "rony", rollNumber: 16, marks: 35 },
//   { name: "rakesh", rollNumber: 7, marks: 55 },
// ];

// const totalMarks = students
//   .map((stu) => {
//     if (stu.marks < 60) {
//       stu.marks += 20;
//     }
//     return stu;
//   })

//   .filter((stud) => stud.marks > 60)
//   .reduce((acc, curr) => acc + curr.marks, 0);

// // let initialValue = 0
// // Array.reduce((accumulator, currentValue) => accumulator+currentValue, initialValue)
// console.log(totalMarks);

//first class function (we can pass a function into another function)
// function square(num) {
//   return num * num;
// }

// function displaySquare(fn) {
//   console.log("square is " + fn(5));
// }

// displaySquare(square);

//iife: immediately invoked function expression
// (function square(num) {
//   console.log(num * num);
// })(5);

// (function (x) {
//   return (function (y) {
//     console.log(x); // search x in inner scope first then go to parent scope
//   })(2);
// })(1);

// function find() {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }

//   return function (index) {
//     console.log(a[index]);
//   };
// }

// const closure = find();
// console.time("6");
// closure(6); // this takes 0.25 ms
// console.timeEnd("6");
// console.time("12");
// closure(12); // this takes 0.025ms
// console.timeEnd("12");

// function find(index) {
//   let a = [];
//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }

//   console.log(a[index]);
// }

// console.time("6");
// find(6); // this takes 37ms
// console.timeEnd("6");
// console.time("12");
// find(12); // this takes 135ms
// console.timeEnd("12");

// let view;
// function likeTheVideo() {
//   let called = 0;

//   return function () {
//     if (called > 0) {
//       console.log("Already Subscribed");
//     } else {
//       view = "Roadside Coder";
//       called++;
//       console.log("Subscribe to", view);
//     }
//   };
// }

// let isSubscribe = likeTheVideo();

// isSubscribe(); // Subscribe to Roadside Coder
// isSubscribe(); // Already Subscribed

//prototype
// function Employee() {
//   this.name = "Arun";
//   this.role = "QA";
// }
// console.log(Employee());

// var empObj1 = new Employee();
// Employee.prototype.salary = 30000;
// console.log(empObj1);
// // empObj1.salary = 30000;
// console.log(empObj1.salary); // 15

// var empObj2 = new Employee();
// console.log(empObj2);
// console.log(empObj2.salary); // undefined

// let cat = {
//   breed: "munchkin",
// };
// let mycat = {
//   name: "Fluffy",
// };

// Object.setPrototypeOf(mycat, cat);
// console.log(mycat.name);
// console.log(mycat.breed);
// console.log(mycat.__proto__);
// cat.tailLength = 15;
// console.log(mycat.__proto__);

// function Mydoggie() {}
// console.log(Mydoggie.prototype);
// console.log(Mydoggie.__proto__);

// const koala = {};
// // console.log(koala.__proto__);
// // console.log(koala.prototype);
// console.log(koala.__proto__ === Object.prototype);
// Object.prototype.waffle = "jedrookrke";
// console.log(koala.waffle);

const a = {
  name2: "ritu",
  language: "Javascript",
};
const p = {
  run: () => {
    alert("run");
  },
};

p.__proto__ = {
  name: "raja",
};

a.__proto__ = p;
a.run();
console.log(a.name);
