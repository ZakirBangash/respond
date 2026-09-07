import { Pressable, StyleSheet, View } from "react-native"
import Animated from "react-native-reanimated"

import { accent, base, systemScale } from "respond-ui/foundations"

import type { SwitchProps } from "./types"
import {
  KNOB_PADDING,
  KNOB_SIZE,
  TRACK_HEIGHT,
  TRACK_WIDTH,
  useSwitch,
} from "./hooks/useSwitch"
import { Text } from "../Text/Text"

export function Switch({
  value = false,
  onValueChange,
  label,
  labelTx,
  labelTxOptions,
  labelPosition = "right",
  labelStyle,
  containerStyle,
}: SwitchProps) {
  const { labelContent, knobStyle, onPress } = useSwitch({
    value,
    label,
    labelTx,
    labelTxOptions,
    onValueChange,
  })

  const labelNode = labelContent ? (
    <Text
      variant="paragraph-m-regular"
      style={[
        styles.label,
        labelPosition === "left" ? styles.labelLeft : styles.labelRight,
        labelStyle,
      ]}
    >
      {labelContent}
    </Text>
  ) : null

  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityState={{ checked: value }}
      style={containerStyle}
      onPress={onPress}
    >
      <View style={styles.row}>
        {labelPosition === "left" && labelNode}
        <View style={[styles.track, { backgroundColor: value ? accent.purple.main : base[30] }]}>
          <Animated.View style={[styles.knob, knobStyle]} />
        </View>
        {labelPosition === "right" && labelNode}
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  knob: {
    backgroundColor: base[0],
    borderRadius: KNOB_SIZE / 2,
    height: KNOB_SIZE,
    marginStart: KNOB_PADDING,
    width: KNOB_SIZE,
  },
  label: {
    flex: 1,
  },
  labelLeft: {
    marginEnd: systemScale.size16,
  },
  labelRight: {
    marginStart: systemScale.size16,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  track: {
    borderRadius: TRACK_HEIGHT / 2,
    height: TRACK_HEIGHT,
    justifyContent: "center",
    width: TRACK_WIDTH,
  },
})
