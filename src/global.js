export const getGlobal = () => {
  if (window) return window
  if (process) return process
}
