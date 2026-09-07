import type { StyleProp, SwitchProps as RNSwitchProps, TextStyle, ViewStyle } from "react-native"
import type { TOptions } from "i18next"

import type { TxKeyPath } from "@/i18n"

export type SwitchProps = {
  value?: boolean
  onValueChange?: RNSwitchProps["onValueChange"]
  label?: string
  labelTx?: TxKeyPath
  labelTxOptions?: TOptions
  labelPosition?: "left" | "right"
  labelStyle?: StyleProp<TextStyle>
  containerStyle?: StyleProp<ViewStyle>
}
