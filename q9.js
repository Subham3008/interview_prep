//9. Largest of Three Numbers

let prompt = require("prompt-sync")()
const a = Number(prompt("Enter A number: "))
const b = Number(prompt("Enter A number: "))
const c = Number(prompt("Enter A number: "))

const LargestOfThreeNumber = (a, b, c) => {
  if (a > b && a > c) {
    return `${a} is largest number`
  } else if (b > a && b > c) {
    return `${b} is largest number`
  } else {
    return `${c} is largest number`
  }
}

console.log(LargestOfThreeNumber(a, b, c));
