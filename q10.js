//10. GCD of Two Numbers

let prompt = require("prompt-sync")()
const a = Number(prompt("Enter A number: "))
const b = Number(prompt("Enter A number: "))

// const GCD = (a, b) => {

//   let min = Math.min(a, b)
//   let ans = 1

//   for (let i = 1; i <= min; i++) {
//     if (a % i === 0 && b % i === 0) {
//       ans = i
//     }
//   }

//   return ans
// }

// console.log(GCD(a, b));

//-------------OPTIMAL APPROACH------------>>
const GCD = (a, b) => {
  while (b != 0) {
    let temp = b
    b = a % b
    a = temp
  }

  return a
}

console.log(GCD(a, b));
