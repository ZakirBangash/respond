import { StyleSheet } from "react-native"

import { background, systemScale } from "respond-ui/foundations"

export const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    minHeight: systemScale.size40,
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    minHeight: systemScale.size40,
    paddingHorizontal: systemScale.size8,
  },
  root: {
    backgroundColor: background.white,
    paddingBottom: systemScale.size8,
    width: "100%",
  },
  rtlIcon: {
    transform: [{ rotate: "180deg" }],
  },
  side: {
    alignItems: "center",
    height: systemScale.size40,
    justifyContent: "center",
    width: systemScale.size40,
  },
  title: {
    textAlign: "center",
  },
})
