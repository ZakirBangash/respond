import { useEffect } from "react"
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated"

import { translate } from "@/i18n/translate"

import type { SwitchProps } from "../types"

export const TRACK_WIDTH = 56
export const TRACK_HEIGHT = 32
export const KNOB_SIZE = 24
export const KNOB_PADDING = 4
export const KNOB_TRAVEL = TRACK_WIDTH - KNOB_SIZE - KNOB_PADDING * 2

const ANIMATION_DURATION = 200

type UseSwitchParams = Pick<
  SwitchProps,
  "value" | "label" | "labelTx" | "labelTxOptions" | "onValueChange"
>

export function useSwitch({
  value = false,
  label,
  labelTx,
  labelTxOptions,
  onValueChange,
}: UseSwitchParams) {
  const progress = useSharedValue(value ? 1 : 0)

  useEffect(() => {
    progress.value = withTiming(value ? 1 : 0, { duration: ANIMATION_DURATION })
  }, [progress, value])

  const knobStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: interpolate(progress.value, [0, 1], [0, KNOB_TRAVEL]) }],
  }))

  const labelContent = labelTx ? translate(labelTx, labelTxOptions) : label

  const onPress = () => {
    onValueChange?.(!value)
  }

  return {
    value,
    labelContent,
    knobStyle,
    onPress,
  }
}
