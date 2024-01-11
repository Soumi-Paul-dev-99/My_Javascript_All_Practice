//write a javascript function to calculate the sum of two numbers


function sumOfTwoNumbers (a,b){
    return a+b;
};

const result = sumOfTwoNumbers(2,3);
console.log(result);


//write a javascript program to find the maximum number in an array..

const numbers =[5,4,75,45,24,4];
const maxNumber = findMaxNumber(numbers)

function findMaxNumber(arr){
    return Math.max(...arr)
}

console.log(maxNumber);

//write a javascript function to check if a given string is a palindrome ;

function isPalindrome(str){
    return str === str.split("").reverse().join("")
}

const testStr1 = "racecar"; //true
const testStr2 = "hello"; //false

console.log(isPalindrome(testStr1));
console.log(isPalindrome(testStr2));

//write a javascript program to reverse string

const str1 = "soumi";
const reverseString = (str)=>str.split('').reverse().join('');
console.log(reverseString(str1))

// write a javascript function that takes an array of numbers and returns a new array with only the even number


function evenNum(numbers){
    return numbers.filter(num=>num%2===0);
}
const num1 = [1,23,45,21,7,6,5,8];
console.log(evenNum(num1));

//a factorial number is the product of all positive integers , which are equal to or less than the given number

function factorial(number){
    if(number===0 || number === 1){
        return 1;
    }else{
        return number *factorial(number-1)
    }
}