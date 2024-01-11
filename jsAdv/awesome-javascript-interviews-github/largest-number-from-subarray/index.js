//Return an array consisting of the largest number from each provided sub-array

const arr = [
  [(13, 27, 18, 26)],
  [(4, 5, 1, 3)],
  [(32, 35, 37, 39)],
  [(1000, 1001, 857, 1)],
];

let maxArray = [0, 0, 0, 0];

for (let outerIndex = 0; outerIndex < arr.length; outerIndex++) {
  for (let innerIndex = 0; innerIndex < arr[outerIndex].length; innerIndex++) {
    if (arr[outerIndex][innerIndex] > maxArray[outerIndex]) {
      maxArray[outerIndex] = arr[outerIndex][innerIndex];
    }
  }
}

console.log(maxArray);
