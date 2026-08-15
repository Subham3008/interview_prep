//21. Selection Sort


let prompt = require("prompt-sync")()
let arr = [5, 3, 8, 1, 2, 7, 4];

function selectionShort(arr) {

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }

  return arr

}

console.log(selectionShort(arr))