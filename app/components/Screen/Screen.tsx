import { KeyboardAvoidingView, View } from "react-native"
import { SystemBars } from "react-native-edge-to-edge"

import { sharedStyles } from "@/utils/styles"

import { ScreenWithoutScrolling, ScreenWithScrolling } from "./components"
import { styles } from "./styles"
import type { ScreenProps } from "./types"
import { useScreen } from "./useScreen"

/**
 * Full-screen wrapper: safe area, status bar, keyboard, and optional scroll.
 *
 * `preset`
 * - `fixed` — no scroll (default)
 * - `scroll` — always scroll
 * - `auto` — scroll only when content is taller than the screen
 *
 * @example
 * import { Screen } from "@/components/Screen"
 *
 * <Screen
 *   preset="fixed"
 *   backgroundColor="#FFFFFF"
 *   safeAreaEdges={["top", "bottom"]}
 *   systemBarStyle="dark"
 *   SystemBarsProps={{ hidden: false }}
 *   keyboardOffset={0}
 *   KeyboardAvoidingViewProps={{ enabled: true }}
 *   style={{ paddingHorizontal: 16 }}
 *   contentContainerStyle={{ flexGrow: 1 }}
 * >
 *   {children}
 * </Screen>
 *
 * @example
 * <Screen
 *   preset="scroll"
 *   keyboardShouldPersistTaps="handled"
 *   keyboardBottomOffset={50}
 *   ScrollViewProps={{ showsVerticalScrollIndicator: false }}
 *   style={{ backgroundColor: "#FFFFFF" }}
 *   contentContainerStyle={{ padding: 16 }}
 * >
 *   {children}
 * </Screen>
 *
 * @example
 * <Screen
 *   preset="auto"
 *   scrollEnabledToggleThreshold={{ percent: 0.92, point: 0 }}
 *   keyboardShouldPersistTaps="handled"
 *   keyboardBottomOffset={50}
 *   ScrollViewProps={{ bounces: true }}
 * >
 *   {children}
 * </Screen>
 */
export const Screen = (props: ScreenProps) => {
  const {
    backgroundColor,
    containerInsets,
    isFixed,
    keyboardBehavior,
    KeyboardAvoidingViewProps,
    keyboardOffset,
    SystemBarsProps,
    systemBarStyle,
  } = useScreen(props)

  return (
    <View style={[styles.container, { backgroundColor }, containerInsets]}>
      <SystemBars style={systemBarStyle} {...SystemBarsProps} />

      <KeyboardAvoidingView
        behavior={keyboardBehavior}
        keyboardVerticalOffset={keyboardOffset}
        {...KeyboardAvoidingViewProps}
        style={[sharedStyles.flex1, KeyboardAvoidingViewProps?.style]}
      >
        {isFixed ? <ScreenWithoutScrolling {...props} /> : <ScreenWithScrolling {...props} />}
      </KeyboardAvoidingView>
    </View>
  )
}
