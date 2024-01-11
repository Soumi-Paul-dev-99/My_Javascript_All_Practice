// function a() {
//   var b = 10;
//   c();
//   function c() {}
// }

// a();
// console.log(b);

// function a() {
//   for (var i = 0; i <= 5; i++) {
//     function close(x) {
//       setTimeout(() => {
//         console.log(x);
//       }, x * 1000);
//     }
//     close(i); //using closure every time we set new copy of i.
//   }
//   console.log("hello");
// }
// a();

// var abc = "abcdefghijklmnopqrstuvwxyz";
// var str2 = "gfhyrt";
// console.log(abc.indexOf("lmno"));
// console.log(abc.lastIndexOf("lmno"));
// console.log(abc.slice(3, 6));
// console.log(abc.replace("abc", "123"));
// console.log(abc.toUpperCase());
// console.log(abc.toLowerCase());
// console.log(abc.concat(" ", str2));
// console.log(abc.charAt(2));
// console.log(abc[2]);
// console.log(abc.charCodeAt(2));
// console.log(abc.split(","));
// console.log(abc.split(""));

const obj = { a: 1, b: 2, c: 3 };

const entries = [];

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    entries.push([key, obj[key]]);
  }
}

console.log(entries); //o/p [['a', 1], ['b', 2], ['c', 3]]

const objt = { a: 1, b: 2, c: 3 };

const entries1 = Object.entries(objt); //The Object.entries() method is invoked with objt as the argument. This method takes an object and returns an array containing its enumerable property key-value pairs.
console.log(entries1); //o/p [['a', 1], ['b', 2], ['c', 3]]
