import { useState } from "react"

import { styles } from "./styles"
import type { UseFastImageParams } from "./types"

export const useFastImage = (params: UseFastImageParams) => {
  const { source, fallbackSource, isRTL, style } = params
  const [hasError, setHasError] = useState(false)

  return {
    imageSource: hasError && fallbackSource ? fallbackSource : source,
    imageStyle: [styles.image, isRTL && styles.rtl, style],
    onImageError: () => {
      if (fallbackSource) setHasError(true)
    },
  }
}
