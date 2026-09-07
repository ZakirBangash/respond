import { StyleSheet, View } from "react-native"

import { formatDate } from "@/utils/formatDate"
import { Text } from "respond-ui"
import { fill, mainContent, radius, systemScale } from "respond-ui/foundations"

type DaySeparatorProps = {
  date: string
}

export const DaySeparator = ({ date }: DaySeparatorProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.pill}>
        <Text variant="caption-s-regular" style={styles.text}>
          {formatDate(date, "d MMMM yyyy")}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: systemScale.size8,
    marginTop: systemScale.size4,
  },
  pill: {
    backgroundColor: fill.elevated,
    borderRadius: radius.full,
    paddingHorizontal: systemScale.size12,
    paddingVertical: systemScale.size6,
  },
  text: {
    color: mainContent.secondary,
  },
})
