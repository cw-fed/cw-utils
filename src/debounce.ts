export const debounce = (fn, delay) => {
  let timer = null
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
      timer = null
      return
    }
    timer = setTimeout( () => {
      fn && fn.call(this, ...args)
    }, delay)
  }
}
