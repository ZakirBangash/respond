import type { ImageStyle, StyleProp } from "react-native"

import { mainContent } from "respond-ui/foundations"

import { iconRegistry } from "./iconRegistry"
import { styles } from "./styles"
import type { IconProps } from "./types"

export function useIcon({
  icon,
  color,
  size,
  style: imageStyleOverride,
}: Pick<IconProps, "icon" | "color" | "size" | "style">) {
  const imageStyle: StyleProp<ImageStyle> = [
    styles.image,
    { tintColor: color ?? mainContent.primary },
    size !== undefined && { width: size, height: size },
    imageStyleOverride,
  ]

  return {
    imageStyle,
    source: iconRegistry[icon],
  }
}
