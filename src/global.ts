export function getGlobalObject(): any {
  if (window) return window
  if (process) return process
}