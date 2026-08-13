const debouncing = (fn, delay) => {
  let timer;
  return function (...args) {
    // clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

const x = debouncing(getAllProduct, 300)
x("S")
x("SU")
x("SUB")
x("SUBH")

function getAllProduct(...args){
  console.log(...args)
  console.log("Api Call")
}
