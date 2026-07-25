//8. Sum of Digits

let prompt = require("prompt-sync")()
const n = Number(prompt("Enter A number: "))

const SumOfDigits = (n) => {
  let sum = 0
  while (n > 0) {
    sum += n % 10
    n = Math.floor(n / 10)
  }

  return sum
}

console.log(SumOfDigits(n));
