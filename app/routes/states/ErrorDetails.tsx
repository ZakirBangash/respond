import { ErrorInfo } from "react"
import { ScrollView, StyleSheet, View } from "react-native"

import { Screen } from "@/components/Screen"
import { translate } from "@/i18n/translate"
import { Button, Icon, Text } from "respond-ui"
import { base, system, systemScale } from "respond-ui/foundations"

export interface ErrorDetailsProps {
  error: Error
  errorInfo: ErrorInfo | null
  onReset(): void
}

export function ErrorDetails(props: ErrorDetailsProps) {
  return (
    <Screen
      preset="fixed"
      safeAreaEdges={["top", "bottom"]}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.topSection}>
        <Icon icon="ladybug" size={64} />
        <Text style={styles.heading} variant="h3">
          {translate("errorScreen:title")}
        </Text>
        <Text>{translate("errorScreen:friendlySubtitle")}</Text>
      </View>

      <ScrollView style={styles.errorSection} contentContainerStyle={styles.errorSectionContent}>
        <Text style={styles.errorContent} variant="paragraph-l-bold">
          {`${props.error}`.trim()}
        </Text>
        <Text selectable style={styles.errorBacktrace}>
          {`${props.errorInfo?.componentStack ?? ""}`.trim()}
        </Text>
      </ScrollView>

      <Button
        label={translate("errorScreen:reset")}
        variant="danger"
        size="large"
        onPress={props.onReset}
        containerStyle={styles.resetButton}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: systemScale.size24,
    paddingTop: systemScale.size32,
  },
  errorBacktrace: {
    color: base[60],
    marginTop: systemScale.size16,
  },
  errorContent: {
    color: system.error[2],
  },
  errorSection: {
    backgroundColor: base[30],
    borderRadius: 6,
    flex: 2,
    marginVertical: systemScale.size16,
  },
  errorSectionContent: {
    padding: systemScale.size16,
  },
  heading: {
    color: system.error[2],
    marginBottom: systemScale.size16,
  },
  resetButton: {
    paddingHorizontal: systemScale.size48,
  },
  topSection: {
    alignItems: "center",
    flex: 1,
  },
})
