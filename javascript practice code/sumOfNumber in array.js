// Calculate the sum of numbers within an array

const numbers = [ 1,2,3,4,5,6];

function sumOfArray(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum +=arr[i];
    }
    return sum;
}
const result = sumOfArray(numbers);
console.log(`the sum of the array is ${result}`)