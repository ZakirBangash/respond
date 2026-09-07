import { StyleSheet } from "react-native"

import { fill, mainContent, systemScale } from "respond-ui/foundations"

export const styles = StyleSheet.create({
  blockedBanner: {
    backgroundColor: fill.elevated,
    paddingHorizontal: systemScale.size16,
    paddingVertical: systemScale.size10,
  },
  blockedBannerText: {
    color: mainContent.secondary,
    textAlign: "center",
  },
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
  groupGap: {
    marginTop: systemScale.size12,
  },
  listContent: {
    paddingHorizontal: systemScale.size16,
    paddingVertical: systemScale.size12,
  },
  messageGap: {
    marginTop: systemScale.size4,
  },
})
