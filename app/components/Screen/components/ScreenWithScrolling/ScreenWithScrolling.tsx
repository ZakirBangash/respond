import { KeyboardAwareScrollView } from "react-native-keyboard-controller"

import { useScreenWithScrolling } from "../../hooks"
import type { ScreenProps } from "../../types"

export const ScreenWithScrolling = (props: ScreenProps) => {
  const {
    bottomOffset,
    children,
    contentContainerStyle,
    keyboardShouldPersistTaps,
    ref,
    ScrollViewProps,
    style,
  } = useScreenWithScrolling(props)

  return (
    <KeyboardAwareScrollView
      bottomOffset={bottomOffset}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      ref={ref}
      {...ScrollViewProps}
      style={style}
      contentContainerStyle={contentContainerStyle}
    >
      {children}
    </KeyboardAwareScrollView>
  )
}
