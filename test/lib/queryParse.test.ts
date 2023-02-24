import { queryParse } from '../../src/queryParse'

describe('get parsed data', () => {
  test('get {a:"1",b:"2"}', () => {
    expect(queryParse('https://www.baidu.com?a=1&b=2')).toEqual({a:"1", b:"2"})
  })
})