//return things in array 'a' that are not present in array 'b'

const arr1 = ["a", "b", "c", 1, 2, 3];
const arr2 = ["a", "b", "c", "d", "e"];

// console.log(arr2.indexOf());
console.log(Array.isArray(arr1)); //true
console.log(arr2.indexOf(arr1)); //-1
console.log(arr1.filter((elem) => arr2.indexOf(elem) === -1)); //[1,2,3]

complements = (arr1, arr2) => {
  return Array.isArray(arr1) && Array.isArray(arr2)
    ? arr1.filter((elem) => arr2.indexOf(elem) === -1)
    : undefined;
};

console.log(complements(arr1, arr2));
