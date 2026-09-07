import { KeyboardAwareScrollView } from "react-native-keyboard-controller"

import type { ScreenProps } from "../../types"
import { useScreenWithScrolling } from "../../useScreenWithScrolling"

export const ScreenWithScrolling = (props: ScreenProps) => {
  const {
    bottomOffset,
    children,
    contentContainerStyle,
    keyboardShouldPersistTaps,
    onContentSizeChange,
    onLayout,
    ref,
    scrollEnabled,
    ScrollViewProps,
    style,
  } = useScreenWithScrolling(props)

  return (
    <KeyboardAwareScrollView
      bottomOffset={bottomOffset}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      scrollEnabled={scrollEnabled}
      ref={ref}
      {...ScrollViewProps}
      onLayout={onLayout}
      onContentSizeChange={onContentSizeChange}
      style={style}
      contentContainerStyle={contentContainerStyle}
    >
      {children}
    </KeyboardAwareScrollView>
  )
}
