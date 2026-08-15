//19. Binary Search (Sorted Array)

let prompt = require("prompt-sync")()
const n = Number(prompt("Enter a value to search: "))

function binarySearch(n) {
  let arr = [5, 6, 7, 9, 10, 14, 15]  //n = 14

  let start = 0
  let end = arr.length - 1

  while (start < end) {
    let mid = Math.floor((start + end) / 2)

    if (arr[mid] == n) return `${n} present in index ${mid}`
    if (arr[mid] < n) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

   return -1
}

console.log(binarySearch(n))