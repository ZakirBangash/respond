import type { ReactNode } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { background, fill, mainContent, radius, systemScale } from "respond-ui/foundations"

import { closeStorybook } from "./storybookStore"

type StorybookHostProps = {
  children: ReactNode
}

/**
 * Wraps on-device Storybook with a close control so you can return to the app.
 */
export const StorybookHost = ({ children }: StorybookHostProps) => {
  const insets = useSafeAreaInsets()

  return (
    <View style={styles.root}>
      <View style={[styles.toolbar, { paddingTop: insets.top + systemScale.size8 }]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Close Storybook"
          onPress={closeStorybook}
          style={({ pressed }) => [styles.closeButton, pressed && styles.closePressed]}
        >
          <Text style={styles.closeLabel}>Close Storybook</Text>
        </Pressable>
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  closeButton: {
    alignSelf: "flex-start",
    backgroundColor: fill.brandRegular,
    borderRadius: radius.full,
    paddingHorizontal: systemScale.size16,
    paddingVertical: systemScale.size8,
  },
  closeLabel: {
    color: mainContent.invert,
    fontSize: 13,
    fontWeight: "600",
  },
  closePressed: {
    opacity: 0.85,
  },
  content: {
    flex: 1,
  },
  root: {
    backgroundColor: background.white,
    flex: 1,
  },
  toolbar: {
    paddingBottom: systemScale.size8,
    paddingHorizontal: systemScale.size16,
  },
})
