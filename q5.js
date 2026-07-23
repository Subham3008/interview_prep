//5. Reverse a Number

let prompt = require("prompt-sync")()
const n = Number(prompt("Enter A number: "))

const ReverseANumber = (n) => {
  let rev = 0
  while (n != 0) {
    rev = rev * 10 + (n % 10)
    n = Math.floor(n / 10)
  }

  return rev
}

console.log(ReverseANumber(n));
