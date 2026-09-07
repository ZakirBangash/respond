import { StyleSheet, View } from "react-native"

import { Text } from "respond-ui"
import { fill, mainContent, radius, systemScale } from "respond-ui/foundations"

import type { AvatarPlaceholderProps } from "./types"

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")

const sizeStyle = {
  large: {
    borderRadius: radius.full,
    height: systemScale.size80,
    width: systemScale.size80,
  },
  medium: {
    borderRadius: radius.full,
    height: systemScale.size48,
    width: systemScale.size48,
  },
  small: {
    borderRadius: radius.full,
    height: systemScale.size36,
    width: systemScale.size36,
  },
} as const

export const AvatarPlaceholder = ({ name, size = "medium" }: AvatarPlaceholderProps) => {
  return (
    <View style={[styles.avatar, sizeStyle[size]]}>
      <Text variant="paragraph-s-bold" style={styles.initials}>
        {getInitials(name)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: "center",
    backgroundColor: fill.brandLight,
    justifyContent: "center",
  },
  initials: {
    color: mainContent.link,
  },
})
