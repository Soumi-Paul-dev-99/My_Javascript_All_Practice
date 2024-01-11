//Write a javascript function to check whether an "input" is an array or not

//second method

// const is_array = (input) => {
//   if (Array.isArray(input)) return true;

//   return false;
// };

// console.log(is_array(2));
// console.log(is_array([12, 1]));


//first method
const is_array = input =>{
    if(toString.call(input)==="[object Array]")
return true;
return false;
};
console.log(is_array("soumi"));
console.log(is_array([1,2,3]));


//2. write a javascript program to clone an array

// const clone = (arr) =>{
    // return arr.slice(2)
//    const x =  arr.splice(2)
//      return arr
// const x = [...arr]
// return x
// }

// const arr1 = [1,2,3,4,5]

// console.log(clone(arr1));


// const clone1 = (...value) =>{
//     value 
// }
// console.log(clone1(1, 2));

//method 1

const array_Clone = arra1 => arra1.slice(0);
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]])); 

//method 2 spread operator
let x = [1,2,4,5,6];
console.log("original array");
console.log(x);
let y  = [...x];
console.log("clone of the said array:");
console.log(y)

