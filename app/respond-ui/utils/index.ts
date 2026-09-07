import { Dimensions, I18nManager } from "react-native"

export const isRTL = I18nManager.isRTL
export const DEVICE_WIDTH = Dimensions.get("window").width
export const DEVICE_HEIGHT = Dimensions.get("window").height

export const isSmallDevice = DEVICE_WIDTH <= 320

export const ICON_SIZE = {
  large: "24",
  medium: "20",
  small: "16",
}

export { sharedStyles } from "./styles"