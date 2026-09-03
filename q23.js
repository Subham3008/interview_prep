// Given an integer n, repeatedly calculate the sum of its digits until the result becomes a single-digit number.

// Example:
// Input: 9875
// 9 + 8 + 7 + 5 = 29
// 2 + 9 = 11
// 1 + 1 = 2

let prompt = require("prompt-sync")()
const n = Number(prompt("Enter a value: "))

function convertSingleDigit(n) {

  while (n >= 10) {
    let sum = 0

    while (n > 0) {
      sum += n % 10   //10  0
      n = Math.floor(n / 10) //987  
    }

    n = sum
  }

  return n

}

console.log(convertSingleDigit(n))