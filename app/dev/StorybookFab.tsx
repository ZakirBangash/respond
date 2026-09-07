import { Pressable, StyleSheet, Text } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { fill, mainContent, radius, systemScale } from "respond-ui/foundations"

import { openStorybook } from "./storybookStore"

/**
 * Dev-only floating action button that opens on-device Storybook.
 * Only mount this behind `__DEV__`.
 */
export const StorybookFab = () => {
  const insets = useSafeAreaInsets()

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Open Storybook"
      onPress={openStorybook}
      style={({ pressed }) => [
        styles.fab,
        { bottom: insets.bottom + systemScale.size80, opacity: pressed ? 0.85 : 1 },
      ]}
    >
      <Text style={styles.label}>SB</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  fab: {
    alignItems: "center",
    backgroundColor: fill.brandRegular,
    borderRadius: radius.full,
    elevation: 4,
    height: systemScale.size56,
    justifyContent: "center",
    position: "absolute",
    right: systemScale.size16,
    shadowColor: mainContent.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: systemScale.size56,
    zIndex: 1000,
  },
  label: {
    color: mainContent.invert,
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
})
