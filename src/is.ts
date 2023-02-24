export function isString (target: any) {
  return typeof target === 'string'
}

export function isBoolean (target: any) {
  return typeof target === 'boolean'
}

export function toStringCall (target: any) {
  return Object.toString.prototype.call(null, target).substring(8, -1)
}

export function isObject (target: any) {
  return toStringCall(target) === 'object'
}
