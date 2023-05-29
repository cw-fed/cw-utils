import R from 'ramda'

export function isString (target: any) {
  return R.is(String, target)
}

export function isBoolean (target: any) {
  return R.is(Boolean, target)
}

export function toStringCall (target: any) {
  return Object.toString.prototype.call(null, target).substring(8, -1)
}

export function isObject (target: any) {
  return R.is(Object, target)
}

export function isArray (target: any) {
  return R.is(Array, target)
}

export function isNotNil (target: any) {
  return R.complement(R.isNil)(target)
}

export function isNil (target: any) {
  return R.isNil(target)
}

export function isNumber (target: any) {
  return R.is(Number, target)
}
