import R from 'ramda'

export function deepClone(target: any) {
  return R.clone(target)
}