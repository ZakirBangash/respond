/* eslint-disable no-restricted-imports */
import { Text as RNText } from "react-native"
/* eslint-enable no-restricted-imports */

import { styles } from "./styles"
import type { TextProps } from "./types"

export const Text = ({
  variant = "paragraph-l-regular",
  style,
  isRTL = false,
  ...props
}: TextProps) => {
  return <RNText style={[styles(isRTL)[variant], styles(isRTL).default, style]} {...props} />
}
