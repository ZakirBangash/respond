import { cloneElement } from "react"
import { ActivityIndicator, Pressable, View } from "react-native"

import { styles } from "./styles"
import type { ButtonProps } from "./types"
import { useButton } from "./useButton"
import { Text } from "../Text/Text"

const Loader = ({ color }: { color: string }) => (
  <View style={styles.loader}>
    <ActivityIndicator color={color} />
  </View>
)

/**
 * A pressable action button with variants and sizes.
 * @example
 * <Button label="Continue" variant="primary" size="large" onPress={onContinue} />
 * @example
 * <Button label="Save" variant="secondary" size="medium" onPress={onSave} />
 * @example
 * <Button label="Cancel" variant="outline" size="small" onPress={onCancel} />
 * @example
 * <Button label="Delete" variant="danger" size="large" onPress={onDelete} />
 * @example
 * <Button label="Learn more" variant="link" size="medium" onPress={onLearnMore} />
 * @example
 * <Button
 *   label="Next"
 *   variant="primary"
 *   size="large"
 *   rightIcon={<Icon icon="check" />}
 *   onPress={onNext}
 * />
 * @example
 * <Button label="Submitting" variant="primary" size="large" loading />
 * @example
 * <Button label="Unavailable" variant="primary" size="large" disabled />
 */
export const Button = (props: ButtonProps) => {
  const {
    iconColor,
    iconSize,
    isDisabled,
    isRTL,
    label,
    labelStyle,
    labelVariant,
    leftIcon,
    loaderColor,
    loading,
    pressableStyle,
    rest,
    rightIcon,
  } = useButton(props)

  return (
    <Pressable
      style={({ pressed }) => pressableStyle(pressed)}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled: isDisabled }}
      disabled={isDisabled}
      {...rest}
    >
      {loading ? (
        <Loader color={loaderColor} />
      ) : (
        <View style={styles.contentContainer}>
          {leftIcon &&
            cloneElement(leftIcon, { width: iconSize, height: iconSize, color: iconColor })}
          <Text variant={labelVariant} isRTL={isRTL} style={labelStyle}>
            {label}
          </Text>
          {rightIcon &&
            cloneElement(rightIcon, { width: iconSize, height: iconSize, color: iconColor })}
        </View>
      )}
    </Pressable>
  )
}
