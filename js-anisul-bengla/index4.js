//digit spelling
// 0- Zero , 1 - One .... 9-nine 10 - not a valid number
// switch , case , break , default

// var digit = prompt("enter any digit :");;
// if(digit==0)
// console.log("zero");
// else if(digit==1)
// console.log("one");
// else if(digit==2)
// console.log("two");
// else if(digit==3)
// console.log("three");
// else
// console.log("not a digit");

var digit = prompt("enter any digit : ");
switch (digit) {
  case "0":
    console.log("zero");
    break;
  case "1":
    console.log("one");
    break;
  case "2":
    console.log("two");
    break;
  case "3":
    console.log("three");
    break;
  case "4":
    console.log("four");
    break;
  case "5":
    console.log("five");
    break;
  case "6":
    console.log("six");
    break;
  case "7":
    console.log("seven");
    break;
  case "8":
    console.log("eight");
    break;
  case "9":
    console.log("nine");
    break;
  case "10":
    console.log("ten");
    break;
  default:
    console.log("not a digit");
}

var letter = prompt("enter a letter");
letter=letter.toLowerCase()
switch (letter) {
  case "a":
    console.log("vowel");
    break;
  case "e":
    console.log("vowel");
    break;
  case "i":
    console.log("vowel");
    break;
  case "o":
    console.log("vowel");
    break;
  case "u":
    console.log("vowel");
    default:
        console.log("consonent")
}
