//Arithmetic Operator -> +,-,*,/,%(modulus),**(exponent)
//assignment operator -> =,+=,-= , **=
// var x = 3;
// x += 6; // x= x + 6
// console.log(x);

// var x = 4;
// x *= 4;
// console.log(x);

// var x = 4;
// x /= 3;
// console.log(x);

// // 45

// var firstnumber = prompt("enter first number ");
// var secondnumber = prompt("enter second number");
// var firstnumber = parseInt(firstnumber, 10);
// var secondnumber = parseInt(secondnumber, 10);
// var sub, sum, mul, div, mod;
// sum = firstnumber + secondnumber;
// sub = firstnumber - secondnumber;
// mul = firstnumber * secondnumber;
// div = firstnumber / secondnumber;
// mod = firstnumber % secondnumber;
// document.write(sum +"<br/>");
// document.write(sub +"<br/>");
// document.write(mul +"<br/>");

// document.write(div +"<br/>");
// document.write(mod +"<br/>");

// var num1 = prompt("enter first number");
// var num2 = prompt("enter second number");
// num1=parseInt(num1,10);
// num2=parseInt(num2,10);

// var result;

// result=num1 + num2;
// document.write(num1+"+"+num2+"="+ result+"<br/>")

// result=num1 - num2;
// document.write(num1+"-"+num2+"="+ result+"<br/>")

// result=num1 * num2;
// document.write(num1+"*"+num2+"="+ result+"<br/>")

// result=num1 / num2;
// document.write(num1+"/"+num2+"="+ result+"<br/>")

// result=num1 % num2;
// document.write(num1+"%"+num2+"="+ result+"<br/>")

// var base = prompt("enter Base = ");
// var height = prompt("enter Height = ");
// var area = base* height;
// document.write("area ="+area +"<br/>");

// var farn = parseFloat(prompt("enter fahrenhight"));

// var cels = (farn-32)*(5/9);
// document.write("celsious ="+cels);

// var cels = parseFloat(prompt("enter celcious"));

// var farn= (cels*(9/5)) + 32;

// document.write("farenhight =" +farn)

//Logical operator = && , || , !

// var num1 = 20;
// var num2 = 24;
// console.log(num1>num2);
// document.write(20=="20");
// document.write(20===20);
// document.write(20==='20');
// console.log(25!=20);;

// var num1=50;
// var num2 = 30;
// var num3= 20;
// console.log(num1>num2 && num1>num3);
// console.log(num1>num2 || num3>num2);

// console.log(num3>num1 || num3>num2);
// console.log(!(25>22))

//even odd program
var num = 6;
if (num % 2 == 0) console.log("even");
else console.log("odd");

var num = 5;
if (num % 2 == 0) console.log("even");

if (num % 2 != 0) console.log("even");

//leter grade
//user marks input
// A+ (80-70)
//A (70-79)
//A-
//B
//C
//D (33-39)
//fAIL
//  var num = prompt("enter a number : ");
//  if(num >0)
//  console.log("positive");

//  else if(num < 0)
//  console.log("negative");
//  else
//  console.log("zero");

// var marks=prompt("enter your number :");

//  if(marks >100 || marks <0);
// console.log("invalid marks");

// else if(marks>=80 && marks<=100)
// console.log("A+");
// else if(marks>=70 && marks <=79)
// console.log("A");
// else if(marks>=60 && marks <=69)
// console.log("A-");
// else if(marks>=50 && marks <=59)
// console.log("B");
// else if(marks>=40 && marks <=49)
// console.log("C");
// else if(marks>=25 && marks <=39)
// console.log("A");
// else
// console.log("fail")

// var num1 = prompt("enter num1 :");
// var num2 = prompt("enter num2");
// var num3 = prompt("enter num3 :");

// if (num1 > num2 && num1 > num3) console.log("large number =" + num1);
// else if (num2 > num1 + num2 > num3) console.log("large number = " + num2);
// else num1 > num2 && num1 > num3;
// console.log("large number =" + num3);


var letter = prompt("enter a letter :");

letter = letter.toLowerCase()

if(letter=="a" || letter=="e" || letter=="i" || letter=="0" || letter=="u")
console.log("vowel");
else console.log("consonant")