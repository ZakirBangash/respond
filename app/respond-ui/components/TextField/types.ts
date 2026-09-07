import type { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native"
import type { TOptions } from "i18next"

import type { TxKeyPath } from "@/i18n"

export type TextFieldProps = Omit<TextInputProps, "ref"> & {
  /** When `"disabled"`, input is not editable and uses muted styles. */
  status?: "disabled"
  placeholder?: string
  placeholderTx?: TxKeyPath
  placeholderTxOptions?: TOptions
  style?: StyleProp<TextStyle>
  containerStyle?: StyleProp<ViewStyle>
  inputWrapperStyle?: StyleProp<ViewStyle>
}
