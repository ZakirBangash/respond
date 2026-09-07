import { StyleSheet } from "react-native"

import { base, getTypography, systemScale } from "../../foundations"
import { isRTL as I18nRTL } from "../../utils"

export const styles = (isRTL = false) => {
  const typography = getTypography(isRTL || I18nRTL)

  return StyleSheet.create({
    "caption-l-bold": {
      ...typography.caption.bold.l,
      ...((isRTL || I18nRTL) && { lineHeight: systemScale.size24 }),
    },
    "caption-l-regular": {
      ...typography.caption.regular.l,
      ...((isRTL || I18nRTL) && { lineHeight: systemScale.size24 }),
    },
    "caption-m-bold": {
      ...typography.caption.bold.m,
      ...((isRTL || I18nRTL) && { lineHeight: systemScale.size22 }),
    },
    "caption-m-regular": {
      ...typography.caption.regular.m,
      ...((isRTL || I18nRTL) && { lineHeight: systemScale.size22 }),
    },
    "caption-s-bold": {
      ...typography.caption.bold.s,
      ...((isRTL || I18nRTL) && { lineHeight: systemScale.size20 }),
    },
    "caption-s-regular": {
      ...typography.caption.regular.s,
      ...((isRTL || I18nRTL) && { lineHeight: systemScale.size20 }),
    },
    "default": {
      color: base[80],
      textAlign: "left",
    },
    "display-1": {
      ...typography.display[1],
      ...((isRTL || I18nRTL) && { lineHeight: systemScale.size100 }),
    },
    "display-2": {
      ...typography.display[2],
      ...((isRTL || I18nRTL) && { lineHeight: systemScale.size80 }),
    },
    "display-3": {
      ...typography.display[3],
      ...((isRTL || I18nRTL) && { lineHeight: systemScale.size68 }),
    },
    "h1": {
      ...typography.heading.h1,
      ...((isRTL || I18nRTL) && { lineHeight: systemScale.size52 }),
    },
    "h2": {
      ...typography.heading.h2,
      ...((isRTL || I18nRTL) && { lineHeight: systemScale.size40 }),
    },
    "h3": {
      ...typography.heading.h3,
      ...((isRTL || I18nRTL) && { lineHeight: systemScale.size32 }),
    },
    "h4": {
      ...typography.heading.h4,
      ...((isRTL || I18nRTL) && { lineHeight: systemScale.size28 }),
    },
    "h5": {
      ...typography.heading.h5,
      ...((isRTL || I18nRTL) && { lineHeight: systemScale.size24 }),
    },
    "h6": {
      ...typography.heading.h6,
      ...((isRTL || I18nRTL) && { lineHeight: systemScale.size20 }),
    },
    "paragraph-l-bold": {
      ...typography.paragraph.bold.l,
      ...((isRTL || I18nRTL) && { lineHeight: systemScale.size24 }),
    },
    "paragraph-l-regular": {
      ...typography.paragraph.regular.l,
      ...((isRTL || I18nRTL) && { lineHeight: systemScale.size24 }),
    },
    "paragraph-m-bold": {
      ...typography.paragraph.bold.m,
      ...((isRTL || I18nRTL) && { lineHeight: systemScale.size22 }),
    },
    "paragraph-m-regular": {
      ...typography.paragraph.regular.m,
      ...((isRTL || I18nRTL) && { lineHeight: systemScale.size22 }),
    },
    "paragraph-s-bold": {
      ...typography.paragraph.bold.s,
      ...((isRTL || I18nRTL) && { lineHeight: systemScale.size20 }),
    },
    "paragraph-s-regular": {
      ...typography.paragraph.regular.s,
      ...((isRTL || I18nRTL) && { lineHeight: systemScale.size20 }),
    },
  })
}
