import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native"

import { base, brand, radius, system, systemScale } from "respond-ui/foundations"

import type { ButtonSize, ButtonVariant } from "./types"
import type { TextVariant } from "../Text/types"

export const sizeStyle: Record<ButtonSize, StyleProp<ViewStyle>> = {
  large: {
    height: systemScale.size52,
    paddingHorizontal: systemScale.size20,
  },
  medium: {
    height: systemScale.size44,
    paddingHorizontal: systemScale.size16,
  },
  small: {
    height: systemScale.size32,
    paddingHorizontal: systemScale.size12,
  },
}

export const variantStyles: Record<ButtonVariant, StyleProp<ViewStyle>> = {
  primary: {
    backgroundColor: brand[60],
  },
  secondary: {
    backgroundColor: brand[5],
  },
  tertiary: {
    backgroundColor: base[0],
  },
  outline: {
    backgroundColor: base[0],
    borderWidth: 1,
    borderColor: base[30],
  },
  link: {
    backgroundColor: "transparent",
    borderRadius: radius[1],
  },
  danger: {
    backgroundColor: system.error[3],
  },
  utility: {
    backgroundColor: base[0],
    borderWidth: 1,
    borderColor: base[30],
  },
}

export const labelVariant: Record<ButtonSize, TextVariant> = {
  large: "paragraph-l-bold",
  medium: "paragraph-m-bold",
  small: "paragraph-s-bold",
}

export const labelColor: Record<ButtonVariant, StyleProp<TextStyle>> = {
  primary: { color: base[0] },
  secondary: { color: brand[60] },
  tertiary: { color: brand[60] },
  outline: { color: brand[60] },
  link: { color: brand[60] },
  danger: { color: base[0] },
  utility: { color: brand[60] },
}

export const disabledContainerStyles: Record<ButtonVariant, StyleProp<ViewStyle>> = {
  primary: {
    backgroundColor: base[30],
  },
  secondary: {
    backgroundColor: base[20],
  },
  tertiary: {
    backgroundColor: "transparent",
  },
  outline: {
    backgroundColor: base[0],
    borderWidth: 1,
    borderColor: base[20],
  },
  link: {
    backgroundColor: "transparent",
  },
  danger: {
    backgroundColor: base[30],
  },
  utility: {
    backgroundColor: base[0],
    borderWidth: 1,
    borderColor: base[30],
  },
}

export const pressedContainerStyles: Record<ButtonVariant, StyleProp<ViewStyle>> = {
  primary: {
    backgroundColor: brand[80],
  },
  secondary: {
    backgroundColor: brand[20],
  },
  tertiary: {
    backgroundColor: base[0],
  },
  outline: {
    backgroundColor: base[0],
    borderWidth: 1,
    borderColor: brand[70],
  },
  link: {
    backgroundColor: "transparent",
  },
  danger: {
    backgroundColor: system.error[3],
  },
  utility: {
    backgroundColor: base[0],
    borderWidth: 1,
    borderColor: base[30],
  },
}

export const pressedLabelStyles: Record<ButtonVariant, StyleProp<TextStyle>> = {
  primary: { color: base[0] },
  secondary: { color: brand[80] },
  tertiary: { color: brand[80] },
  outline: { color: brand[70] },
  link: {
    color: brand[80],
    textDecorationColor: brand[80],
  },
  danger: { color: base[0] },
  utility: { color: base[60] },
}

export const pressedIconColors: Record<ButtonVariant, string> = {
  primary: base[0],
  secondary: brand[80],
  tertiary: brand[80],
  outline: brand[70],
  link: brand[80],
  danger: base[0],
  utility: base[60],
}

export const iconSize: Record<ButtonSize, number> = {
  large: 20,
  medium: 16,
  small: 16,
}

export const iconColor: Record<ButtonVariant, string> = {
  primary: base[0],
  secondary: brand[60],
  tertiary: brand[60],
  outline: brand[60],
  link: brand[60],
  danger: base[0],
  utility: base[60],
}

export const loaderColor: Record<ButtonVariant, string> = {
  primary: base[0],
  secondary: brand[60],
  tertiary: brand[60],
  outline: brand[60],
  link: brand[60],
  danger: base[0],
  utility: brand[60],
}

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: radius.full,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  contentContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  largeGap: {
    gap: systemScale.size8,
  },
  loader: {
    flex: 1,
  },
  mediumGap: {
    gap: systemScale.size6,
  },
  smallGap: {
    gap: systemScale.size4,
  },
  textPadding: {
    paddingHorizontal: systemScale.size4,
  },
})
