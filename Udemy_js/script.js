console.log(4 + 5 + 6 - 2);
console.log("jonas");
let firstname = "soumi";
console.log(firstname);
let jonas_nam = "jm";
let $homen = "hk";
let firstJob = "programmer1";
let mySecondJob = "teacher1";
let job1 = "programmer";
let job2 = "teacher";
console.log(job1);

let javaScript1 = true;
console.log(javaScript1);

console.log(typeof true);
// console.log(typeof 26);
// console.log(typeof "jonas");
console.log(typeof javaScript1);

javaScript1 = "john";
console.log(typeof javaScript1);

let year;
console.log(year);
console.log(typeof year);

let age = 21;
age = 31;

const birthday = 1991;
// birthday = 1334;
var job = "programmer";
job = "teacher";

const appJones = 2023 - 1665;
const apph = 2045 + 2654;
console.log(appJones, apph);
console.log(appJones * 2, appJones / 10, 2 == 3);

const firstName = "jogn";
const lastName = "paul";
console.log(firstName + " " + lastName);

//assignment operator
let x = 10 + 5; //15
x += 10; //x=x+10
x *= 4; //x=x*4=100
x++; //x=x+1
x--; //x=x-1
console.log(x);

//comperision operator
console.log(appJones > apph);
console.log(apph >= 18);

const now = 2037;
const appJone = now - 1991;
const appsara = now - 2018;
console.log(now - 1991 > now - 2018);

let z, y;
z = y = 25 - 10 - 5;
console.log(x, y);

const avarageAge = (appJone + apph) / 2;
console.log(appJones, appsara, avarageAge);

const massmark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightjohn = 1.95;

const BMIMark = massmark / heightMark ** 2;
const BMIJohn = massJohn / (heightjohn * heightjohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);

const names = "janas";
const job3 = "teacher";
const birthyear = 1998;
const years = 2045;
const jonas =
  "i'm " + names + ",a " + (years - birthyear) + " years old " + job + "!";

console.log(jonas);
const jonasnew = `i'm ${names} ,a ${years - birthyear} old , i am a ${job3}`;
console.log(jonasnew);

console.log("String with\n multiple \n lines");
console.log(`String
multipla
lines`);

const myage = 5;
if (myage >= 18) {
  console.log(`sarah can start driving license`);
} else {
  const yearsLeft = 18 - myage;
  console.log(`search is too young.wait another ${yearsLeft} years :`);
}

const birthdayYear = 2012;

let century;
if (birthdayYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

const massmar = 95;
const heightmar = 1.88;
const massjo = 85;
const heightjo = 1.76;

const bmimar = massmar / heightmar ** 2;
const bmijoh = massjo / (heightjo * heightjo);

console.log(bmimar, bmijoh);
if (bmimar > bmijoh) {
  console.log(`marks bmi (${bmimar})is higher than john (${bmijoh})`);
} else {
  console.log(`johns bmi is (${bmijoh})higher than marks (${bmimar})`);
}

//type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(Number("jonas"));
console.log(typeof NaN);
console.log(String(23), 23);
console.log("23" - "10" + 3);
console.log("10" + "12" + 3);
console.log("10" * "12" * "12");
//type coercion

let m = "1" + 1;
m = m - 1;
console.log(m);

// 5 falsy values 0,"",undefined,null,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));
console.log("");

const money = 0;
if (money) {
  console.log("don't spend it all");
} else {
  console.log("you should get a job");
}
let Height1 = 78;
if (Height1) {
  console.log("heighjt is defined");
} else {
  console.log("height is undefined");
}

const agex = 18;
if (agex === 18) console.log("you just become an adult :D (strict)");
if (agex == 18) console.log("you just become an adult :D (loose)");

const favourite = Number(prompt("whats your favourite number"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("cool 23 ois an amazing number");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("number is not 23 or 7");
}
if (favourite !== 23) console.log("why not 237");

const hasdriverlicense = true;
const goodVision = true;
console.log(hasdriverlicense && goodVision);
console.log(hasdriverlicense || goodVision);
console.log(!hasdriverlicense);

if (hasdriverlicense && goodVision) {
  console.log("sarah is able to drive");
} else {
  console.log("someone else should drive");
}

const isTired = false;
console.log(hasdriverlicense || goodVision || isTired);

if (hasdriverlicense && goodVision && !isTired) {
  console.log("sarah is able to drive!");
  console.log("someone else should drive...");
}

// const scoreDolphins = (96+108+89) /3;
// const scoreKoalas = (88+91+110) /3;
// console.log(scoreDolphins,scoreKoalas);

// if(scoreDolphins > scoreKoalas){
//   console.log("dolphins win the trophy ")
// }else if (scoreKoalas > scoreDolphins){
//   console.log("koalas win the trophy")
// }else if(scoreDolphins===scoreKoalas)
// console.log("both win the trophy");

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalase >= 100) {
  console.log("koalas win the trophy");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("both win the trophy");
} else {
  console.log("no one wins the trophy");
}

// const day = "sunday";
// switch(day){
//   case 'monday':
//   console.log("plan course structure")
//   console.log("go to coding making")
//   break;
//   case "tuesday":
//     console.log("prepare theory videos");
//     break;
//     case 'wednesday':
//       case 'thursday':
//         console.log("write code examples");
//         break;
//         case "friday":
//           console.log('record videos');
//           break;
//           case "saturday":
//             case "sunday":
//               console.log("enjoy the weekend : D");
//           break;
//           default:
//             console.log("not a valid number")
// }

const day = "friday";
if (day === "monday") {
  console.log("plan course structure");
  console.log("go to coding making");
} else if (day === "tuesday") {
  console.log("prepare theory videos");
} else if (day === "wednesday" || "thursday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("enjoy the weekend : D");
} else if (day === "saturday " || "sunday") {
  console.log("record videos");
} else {
  console.log("not a valid day");
}

3 + 4;
1991;
true && false && !false;
if (23 > 18) {
  const str = `23 is bigger`;
}
const me = "jonas";
console.log(`i'm ${2037 - 1991} years old ${me}`);

const agaes = 23;
agaes >= 18
  ? console.log("i like to drink wine")
  : console.log("i like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age <= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

const bill =430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill*0.2;
console.log(
  `the bill was ${bill} , the tip was ${tip}, and the total value ${bill + tip}`
);
