export const throttle = (fn: Function, delay: number) => {
  let timer:NodeJS.Timer|null = null
  return (...args: any[]) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn && fn.call(this, ...args)
    }, delay)
  }
}
