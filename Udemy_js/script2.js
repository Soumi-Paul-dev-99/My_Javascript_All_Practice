// "use strict";

// // let hasDriverLiense = false;
// // const passTest = true;
// // if (passTest) hasDriverLiense = true;
// // if (hasDriverLiense) console.log(`i can drive:D`);

// // const interface ='Audio';
// // const private = 534;

// function logger() {
//   console.log("my name is jonas");
// }
// //calling/ running / invoking function
// logger();
// logger();

// function fruitProcessor(apple, banana) {
//   console.log(apple, banana);
//   const juice = `juice with ${apple} apples and ${banana} banana;`;
//   return juice;
// }
// const applejuce = fruitProcessor(5, 10);
// console.log(applejuce);
// console.log(fruitProcessor(5, 2));

// //function declaration
// function calAge1(birthyeah) {
//   return 2037 - birthyeah;
// }
// const age1 = calAge1(1991);

// //function expression
// const calage2 = function (birthyeah) {
//   return 2037 - birthyeah;
// };
// const age2 = calage2(1991);
// console.log(age1, age2);

// //arrow faction
// const calage3 =birthyeah=>2035-birthyeah;
// const age3= calage3(1664)
// console.log(age3);

// const yearsretair =(birthyeah,firstName)=>{
// const age = 2037 - birthyeah;
// const retairment = 65-age;
// //return retairment;
// return `${firstName} retires in ${retairment} years`
// }
// console.log(yearsretair(1991, 'jonas'));
// console.log(yearsretair(1980,'bob'));

function cutFruitPieces(fruit) {
  return (fruit * 4);
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);
  const juice = `juice with ${applePieces} apples and ${orangesPieces} oranges`;
  return juice;
}
console.log(fruitProcessor(2, 3));
