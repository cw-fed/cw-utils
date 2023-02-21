import { isString } from '../../src/is'

describe('is string', () => {
  test('should return true', () => {
    expect(isString('1')).toEqual(true)
  })
  test('should return false', () => {
    expect(isString(1)).toEqual(false)
  })
})
