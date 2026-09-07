import type { ImageStyle, StyleProp } from "react-native"
import type { FastImageProps as LibraryFastImageProps, Source } from "@d11/react-native-fast-image"

export type FastImageSource = number | Source

export type FastImageProps = Omit<LibraryFastImageProps, "source" | "style"> & {
  source: FastImageSource
  fallbackSource?: FastImageSource
  style?: StyleProp<ImageStyle>
  isRTL?: boolean
}

export type UseFastImageParams = {
  source: FastImageSource
  fallbackSource?: FastImageSource
  isRTL?: boolean
  style?: StyleProp<ImageStyle>
}
