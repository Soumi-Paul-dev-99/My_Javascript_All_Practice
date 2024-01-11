const express = require("express");
const app = express();

const PORT = 4004;

//BASIC LITERALS
// const book1 = {
//   author: "rituparna",
//   title: "easy life",
//   year: "2026",
//   getSummary: function () {
//     return `${this.title} was written by ${this.author}`;
//   },
// };

// console.log(book1);
// console.log(book1.getSummary());
// console.log(Object.values(book1)); //values return as array
// console.log(Object.keys(book1)); //values return as array

//CONSTRUCTOR
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   this.getSummary = function () {
//     return `${this.title} was written by ${this.author}`;
//   };
// }

// const book1 = new Book("madeEasy1", "Jacob", "2016");
// const book2 = new Book("madeEasy2", "Jacob", "2017");

// console.log(book1.getSummary());
// console.log(book2);

//PROTOTYPES
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// //getSummary
// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author}`;
// };
// //getAge
// Book.prototype.getAge = function () {
//   const years = new Date().getFullYear() - this.year;
//   return `${this.title} is ${years} years old`;
// };

// //Revise / Change Year
// Book.prototype.revise = function (newYear) {
//   this.year = newYear;
//   this.revised = true;
// };

// const book1 = new Book("madeEasy1", "Jacob", "2016");
// const book2 = new Book("madeEasy2", "Jacob", "2017");

// // console.log(book2.getAge());
// console.log(book2);
// book2.revise("2018");
// console.log(book2);

//INHERITANCE
//Constructor
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// //getSummary
// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author}`;
// };

// //magazine constructor
// function Magazine(title, author, year, month) {
//   Book.call(this, title, author, year);
//   this.month = month;
// }

// //Inherit prototype
// Magazine.prototype = Object.create(Book.prototype);

// const mag1 = new Magazine("Mag One", "Jacob", "2012", "nov");
// // console.log(mag1);

// console.log(mag1.getSummary());

//OBJECT CREATE
//Object of protos
// const bookProtos = {
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
//   getAge: function () {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
//   },
// };

// //Create Object
// // const book1 = Object.create(bookProtos);
// // book1.title = "Book One";
// // book1.author = "Jacob";
// // book1.year = "2014";

// const book1 = Object.create(bookProtos, {
//   title: { value: "Book One" },
//   author: { value: "Jacob" },
//   year: { value: "2014" },
// });

// console.log(book1);
//CLASS ES6
// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//   getSummary() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   }
//   getAge() {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
//   }

//   revise(newYear) {
//     this.year = newYear;
//     this.revised = true;
//   }
// }

// //Instantiate Object
// const book1 = new Book("Book One", "Jacob", "2014");

// console.log(book1);
// book1.revise("2022");
// console.log(book1);

//CLASS ES6

//SUB classes
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

class MagaZine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

const mag1 = new MagaZine("made easy", " Jacob", "2017", "jan");

console.log(mag1);

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
