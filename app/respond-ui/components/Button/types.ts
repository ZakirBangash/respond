import type { ReactElement } from "react"
import type { PressableProps, StyleProp, TextStyle, ViewStyle } from "react-native"

export type ButtonVariant =
  "primary" | "secondary" | "tertiary" | "outline" | "link" | "danger" | "utility"

export type ButtonSize = "small" | "medium" | "large"

type ButtonIcon = ReactElement<{
  width: number
  height: number
  color: string
}> | null

export interface ButtonProps extends Omit<PressableProps, "style" | "children"> {
  label: string
  textStyle?: StyleProp<TextStyle>
  containerStyle?: StyleProp<ViewStyle>
  variant: ButtonVariant
  size: ButtonSize
  leftIcon?: ButtonIcon
  rightIcon?: ButtonIcon
  loading?: boolean
  disabled?: boolean
  isRTL?: boolean
}
