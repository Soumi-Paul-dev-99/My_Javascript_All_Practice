//definition of recursion
//recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem.
// recursion occurs when function calls itself

// iterator function
// const countToTen = (num) => {
//   while (num <= 10) {
//     console.log(num);
//     num++;
//   }
// };
// countToTen(1);

//recursive functions has 2 parts
//1) the recursive call to the function
//2) at least one condition to  exit

const recurToTen = (num) => {
  if (num > 10) return;
  //   console.log(num);
  num++;
  recurToTen(num);
};

recurToTen(1);
//reason to use recursion
//increased readability

// the standard example : fibonacci sequence
//0,1,1,2,3,5,8,13,21,..

//without Recursion
const fibonacci = (num, array = [0, 1]) => {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2); // slice method is used to extract the last two elements of the array,
    array.push(nextToLast + last); // [0, 1, 1, 2], then nextToLast will be set to 2 and last will be set to 1
    num -= 1;
  }
  return array;
};
// console.log(fibonacci(12));

//with Recursion
const fib = (num, array = [0, 1]) => {
  if (num < 2) return array;
  const [nextToLast, last] = array.slice(-2);
  return fib(num - 1, [...array, nextToLast + last]);
};
// console.log(fibonacci(12));

//what is in the nth position of the Fibonacci sequence

//without Recursion
const fibonacciPos = (pos) => {
  if (pos <= 1) return pos;
  const seq = [0, 1];
  for (let i = 2; i <= pos; i++) {
    const [nextToLast, last] = seq.slice(-2);
    seq.push(nextToLast + last);
  }
  return seq[pos];
};
// console.log(fibonacciPos(8));

//with Recursion
const fibPos = (pos) => {
  if (pos < 2) return pos;
  return fibPos(pos - 1) + fibPos(pos - 2);
};
// console.log(fibPos(8));
