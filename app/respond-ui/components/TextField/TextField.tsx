import { forwardRef, type Ref, useImperativeHandle } from "react"
import {
  // eslint-disable-next-line no-restricted-imports
  TextInput,
  Pressable,
  View,
} from "react-native"

import { base } from "respond-ui/foundations"

import type { TextFieldProps } from "./types"
import { useTextField } from "./useTextField"

/**
 * Text input used by the app (e.g. chat composer).
 * Supports placeholder i18n, multiline, disabled, and style overrides.
 */
export const TextField = forwardRef(function TextField(
  props: TextFieldProps,
  ref: Ref<TextInput>,
) {
  const {
    TextInputProps,
    containerStyleOverride,
    disabled,
    focusInput,
    input,
    inputStyles,
    inputWrapperStyles,
    placeholderContent,
  } = useTextField(props)

  useImperativeHandle(ref, () => input.current as TextInput)

  return (
    <Pressable
      accessibilityState={{ disabled }}
      style={containerStyleOverride}
      onPress={focusInput}
    >
      <View style={inputWrapperStyles}>
        <TextInput
          ref={input}
          underlineColorAndroid={base.transparent}
          textAlignVertical="top"
          placeholder={placeholderContent}
          placeholderTextColor={base[60]}
          {...TextInputProps}
          editable={!disabled}
          style={inputStyles}
        />
      </View>
    </Pressable>
  )
})
