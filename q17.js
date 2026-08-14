//17. Find Second Largest in Array

let prompt = require("prompt-sync")()
// let arr = [5, 13, 7, 9, 2, 14, 6, 10, 15]
let arr = [5, 5, 5, 5]

const findSecondLaggest = (arr) => {
  if (arr.length < 2) return null;
  let largest = -Infinity
  let secondLargest = -Infinity

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest
      largest = arr[i]
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  if (secondLargest === -Infinity) {
    return null;
  }

  return secondLargest
}

console.log(findSecondLaggest(arr));
