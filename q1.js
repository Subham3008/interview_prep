//1. Check Even or Odd

let prompt = require("prompt-sync")()
const n = Number(prompt("Enter A number: "))
function EvenOrOdd(n) {
  if (n % 2 === 0) {
    return `${n} is even number`
  } else {
    return `${n} is odd number`
  }
}

console.log(EvenOrOdd(n));

