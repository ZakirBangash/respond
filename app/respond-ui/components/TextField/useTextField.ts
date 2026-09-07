import { useRef } from "react"
import type { StyleProp, TextInput, TextStyle } from "react-native"

import { isRTL } from "@/i18n"
import { translate } from "@/i18n/translate"

import { sharedStyles } from "../../utils/styles"
import { styles } from "./styles"
import type { TextFieldProps } from "./types"

export function useTextField(props: TextFieldProps) {
  const {
    placeholderTx,
    placeholder,
    placeholderTxOptions,
    status,
    style: inputStyleOverride,
    containerStyle: containerStyleOverride,
    inputWrapperStyle: inputWrapperStyleOverride,
    ...TextInputProps
  } = props

  const input = useRef<TextInput>(null)
  const disabled = TextInputProps.editable === false || status === "disabled"

  const placeholderContent = placeholderTx
    ? translate(placeholderTx, placeholderTxOptions)
    : placeholder

  const inputWrapperStyles = [
    sharedStyles.row,
    styles.inputWrapper,
    TextInputProps.multiline && styles.inputWrapperMultiline,
    inputWrapperStyleOverride,
  ]

  const inputStyles: StyleProp<TextStyle> = [
    styles.input,
    disabled && styles.inputDisabled,
    isRTL && styles.inputRtl,
    TextInputProps.multiline && styles.inputMultiline,
    inputStyleOverride,
  ]

  const focusInput = () => {
    if (disabled) return
    input.current?.focus()
  }

  return {
    TextInputProps,
    containerStyleOverride,
    disabled,
    focusInput,
    input,
    inputStyles,
    inputWrapperStyles,
    placeholderContent,
  }
}
