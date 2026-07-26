// 12. Check Leap Year

let prompt = require("prompt-sync")()
const year = Number(prompt("Enter a valid Year: "))

const LeapYear = (year) => {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return `${year} is A Leap Year`
  }

  return `${year} is Not A Leap Year`
}

console.log(LeapYear(year));
