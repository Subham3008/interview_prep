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

//fnc = search
//delay = 300
//timer = undefined
