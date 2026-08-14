//18. Linear Search

let prompt = require("prompt-sync")()
const n = prompt("Enter a value to search: ")



const linearSearch = (n) => {
  let arr = [5, 13, 7, 9, 2, 14, 6, 10, 15]
  let ans = -1
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] == n) {
      ans = i
    }


  }
  return `element is present in index ${ans}`

}

console.log(linearSearch(n));
