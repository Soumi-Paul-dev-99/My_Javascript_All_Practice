// let users = {
//   getFullname: function () {
//     return this.name + " " + this.lastName;
//   },
//   getAge: function () {
//     let age = new Date().getFullYear() - this.birth;
//     return age;
//   },
// };

// let student = {
//   name: "Raja",
//   lastName: "Ghosh",
//   birth: 2000,
// };
// let teacher = {
//   name: "Rahul",
//   lastName: "Ghosh",
//   birth: 1980,
// };

// teacher.__proto__ = users;
// student.__proto__ = users;

// console.log(student.getAge());
// console.log(teacher.getAge());

// "use strict";
// const user = {
//   id: 551,
//   name: "Tom",
//   getId() {
//     return this.id;
//   },
//   credentials: {
//     id: 120,
//     username: "tom",
//     getId() {
//       return this.id;
//     },
//   },
// };

// const getId = user.credentials.getId();
// console.log(getId);

// function hello() {
//   setTimeout(() => {
//     console.log(this.name);
//   }, 100);
// }
// hello.call({ name: "tom" });
// //or
// function hello() {
//   const self = this;
//   setTimeout(function () {
//     console.log(self.name);
//   }, 100);
// }
// hello.call({ name: "tom" });

// function Person(name) {
//   this.name = name;
// }
// Person.prototype.getName = function () {
//   return this.name;
// };
// const tom = new Person("Tom");
// console.log(tom.getName());

// function makeAdd(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// const addTwo = makeAdd(2);
// // addTwo(3); // -> 5
// console.log(addTwo(3));

// const addTen = makeAdd(10);
// // addTen(30); // -> 40
// console.log(addTen(30));

// function callOnce(fn) {
//   let count = 0;
//   return function () {
//     count += 1;
//     if (count > 1) return; // return undefined
//     return fn();
//   };
// }
// const fn = () => console.log("hello");
// const callOnce = (fn) => {
//   let count = 0;
//   return () => (++count > 1 ? undefined : fn());
// };

// const r = (() => {
//   const n = 1;
//   const m = 2;
//   return n + m;
// })();
// console.log(n);
//We will get a ReferenceError because all the variables are defined inside a self-invoked function that creates a closure around the variables. And trying to log the value of n outside of the closure we will get a reference error because the variable are not available outside of the function.

// const a = () => {};
// function B() {}

// console.log(typeof a); // function
// console.log(typeof B); // function
// console.log(Object.getPrototypeOf(a)); // A
// console.log(Object.getPrototypeOf(B)); // A
// console.log(a.prototype); // undefined
// console.log(B.prototype); // Constructor
//Now, lines C are interesting because we are evaluating the prototype property of a and B. Now, because a is an arrow function it doesn't have a prototype property so undefined will be returned. But since function B is a non-arrow function, an object will be returned that includes properties like constructor, __proto__.

// function Animal(species) {
//   this.species = species;
//   this.eats = true;
// }

// Animal.prototype.walks = function () {
//   return `A ${this.species} is Walking`;
// };

// const Bear = new Animal("bear");
// console.log(Bear.species);
// console.log(Bear.walks());

// console.log(Bear.__proto__);
// console.log(Animal.prototype);
// //prototype is what is inheritable from Animal its the bucket of store those methods.Bear.__proto__ thats what bear has inherited from
// console.log(Bear.__proto__ === Animal.prototype);
// console.log(Bear);

// const ShapeA = function () {};
// const ShapeB = {
//   a() {
//     console.log("aaa");
//   },
// };

// ShapeA.prototype.__proto__ = ShapeB;
// console.log(ShapeA.prototype); // { a: [Function: a] }
// console.log(ShapeA.prototype.__proto__); // { a: [Function: a] }

// const shapeA = new ShapeA();
// shapeA.a(); // aaa
// console.log(ShapeA.prototype === shapeA.__proto__); // true

// const ShapeC = function () {};
// ShapeC.prototype = {};
// const ShapeD = {
//   a() {
//     console.log("a");
//   },
// };

// const shapeC = new ShapeC();
// shapeC.__proto__ = ShapeD;
// shapeC.a(); // a
// console.log(ShapeC.prototype === shapeC.__proto__); // false
//comparing the prototype property of the ShapeC constructor function with the __proto__ property of the shapeC object.
//However, in this case, you have manually set the __proto__ property of the shapeC object to the ShapeD object. This means that the __proto__ property of shapeC no longer points to the prototype property of the ShapeC constructor function.

// function Test() {}
// Test.prototype.myName = function () {
//   console.log("myName");
// };

// const test = new Test();
// console.log(test.__proto__ === Test.prototype); // true
// test.myName(); // myName

// const obj = {};
// obj.__proto__ = Test.prototype;
// obj.myName(); // myName

// function iPhone() {}; // constructor
// // a method for recognizing faces
// iPhone.prototype.faceID = function() { ... };
// // a method for taking 4k video
// iPhone.prototype.video = function() { ... };
// let newPhone = new iPhone(); // an iPhone 11
