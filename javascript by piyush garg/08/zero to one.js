// for (let i=1; i<=10; i++){
//     console.log(i)
// }

 
// Make an array of numbers that are doubles of the first array
function doubleArray(arr){
    const doubleArray = arr.map ((num)=>{
return num *2;
    })
    return doubleArray;
}
console.log(doubleArray([2,5,100]))



//  Take an array of numbers and make them strings in js
function stringOfArray (arr) {
    const stringUp = arr.map((num)=>{
        return num.toString()
    })
    return stringUp;
}
console.log(stringOfArray([1,2,3]))