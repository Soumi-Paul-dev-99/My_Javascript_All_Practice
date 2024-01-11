//Make an array of numbers that are doubles of the first array

function doubleNumbers(arr) {
  const doubleArray = arr.map((x) => x * 2);
  return doubleArray;
}
console.log(doubleNumbers([2, 5, 100]));

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(items => items * 2);
console.log(doubled);

//Take an array of numbers and make them strings

function stringItUp(arr) {
  const stringArray = arr.map((x) => String(x));
  return stringArray;
}
console.log(stringItUp([2, 5, 100]));

// Capitalize each of an array of names
function capitalizeNames(arr) {
  const capitalizeArray = arr.map(function (name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  });
  return capitalizeArray;
}
console.log(capitalizeNames(["johm", "JACKUO", "jinGrt"]));


// 4) Make an array of strings of the names
function namesOnly(arr){
    const nameArray = arr.map(function(person){
        return person.name;
    })
    return nameArray;
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
