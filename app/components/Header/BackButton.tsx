import { useCallback } from "react"
import { useNavigation } from "@react-navigation/native"

import { isRTL } from "@/i18n"
import { PressableIcon } from "respond-ui"
import { mainContent } from "respond-ui/foundations"

import { styles } from "./styles"

type BackButtonProps = {
  onPress?: () => void
  color?: string
}

export function BackButton({ onPress, color = mainContent.primary }: BackButtonProps) {
  const navigation = useNavigation()

  const handlePress = useCallback(() => {
    if (onPress) {
      onPress()
      return
    }
    navigation.goBack()
  }, [navigation, onPress])

  return (
    <PressableIcon
      icon="back"
      size={24}
      color={color}
      onPress={handlePress}
      style={isRTL ? styles.rtlIcon : undefined}
    />
  )
}
