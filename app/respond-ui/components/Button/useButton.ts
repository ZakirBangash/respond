import type { StyleProp, ViewStyle } from "react-native"

import { base } from "respond-ui/foundations"

import {
  disabledContainerStyles,
  iconColor,
  iconSize,
  labelColor,
  labelVariant,
  loaderColor,
  pressedContainerStyles,
  sizeStyle,
  styles,
  variantStyles,
} from "./styles"
import type { ButtonProps } from "./types"

export const useButton = (props: ButtonProps) => {
  const {
    label,
    size,
    variant,
    disabled,
    leftIcon,
    rightIcon,
    loading,
    textStyle,
    containerStyle,
    isRTL = false,
    ...rest
  } = props

  const isDisabled = !!disabled || !!loading

  const pressableStyle = (pressed: boolean): StyleProp<ViewStyle> => [
    styles.container,
    variant !== "link" && sizeStyle[size],
    variantStyles[variant],
    size === "large" && styles.largeGap,
    size === "small" && styles.smallGap,
    size === "medium" && styles.mediumGap,
    containerStyle,
    pressed && pressedContainerStyles[variant],
    isDisabled && disabledContainerStyles[variant],
  ]

  return {
    iconColor: disabled ? base[50] : iconColor[variant],
    iconSize: iconSize[size],
    isDisabled,
    isRTL,
    label,
    labelStyle: [
      styles.textPadding,
      labelColor[variant],
      disabled && { color: base[50] },
      textStyle,
    ],
    labelVariant: labelVariant[size],
    leftIcon,
    loaderColor: loaderColor[variant],
    loading,
    pressableStyle,
    rest,
    rightIcon,
  }
}
