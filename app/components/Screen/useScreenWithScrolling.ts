import { useRef } from "react"
import type { LayoutChangeEvent } from "react-native"
import { useScrollToTop } from "@react-navigation/native"
import type { KeyboardAwareScrollViewRef } from "react-native-keyboard-controller"

import { styles } from "./styles"
import {
  DEFAULT_BOTTOM_OFFSET,
  type AutoScreenProps,
  type ScreenProps,
  type ScrollScreenProps,
} from "./types"
import { useAutoPreset } from "./useAutoPreset"

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
  const { scrollEnabled, onContentSizeChange, onLayout } = useAutoPreset(props as AutoScreenProps)

  useScrollToTop(ref)

  const handleLayout = (e: LayoutChangeEvent) => {
    onLayout(e)
    ScrollViewProps?.onLayout?.(e)
  }

  const handleContentSizeChange = (w: number, h: number) => {
    onContentSizeChange(w, h)
    ScrollViewProps?.onContentSizeChange?.(w, h)
  }

  return {
    bottomOffset: keyboardBottomOffset,
    children,
    contentContainerStyle: [
      styles.inner,
      ScrollViewProps?.contentContainerStyle,
      contentContainerStyle,
    ],
    keyboardShouldPersistTaps,
    onContentSizeChange: handleContentSizeChange,
    onLayout: handleLayout,
    ref,
    scrollEnabled,
    ScrollViewProps,
    style: [styles.outer, ScrollViewProps?.style, style],
  }
}
