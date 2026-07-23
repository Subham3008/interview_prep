//2. Check Prime Number

let prompt = require("prompt-sync")()
const n = Number(prompt("Enter A number: "))
const Prime = (n) => {
  if (n < 2) return `${n} is not prime`
  let isPrime = false
  for (let i = 2; i < n; i++) {
    if (n % i !== 0) {
      isPrime = true
    }
  }

  if (isPrime) {
    return `${n} is prime number`
  } else {
    return `${n} is prime number`
  }
}

console.log(Prime(n));
