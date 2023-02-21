export function queryParse(url: string): Record<any, any> {
  const startIndex = url.indexOf('?')
  const n = url.length
  const parsed = url.substring(startIndex + 1, n).split('&').map(s => s.split('=')).reduce((prev, curr) => {
    return {
      ...prev,
      [curr[0]]: curr[2]
    }
  }, {})
  return parsed
}
