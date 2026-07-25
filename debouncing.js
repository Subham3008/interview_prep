

function search(input) {
  console.log("input-->", input);

}
function debouncing(fnc, delay) {
  let timer
  return function (...args) {
    clearTimeout(timer)

    timer = setTimeout(() => {
      fnc(...args)
    }, delay)
  }
}

const debounceSearch = debouncing(search, 300)

debounceSearch("S")
debounceSearch("SU")
debounceSearch("SUB")
debounceSearch("SUBH")
debounceSearch("SUBHA")
debounceSearch("SUBHAM")