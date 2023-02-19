export const throttle = (fn, delay) => {
  let timer = null
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn && fn.call(this, ...args)
    }, delay)
  }
}
