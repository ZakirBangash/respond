import type { ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

/** A side of the screen: notch (top), home bar (bottom), or left/right. */
export type ExtendedEdge = "top" | "bottom" | "left" | "right" | "start" | "end"

/**
 * Extra space so content is not hidden under the notch or home indicator.
 *
 * @example
 * const insets = useSafeAreaInsetsStyle(["top"])
 * // { paddingTop: 59 }
 * <View style={insets} />
 *
 * @example
 * useSafeAreaInsetsStyle(["top", "bottom"])
 * // { paddingTop: 59, paddingBottom: 34 }
 *
 * @example
 * useSafeAreaInsetsStyle(["top"], "margin")
 * // { marginTop: 59 }
 */
export function useSafeAreaInsetsStyle(
  edges: ExtendedEdge[] = [],
  kind: "padding" | "margin" = "padding",
): ViewStyle {
  const insets = useSafeAreaInsets()
  const style: ViewStyle = {}

  for (const edge of edges) {
    if (edge === "top") {
      style[kind === "padding" ? "paddingTop" : "marginTop"] = insets.top
    } else if (edge === "bottom") {
      style[kind === "padding" ? "paddingBottom" : "marginBottom"] = insets.bottom
    } else if (edge === "left" || edge === "start") {
      style[kind === "padding" ? "paddingStart" : "marginStart"] = insets.left
    } else if (edge === "right" || edge === "end") {
      style[kind === "padding" ? "paddingEnd" : "marginEnd"] = insets.right
    }
  }

  return style
}
