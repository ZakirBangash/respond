import { useSafeAreaInsets } from "react-native-safe-area-context"

import { systemScale } from "respond-ui/foundations"

/** Total height of `Header` — use as `Screen` `keyboardOffset` when the navigator shows a header. */
export const useHeaderHeight = () => {
  const insets = useSafeAreaInsets()
  const topPad = Math.max(insets.top, systemScale.size8)
  return topPad + systemScale.size40 + systemScale.size8
}
