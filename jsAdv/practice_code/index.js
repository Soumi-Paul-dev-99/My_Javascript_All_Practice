// Write a JavaScript program to display the current day and time in the following format.
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38
// const today = new Date();
// console.log(today);
// const day = today.getDay();
// const dayList = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// console.log(`Today is : ${dayList[day]}`);
// const currentTime = new Date().getTime();
// console.log(currentTime);

// let hour = today.getHours();
// const min = today.getMinutes();
// const sec = today.getSeconds();
// let prepand = hour < 12 ? "AM" : "PM";
// hour = hour % 12 || 12; //convert to 12 hr format

// console.log(`current Time : ${hour} ${prepand} : ${min} : ${sec}`);

// Write a JavaScript program to print the current window contents.
// console.log(window.print);

// Write a JavaScript program to get the current date.
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// const now = new Date();
// const day = String(now.getDate()).padStart(2, "0"); // Pad single-digit day with leading zero
// const month = String(now.getMonth() + 1).padStart(2, "0"); // Pad month with leading zero (months are zero-based)
// const year = now.getFullYear();

// // Create the formatted date strings
// const format1 = `${month}-${day}-${year}`; // mm-dd-yyyy
// const format2 = `${month}/${day}/${year}`; // mm/dd/yyyy
// const format3 = `${day}-${month}-${year}`; // dd-mm-yyyy
// const format4 = `${day}/${month}/${year}`; // dd/mm/yyyy

// // Display the output
// console.log(format1);
// console.log(format2);
// console.log(format3);
// console.log(format4);

//Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7

// const a = 5;
// const b = 6;
// const c = 7;
// const s = (a + b + c) / 2;
// const abc = Math.sqrt(s * (s - a) * (s - b) * (s - c));
// console.log(`the area of triangle is ${abc}`);

//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
// function leapYear(year) {
//   return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
// }
// console.log(leapYear(2016));
// console.log(leapYear(2007));
// console.log(leapYear(1996));
// console.log(leapYear(2000));

//Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

// for (let year = 2014; year <= 2050; year++) {
//   const d = new Date(year, 0, 1); //in date object year represent year , 0 represent month, 1 represent day of the month.
//   console.log(d);
//   if (d.getDay() === 0) console.log("1st January is being a Sunday  " + year);
// }

//Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one

const matches = (obj, source) => {
  Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  ); // every method return true if the callback function  returns true for every element in the object. and false otherwise.
};

// console.log(
//   matches({ age: 25, hair: "long", beard: true }, { hair: "long", beard: true })
// ); // true
console.log(
  matches({ hair: "long", beard: true }, { age: 25, hair: "long", beard: true })
); // false
// console.log(
//   matches({ hair: "long", beard: true }, { age: 26, hair: "long", beard: true })
// ); // false
