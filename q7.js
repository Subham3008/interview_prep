//7. Armstrong Number

let prompt = require("prompt-sync")()
let n = Number(prompt("Enter A number: "))
const Armstrong = () => {
  let digits = n.toString().length
  let sum = 0
  let temp = n
  while (temp > 0) {
    let digit = temp % 10
    sum += Math.pow(digit, digits)
    temp = Math.floor(temp / 10)
  }

  if (n === sum) {
    return "Armstrong Number"
  }
  return "Not a Armstrong Number"
}

console.log(Armstrong(n));
