//6. Check Palindrome Number

let prompt = require("prompt-sync")()
const n = Number(prompt("Enter A number: "))

const Palindrome = (n) => {
  let rev = 0
  let temp = n
  while (temp != 0) {
    rev = rev * 10 + (temp % 10)
    temp = Math.floor(temp / 10)
  }

  if (rev === n) {
    return `${n} is Palindron`
  }

  return `${n} is not a Palindrom`

}

console.log(Palindrome(n));
