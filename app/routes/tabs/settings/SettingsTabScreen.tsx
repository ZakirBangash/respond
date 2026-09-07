import { FC } from "react"
import { StyleSheet, View } from "react-native"

import { Screen } from "@/components/Screen"
import { translate } from "@/i18n/translate"
import { Text } from "respond-ui"
import { mainContent, systemScale } from "respond-ui/foundations"

const SETTINGS_NAME = "Taylor Chen"
const APP_VERSION = "0.0.1"

export const SettingsTabScreen: FC = function SettingsTabScreen() {
  return (
    <Screen preset="scroll">
      <View style={styles.content}>
        <Text variant="caption-m-regular" style={styles.label}>
          {translate("settingsScreen:name")}
        </Text>
        <Text variant="paragraph-l-bold" style={styles.value}>
          {SETTINGS_NAME}
        </Text>
        <Text variant="caption-m-regular" style={styles.label}>
          {translate("settingsScreen:appVersion")}
        </Text>
        <Text variant="paragraph-m-regular" style={styles.value}>
          {APP_VERSION}
        </Text>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: systemScale.size24,
    paddingVertical: systemScale.size16,
  },
  label: {
    color: mainContent.tertiary,
    marginBottom: systemScale.size4,
    marginTop: systemScale.size16,
  },
  value: {
    color: mainContent.primary,
  },
})
