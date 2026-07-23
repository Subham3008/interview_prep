//3. Factorial of a Number

let prompt = require("prompt-sync")()
const n = Number(prompt("Enter A number: "))
const Factorial = (n) => {
  let ans = 1
  for (let i = 2; i <= n; i++) {
    ans *= i
  }
  return `Factorial of ${n} is ${ans}`
}

console.log(Factorial(n));
