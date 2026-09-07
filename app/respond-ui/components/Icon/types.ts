import type {
  ImageStyle,
  PressableProps,
  StyleProp,
  ViewProps,
  ViewStyle,
} from "react-native"

import type { IconTypes } from "./iconRegistry"

export type { IconTypes }

type BaseIconProps = {
  icon: IconTypes
  color?: string
  size?: number
  style?: StyleProp<ImageStyle>
  containerStyle?: StyleProp<ViewStyle>
}

export type IconProps = Omit<ViewProps, "style"> & BaseIconProps
export type PressableIconProps = Omit<PressableProps, "style"> & BaseIconProps
