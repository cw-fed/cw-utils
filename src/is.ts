export function isString (target) {
  return typeof target === 'string'
}

export function isBoolean (target) {
  return typeof target === 'boolean'
}

export function toStringCall (target) {
  return Object.toString.prototype.call(null, target).substring(8, -1)
}

export function isObject (target) {
  return toStringCall(target) === 'object'
}
