export const debounce = (fn: Function, delay: number) => {
  let timer: NodeJS.Timer|null = null
  return (...args: any[]) => {
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
