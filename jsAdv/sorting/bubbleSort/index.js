//const nums = [29, 10, 14, 37, 14]; //o/p will be [10,14,14,29,37]
//(check each element into the array)

const bubbleSort = (arr) => {
  const n = arr.length;
  //   console.log(n)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

console.log(bubbleSort([29, 10, 14, 37, 14]));
//best time complexity = o(n)
//worst time complexity = o(n^2)
//space complexity = o(1) //we are taking array as a input but we are not creating a new array.
