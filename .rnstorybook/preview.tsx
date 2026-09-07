import { StyleSheet, View } from "react-native"
import type { Preview } from "@storybook/react-native"

import { systemScale } from "respond-ui/foundations"

const preview: Preview = {
  decorators: [
    (Story) => (
      <View style={styles.canvas}>
        <Story />
      </View>
    ),
  ],
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    justifyContent: "center",
    padding: systemScale.size16,
  },
})

export default preview
