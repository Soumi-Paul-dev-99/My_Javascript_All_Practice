//we need to divide the array till it becomes 1.
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  //   console.log(mid);
  const leftArr = arr.slice(0, mid);
  console.log(leftArr);
  const rightArr = arr.slice(mid);
  console.log(rightArr);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [5, -7, 3, 2, 9, 1];
console.log(mergeSort(arr));
