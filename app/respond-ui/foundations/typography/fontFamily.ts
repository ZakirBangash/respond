import {
  SpaceGrotesk_300Light as spaceGroteskLight,
  SpaceGrotesk_400Regular as spaceGroteskRegular,
  SpaceGrotesk_500Medium as spaceGroteskMedium,
  SpaceGrotesk_600SemiBold as spaceGroteskSemiBold,
  SpaceGrotesk_700Bold as spaceGroteskBold,
} from "@expo-google-fonts/space-grotesk"

import { isRTL as isI18nRTL } from "../../utils"

export const customFontsToLoad = {
  spaceGroteskLight,
  spaceGroteskRegular,
  spaceGroteskMedium,
  spaceGroteskSemiBold,
  spaceGroteskBold,
}

export const fontWeight = Object.freeze({
  light: "spaceGroteskLight",
  normal: "spaceGroteskRegular",
  medium: "spaceGroteskMedium",
  semiBold: "spaceGroteskSemiBold",
  bold: "spaceGroteskBold",
})

export const respondFonts = Object.freeze({
  ltr: {
    regular: fontWeight.normal,
    bold: fontWeight.bold,
    black: fontWeight.bold,
  },
  rtl: {
    regular: fontWeight.normal,
    bold: fontWeight.bold,
    black: fontWeight.bold,
  },
})

const ltrFontFamiliesVariants = Object.freeze({
  regular: respondFonts.ltr.regular,
  bold: respondFonts.ltr.bold,
  black: respondFonts.ltr.black,
})

const rtlFontFamiliesVariants = Object.freeze({
  regular: respondFonts.rtl.regular,
  bold: respondFonts.rtl.bold,
  black: respondFonts.rtl.black,
})

export const getFontFamiliesVariants = (isRTL = isI18nRTL) =>
  isRTL ? rtlFontFamiliesVariants : ltrFontFamiliesVariants
