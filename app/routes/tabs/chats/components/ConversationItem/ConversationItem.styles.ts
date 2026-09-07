import { StyleSheet } from "react-native"

import { border, mainContent, radius, systemScale } from "respond-ui/foundations"

export const styles = StyleSheet.create({
  avatar: {
    borderRadius: radius.full,
    height: systemScale.size48,
    width: systemScale.size48,
  },
  content: {
    flex: 1,
    marginStart: systemScale.size12,
  },
  lastMessage: {
    color: mainContent.secondary,
    marginTop: systemScale.size4,
  },
  name: {
    color: mainContent.primary,
    flex: 1,
    marginEnd: systemScale.size8,
  },
  pressed: {
    opacity: 0.7,
  },
  row: {
    alignItems: "center",
    borderBottomColor: border.default,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    paddingHorizontal: systemScale.size16,
    paddingVertical: systemScale.size12,
  },
  timestamp: {
    color: mainContent.tertiary,
  },
  topRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
})
