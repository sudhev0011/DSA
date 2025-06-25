function binarySearch(arr, target) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let centerIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (arr[centerIdx] === target) {
      return centerIdx;
    } else if (target > arr[centerIdx]) {
      leftIdx = centerIdx + 1;
    } else {
      rightIdx = centerIdx-1;
    }
  }

  return -1;
}

console.log(binarySearch([-5,2,4,6,10], 10));
console.log(binarySearch([-5,2,4,6,10], 6));
console.log(binarySearch([-5,2,4,6,10], 20));

