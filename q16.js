//16. Remove Duplicates from String

let prompt = require("prompt-sync")()
const str = prompt("Enter a valid String: ").toLowerCase()

// const removeDuplicate = (str) => {
//   let set = new Set(str)
//   let value = ""
//   for (let ch of set) {
//     value += ch
//   }

//   return value
// }

// TC = O(n)
// SC = O(n)

//------------------Another Approach---------------------------->>>>
const removeDuplicate = (str) => {
  let arr = new Array(26).fill(false)
  let value = ""
  for (let ch of str) {
    let index = ch.charCodeAt(0) - 97

    if (!arr[index]) {
      value += ch
      arr[index] = true
    }
  }

  return value
}

// TC = O(n)
// SC = O(26) = O(1)

console.log(removeDuplicate(str))