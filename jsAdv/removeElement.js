// const y =[1,2,3,4,5,6]
// console.log(questionEven(y));

// function questionEven(array) {
//     let arr = []
//     for(i=0; i<array.length; i++) {
//         if(i%2 !== 0) {
//             arr.push(array[i])
//         }

//     }
//     return arr
// }
// remove 6 from the array
// let arr = [1,2,3,4,5,6]
// let y = 6
// arr = arr.filter(item=> item !=6) // remove 6 from the array
//     console.log(arr);

//remove specific element from an array
const someArray = [1, 2, 3, 4];
const outputArray = [];
let count = 0;
const search = 3;
for (let i = 0; i < someArray.length; i++) {
  if (someArray[i] === search && count === 0) {
    count++;
  } else {
    outputArray.push(someArray[i]);
  }
}
console.log(outputArray);
