export const UA = window.navigator.userAgent

export const device = {
  ios: /^iphone$/.test(UA),
  andriod: /^chrome$/.test(UA),
}

export const isIOS = device.ios
export const isAndriod = device.andriod


