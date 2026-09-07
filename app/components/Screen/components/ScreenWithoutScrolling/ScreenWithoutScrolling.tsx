import { View } from "react-native"

import { styles } from "../../styles"
import type { ScreenProps } from "../../types"

export const ScreenWithoutScrolling = (props: ScreenProps) => {
  const { style, contentContainerStyle, children, preset } = props

  return (
    <View style={[styles.outer, style]}>
      <View
        style={[styles.inner, preset === "fixed" && styles.justifyFlexEnd, contentContainerStyle]}
      >
        {children}
      </View>
    </View>
  )
}
