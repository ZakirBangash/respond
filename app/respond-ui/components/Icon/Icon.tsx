import { Pressable, View } from "react-native"

import { FastImage } from "@/components/FastImage"

import type { IconProps, PressableIconProps } from "./types"
import { useIcon } from "./useIcon"

/** Tappable icon (e.g. back button). */
export function PressableIcon(props: PressableIconProps) {
  const {
    icon,
    color,
    size,
    style: imageStyleOverride,
    containerStyle: containerStyleOverride,
    ...pressableProps
  } = props
  const { imageStyle, source } = useIcon({ icon, color, size, style: imageStyleOverride })

  return (
    <Pressable {...pressableProps} style={containerStyleOverride}>
      <FastImage style={imageStyle} source={source} />
    </Pressable>
  )
}

/** Static icon (tabs, message status, error screen). */
export function Icon(props: IconProps) {
  const {
    icon,
    color,
    size,
    style: imageStyleOverride,
    containerStyle: containerStyleOverride,
    ...viewProps
  } = props
  const { imageStyle, source } = useIcon({ icon, color, size, style: imageStyleOverride })

  return (
    <View {...viewProps} style={containerStyleOverride}>
      <FastImage style={imageStyle} source={source} />
    </View>
  )
}
