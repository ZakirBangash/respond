import { useRef } from "react"
import { useScrollToTop } from "@react-navigation/native"
import type { KeyboardAwareScrollViewRef } from "react-native-keyboard-controller"

import { styles } from "../styles"
import { DEFAULT_BOTTOM_OFFSET, type ScreenProps, type ScrollScreenProps } from "../types"

export const useScreenWithScrolling = (props: ScreenProps) => {
  const {
    children,
    keyboardShouldPersistTaps = "handled",
    keyboardBottomOffset = DEFAULT_BOTTOM_OFFSET,
    contentContainerStyle,
    ScrollViewProps,
    style,
  } = props as ScrollScreenProps

  const ref = useRef<KeyboardAwareScrollViewRef>(null)

  useScrollToTop(ref)

  return {
    bottomOffset: keyboardBottomOffset,
    children,
    contentContainerStyle: [
      styles.inner,
      ScrollViewProps?.contentContainerStyle,
      contentContainerStyle,
    ],
    keyboardShouldPersistTaps,
    ref,
    ScrollViewProps,
    style: [styles.outer, ScrollViewProps?.style, style],
  }
}
