import { background } from "respond-ui/foundations"

const systemui = require("expo-system-ui")

/**
 * Set the system UI background color to the given color. This is only available if the app has
 * installed expo-system-ui.
 *
 * @param color The color to set the system UI background to
 */
export const setSystemUIBackgroundColor = (color: string) => {
  if (systemui) {
    systemui.setBackgroundColorAsync(color)
  }
}

/**
 * Set the app's native background color to match respond-ui tokens.
 * This is only available if the app has installed expo-system-ui
 */
export const setImperativeTheming = () => {
  setSystemUIBackgroundColor(background.white)
}
