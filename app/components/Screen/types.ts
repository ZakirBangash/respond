import type { ReactNode } from "react"
import type { KeyboardAvoidingViewProps, ScrollViewProps, StyleProp, ViewStyle } from "react-native"
import type { SystemBarsProps, SystemBarStyle } from "react-native-edge-to-edge"

import type { ExtendedEdge } from "@/utils/useSafeAreaInsetsStyle"

export const DEFAULT_BOTTOM_OFFSET = 50

export type ScreenPreset = "fixed" | "scroll"

interface BaseScreenProps {
  children?: ReactNode
  /** Outer container — padding and margin. */
  style?: StyleProp<ViewStyle>
  /** Inner content — padding and margin. */
  contentContainerStyle?: StyleProp<ViewStyle>
  /** Safe-area edges. */
  safeAreaEdges?: ExtendedEdge[]
  backgroundColor?: string
  /** Status / nav bar look. Defaults to dark. */
  systemBarStyle?: SystemBarStyle
  /** Extra keyboard lift. Defaults to 0. */
  keyboardOffset?: number
  /** How far to scroll when the keyboard opens. Defaults to 50. */
  keyboardBottomOffset?: number
  SystemBarsProps?: SystemBarsProps
  KeyboardAvoidingViewProps?: KeyboardAvoidingViewProps
}

export interface FixedScreenProps extends BaseScreenProps {
  preset?: "fixed"
}

export interface ScrollScreenProps extends BaseScreenProps {
  preset?: "scroll"
  /** Keep keyboard open on tap. Defaults to handled. Scroll only. */
  keyboardShouldPersistTaps?: "handled" | "always" | "never"
  ScrollViewProps?: ScrollViewProps
}

export type ScreenProps = ScrollScreenProps | FixedScreenProps
