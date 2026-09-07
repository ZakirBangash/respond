import type { StyleProp } from "react-native"
import LibraryFastImage, { type ImageStyle as FastImageStyle } from "@d11/react-native-fast-image"

import type { FastImageProps } from "./types"
import { useFastImage } from "./useFastImage"

/**
 *
 * @example
 * import { FastImage } from "@/components/FastImage"
 *
 * <FastImage
 *   source={require("@assets/images/logo.png")}
 *   resizeMode="contain"
 *   style={{ width: 200, height: 88 }}
 * />
 *
 * @example
 * <FastImage
 *   source={{ uri: photoUrl }}
 *   fallbackSource={require("@assets/images/sad-face.png")}
 *   resizeMode="cover"
 *   style={{ width: 120, height: 120 }}
 * />
 */
export const FastImage = (props: FastImageProps) => {
  const { source, fallbackSource, isRTL, style, onError, ...rest } = props
  const { imageSource, imageStyle, onImageError } = useFastImage({
    source,
    fallbackSource,
    isRTL,
    style,
  })

  return (
    <LibraryFastImage
      source={imageSource}
      style={imageStyle as StyleProp<FastImageStyle>}
      onError={(event) => {
        onImageError()
        onError?.(event)
      }}
      {...rest}
    />
  )
}
