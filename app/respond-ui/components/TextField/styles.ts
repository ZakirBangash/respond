import { StyleSheet } from "react-native"

import { base, fontWeight, mainContent, systemScale } from "respond-ui/foundations"

export const styles = StyleSheet.create({
  input: {
    alignSelf: "stretch",
    color: mainContent.primary,
    flex: 1,
    fontFamily: fontWeight.normal,
    fontSize: 16,
    height: 24,
    marginHorizontal: systemScale.size12,
    marginVertical: systemScale.size8,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  inputDisabled: {
    color: base[60],
  },
  inputMultiline: {
    height: "auto",
  },
  inputRtl: {
    textAlign: "right",
  },
  inputWrapper: {
    alignItems: "flex-start",
    backgroundColor: base[10],
    borderColor: base[40],
    borderRadius: 4,
    borderWidth: 1,
    overflow: "hidden",
  },
  inputWrapperMultiline: {
    minHeight: 112,
  },
})
