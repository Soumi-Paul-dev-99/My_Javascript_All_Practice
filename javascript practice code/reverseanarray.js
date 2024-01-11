// Create a function that reverses an array in javascript


const originalArray = [0,1,2,3,5];

function reverseArray(arr){
    const reversedarray = [];
    for(let i = arr.length -1; i >=0 ; i-- ){
        reversedarray.push(arr[i])
    }
    return reversedarray;
};

const reversedarray = reverseArray(originalArray);
console.log(reversedarray)