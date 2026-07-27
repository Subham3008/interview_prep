//15. Check Anagram

let prompt = require("prompt-sync")()
const s1 = prompt("Enter a valid String: ").toLowerCase()
const s2 = prompt("Enter a valid String: ").toLowerCase()

const anagram = (s1, s2) => {
  if (s1.length !== s2.length) return "Not Anagram"
  let freq = new Array(26).fill(0)
  for (let i = 0; i < s1.length; i++) {
    freq[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++
  }

  for (let i = 0; i < s2.length; i++) {
    freq[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--
  }

  for (let i = 0; i < freq.length; i++) {
    if (freq[i] !== 0) {
      return "Not Anagram"
    }
  }

  return "Anagram"

}

console.log(anagram(s1, s2));
