export interface IAppTheme {
  // Base colors
  primary: string
  secondary: string
  backgroundColor: string
  primary10opa: string
  primary20opa: string
  primary5darker: string

  // Font
  defaultText: string
  subtleText: string

  // Backgrounds
  bgLight: string
  bgMedium: string
  bgDark: string

  // Buttons
  btnDefault: string
  btnDefaultFontColor: string
  btnDefaultDarker: string
  btnDefaultLighter: string
  btnSuccess: string
  btnSuccessDarker: string
  btnSuccessLighter: string
  btnDanger: string
  btnDangerDarker: string
  btnDangerLighter: string
  btnDisabled: string
  btnHoverTextColor: string

  // UI-colors
  alert: string
  lightAlert: string
  borderAlert: string
  info: string
  mediumInfo: string
  lightInfo: string
  borderInfo: string
  success: string
  mediumSuccess: string
  lightSuccess: string
  borderSuccess: string

  // Extras
  border: string
  gray10: string
  gray20: string
  disabled: string

  // Shadows
  shadowSmall: string
  shadowBig: string

  // Illustration
  illustrationGray: string
}

export const initTheme = (primary: string, secondary: string) => {
  return {
    primary: primary,
    secondary: secondary,
    backgroundColor: hexToRGBA(primary, 0.02),
    primary10opa: hexToRGBA(primary, 0.1),
    primary20opa: hexToRGBA(primary, 0.2),
    primary5darker: shadeColor(primary, -50),
    defaultText: '#000',
    subtleText: hexToRGBA('#000000', 0.5),
    bgDark: '#10105A',
    bgMedium: '#CFD9EA',
    bgLight: '#EEF4FB',
    btnDefault: secondary,
    btnDefaultFontColor: getContrastYIQ(secondary),
    btnDefaultDarker: shadeColor(secondary, -15),
    btnDefaultLighter: shadeColor(secondary, 15),
    btnSuccess: '#4DD964',
    btnSuccessDarker: '#27B33E',
    btnSuccessLighter: '#73FF8A',
    btnDanger: '#EB011A',
    btnDangerDarker: '#C50000',
    btnDangerLighter: '#FF2740',
    btnDisabled: '#D7D7D7',
    btnHoverTextColor: getContrastYIQ(shadeColor(secondary, -15)),
    alert: '#EB011A',
    lightAlert: '#FCD6DA',
    borderAlert: 'rgba(235,1,26,0.25)',
    info: '#F7B633',
    mediumInfo: '#FBDA99',
    lightInfo: '#FDEDCD',
    borderInfo: 'rgba(247,182,51,0.5)',
    success: '#4DD964',
    mediumSuccess: '#A6ECB2',
    lightSuccess: '#D2F5D8',
    borderSuccess: 'rgba(77,217,100,0.5)',
    border: '#CFD9EA',
    gray10: '#BDBDBD',
    gray20: '#efefef',
    disabled: '#D7D7D7',
    shadowSmall: '0px 2px 4px 0px rgba(0, 0, 0, 0.1)',
    shadowBig: '0px 10px 15px 0px rgba(0, 0, 0, 0.1)',
    illustrationGray: '#C3D0D8',
  }
}

// Helpers
const hexToRGBA = (hex: string, alpha: number) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
}

const shadeColor = (color: string, percent: number) => {
  var R = parseInt(color.substring(1, 3), 16)
  var G = parseInt(color.substring(3, 5), 16)
  var B = parseInt(color.substring(5, 7), 16)

  R = parseInt('' + (R * (100 + percent)) / 100)
  G = parseInt('' + (G * (100 + percent)) / 100)
  B = parseInt('' + (B * (100 + percent)) / 100)

  R = R < 255 ? R : 255
  G = G < 255 ? G : 255
  B = B < 255 ? B : 255

  var RR = R.toString(16).length === 1 ? '0' + R.toString(16) : R.toString(16)
  var GG = G.toString(16).length === 1 ? '0' + G.toString(16) : G.toString(16)
  var BB = B.toString(16).length === 1 ? '0' + B.toString(16) : B.toString(16)

  return '#' + RR + GG + BB
}

const getContrastYIQ = (hexcolor: string) => {
  hexcolor = hexcolor.replace('#', '')
  var r = parseInt(hexcolor.substr(0, 2), 16)
  var g = parseInt(hexcolor.substr(2, 2), 16)
  var b = parseInt(hexcolor.substr(4, 2), 16)
  var yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? 'black' : 'white'
}
