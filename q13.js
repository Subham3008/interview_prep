//13. Count Vowels and Consonants

let prompt = require("prompt-sync")()
const str = prompt("Enter a valid String: ").toLowerCase()
let vowel = 0;
let consonant = 0;
const CountVowelsAndConsonants = (str) => {
  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) {
      vowel++
    } else {
      consonant++
    }
  }

  return `Vowels: ${vowel} and Consonants: ${consonant}`
}

console.log(CountVowelsAndConsonants(str));
