//11. LCM of Two Numbers

let prompt = require("prompt-sync")()
const a = Number(prompt("Enter A number: "))
const b = Number(prompt("Enter A number: "))

const LCM = (a, b) => {
  let min = Math.min(a, b)
  let ans = 1
  for (let i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      ans = i
    }
  }

  return (a * b) / ans
}

console.log(LCM(a, b));
