export const UA = window.navigator.userAgent

export const device = {
  ios: /iPad|iPhone|iPod/.test(UA),
  andriod: /andriod/i.test(UA),
  wx: /webapp/.test(UA),
}

export const isIOS = device.ios
export const isAndriod = device.andriod
export const isWeixin = device.wx