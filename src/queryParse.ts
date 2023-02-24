export function queryParse(url: string): Object {
  const startIndex = url.indexOf('?')
  const n = url.length
  const parsed = url.substring(startIndex + 1, n).split('&').map(s => s.split('=').reduce((a: string, b: string): any => ({[a]: b}))).reduce((a: any, b: any) => ({...a, ...b}))
  return parsed
}
