import { getFontFamiliesVariants, respondFonts } from "./fontFamily"
import { fontSize } from "./fontSize"
import { lineHeight } from "./lineHeight"
import { isRTL as isI18nRTL } from "../../utils"

export { customFontsToLoad, fontWeight } from "./fontFamily"
export { fontSize } from "./fontSize"
export { lineHeight } from "./lineHeight"

export const respondFont = respondFonts
export const getFontFamiliesVariant = getFontFamiliesVariants
export { getFontFamiliesVariants }

export const getTypography = (isRTL = isI18nRTL) => {
  const fontFamiliesVariants = getFontFamiliesVariants(isRTL)

  return Object.freeze({
    display: {
      1: {
        fontFamily: fontFamiliesVariants.black,
        fontSize: fontSize.display[1],
        lineHeight: lineHeight.display[1],
      },
      2: {
        fontFamily: fontFamiliesVariants.black,
        fontSize: fontSize.display[2],
        lineHeight: lineHeight.display[2],
      },
      3: {
        fontFamily: fontFamiliesVariants.black,
        fontSize: fontSize.display[3],
        lineHeight: lineHeight.display[3],
      },
    },
    heading: {
      h1: {
        fontFamily: fontFamiliesVariants.bold,
        fontSize: fontSize.heading.h1,
        lineHeight: lineHeight.heading.h1,
      },
      h2: {
        fontFamily: fontFamiliesVariants.bold,
        fontSize: fontSize.heading.h2,
        lineHeight: lineHeight.heading.h2,
      },
      h3: {
        fontFamily: fontFamiliesVariants.bold,
        fontSize: fontSize.heading.h3,
        lineHeight: lineHeight.heading.h3,
      },
      h4: {
        fontFamily: fontFamiliesVariants.bold,
        fontSize: fontSize.heading.h4,
        lineHeight: lineHeight.heading.h4,
      },
      h5: {
        fontFamily: fontFamiliesVariants.bold,
        fontSize: fontSize.heading.h5,
        lineHeight: lineHeight.heading.h5,
      },
      h6: {
        fontFamily: fontFamiliesVariants.bold,
        fontSize: fontSize.heading.h6,
        lineHeight: lineHeight.heading.h6,
      },
    },
    paragraph: {
      regular: {
        l: {
          fontFamily: fontFamiliesVariants.regular,
          fontSize: fontSize.paragraph.l,
          lineHeight: lineHeight.paragraph.l,
        },
        m: {
          fontFamily: fontFamiliesVariants.regular,
          fontSize: fontSize.paragraph.m,
          lineHeight: lineHeight.paragraph.m,
        },
        s: {
          fontFamily: fontFamiliesVariants.regular,
          fontSize: fontSize.paragraph.s,
          lineHeight: lineHeight.paragraph.s,
        },
      },
      bold: {
        l: {
          fontFamily: fontFamiliesVariants.bold,
          fontSize: fontSize.paragraph.l,
          lineHeight: lineHeight.paragraph.l,
        },
        m: {
          fontFamily: fontFamiliesVariants.bold,
          fontSize: fontSize.paragraph.m,
          lineHeight: lineHeight.paragraph.m,
        },
        s: {
          fontFamily: fontFamiliesVariants.bold,
          fontSize: fontSize.paragraph.s,
          lineHeight: lineHeight.paragraph.s,
        },
      },
    },
    caption: {
      regular: {
        l: {
          fontFamily: fontFamiliesVariants.regular,
          fontSize: fontSize.caption.l,
          lineHeight: lineHeight.caption.l,
        },
        m: {
          fontFamily: fontFamiliesVariants.regular,
          fontSize: fontSize.caption.m,
          lineHeight: lineHeight.caption.m,
        },
        s: {
          fontFamily: fontFamiliesVariants.regular,
          fontSize: fontSize.caption.s,
          lineHeight: lineHeight.caption.s,
        },
      },
      bold: {
        l: {
          fontFamily: fontFamiliesVariants.bold,
          fontSize: fontSize.caption.l,
          lineHeight: lineHeight.caption.l,
        },
        m: {
          fontFamily: fontFamiliesVariants.bold,
          fontSize: fontSize.caption.m,
          lineHeight: lineHeight.caption.m,
        },
        s: {
          fontFamily: fontFamiliesVariants.bold,
          fontSize: fontSize.caption.s,
          lineHeight: lineHeight.caption.s,
        },
      },
    },
  })
}
