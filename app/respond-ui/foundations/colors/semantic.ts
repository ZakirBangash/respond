import { base, brand, system } from "./primitive"

export const mainContent = Object.freeze({
  primary: base[80],
  secondary: base[70],
  tertiary: base[50],
  link: brand[60],
  contrast: base[90],
  invert: base[0],
})

export const systemContent = Object.freeze({
  textError: system.error[3],
  iconError: system.error[2],
  textWarning: system.warning[3],
  iconWarning: system.warning[2],
  textSuccess: system.success[3],
  iconSuccess: system.success[2],
})

export const background = Object.freeze({
  white: base[10],
  elevated: base[30],
})

export const fill = Object.freeze({
  white: base[0],
  elevated: base[30],
  brandBold: brand[90],
  brandRegular: brand[60],
  brandLight: brand[5],
  disabled: base[40],
  errorStrong: system.error[3],
  errorWeak: system.error[1],
  warningStrong: system.warning[3],
  warningWeak: system.warning[1],
  successStrong: system.success[3],
  successWeak: system.success[1],
})

export const border = Object.freeze({
  default: base[40],
  brand: base[60],
  error: system.error[3],
})
