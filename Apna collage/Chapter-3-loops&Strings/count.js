//print 1 to 5

for (let i = 1; i <= 5; i++) {
  console.log("count started 5 times");
}
console.log("loops ended");

//calculate sum of first 1 to 100 numbers
sum = 0;
n = 100;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log("sum = ", sum);
console.log("loop ended");

//for-of loop return each elemet string and array
let str = "Soumi";
for (let i of str) {
  console.log("i =", i);
}

//calculate length
let stri = "javascript";
let size = 0;
for (let val of stri) {
  console.log("i", val);
  size++;
}
console.log("string size=", size);

// for in loop
let student = {
  name: "Soumi Paul",
  age: 20,
  isPass: true,
};

for (let key in student) {
  console.log("key=", key, "value=", student[key]);
}
