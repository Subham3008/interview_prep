//14. Reverse a String

let prompt = require("prompt-sync")()
const str = prompt("Enter a valid String: ").toLowerCase()

const reverseString = (str) => {
  let arr = str.split("")
  let i = 0
  let j = arr.length - 1

  while (i < j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    i++
    j--
  }
  return arr.join("")
}

console.log(reverseString(str));
