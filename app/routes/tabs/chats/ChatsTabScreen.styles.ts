import { StyleSheet } from "react-native"

import { background, mainContent, systemScale } from "respond-ui/foundations"

export const styles = StyleSheet.create({
  centered: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: systemScale.size16,
  },
  error: {
    color: mainContent.secondary,
    marginBottom: systemScale.size12,
    textAlign: "center",
  },
  footer: {
    paddingVertical: systemScale.size16,
  },
  list: {
    backgroundColor: background.white,
    flex: 1,
  },
})
