import { StyleSheet } from "react-native"

import { mainContent, radius, systemScale } from "respond-ui/foundations"

export const styles = StyleSheet.create({
  avatar: {
    borderRadius: radius.full,
    height: systemScale.size80,
    width: systemScale.size80,
  },
  blockToggle: {
    marginTop: systemScale.size24,
  },
  centered: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: systemScale.size16,
    paddingVertical: systemScale.size32,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: systemScale.size24,
    paddingVertical: systemScale.size32,
  },
  details: {
    alignSelf: "stretch",
    marginTop: systemScale.size24,
  },
  error: {
    color: mainContent.secondary,
    marginBottom: systemScale.size12,
    textAlign: "center",
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
