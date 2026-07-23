//4. Fibonacci Series (First N Terms)

let prompt = require("prompt-sync")()
const n = Number(prompt("Enter A number: "))
const Fibonacci = (n) => {
  if (n === 1) {
    console.log(0)
    return
  }

  if (n <= 0) return

  let prev1 = 1
  let prev2 = 0

  process.stdout.write(prev2 + " ")
  process.stdout.write(prev1 + " ")

  for (let i = 3; i <= n; i++) {
    let curr = prev2 + prev1
    process.stdout.write(curr + " ")

    prev2 = prev1
    prev1 = curr
  }
}

// console.log(Fibonacci(n));
Fibonacci(n)
