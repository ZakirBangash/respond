import { Platform } from "react-native"

import { useSafeAreaInsetsStyle } from "@/utils/useSafeAreaInsetsStyle"
import { background } from "respond-ui/foundations"

import type { ScreenPreset, ScreenProps } from "../types"

const isIos = Platform.OS === "ios"

export const isNonScrolling = (preset?: ScreenPreset) => !preset || preset === "fixed"

export const useScreen = (props: ScreenProps) => {
  const {
    backgroundColor,
    KeyboardAvoidingViewProps,
    keyboardOffset = 0,
    safeAreaEdges,
    SystemBarsProps,
    systemBarStyle,
  } = props

  return {
    backgroundColor: backgroundColor || background.white,
    containerInsets: useSafeAreaInsetsStyle(safeAreaEdges),
    isFixed: isNonScrolling(props.preset),
    keyboardBehavior: isIos ? ("padding" as const) : ("height" as const),
    KeyboardAvoidingViewProps,
    keyboardOffset,
    SystemBarsProps,
    systemBarStyle: systemBarStyle || "dark",
  }
}
