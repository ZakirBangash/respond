import { View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { Text } from "respond-ui"
import { systemScale } from "respond-ui/foundations"

import { BackButton } from "./BackButton"
import { styles } from "./styles"
import type { HeaderProps } from "./types"

/**
 * Navigator top bar: optional back, plus `title` or custom `children`.
 *
 * @example
 * <Header title={translate("chatsScreen:title")} showBack={false} />
 *
 * @example
 * <Header title={translate("profileScreen:title")} />
 *
 * @example
 * <Header>
 *   <ContactRow ... />
 * </Header>
 */
export const Header = ({ title, children, showBack: showBackProp }: HeaderProps) => {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()
  const showBack = showBackProp ?? navigation.canGoBack()

  return (
    <View style={[styles.root, { paddingTop: Math.max(insets.top, systemScale.size8) }]}>
      <View style={styles.container}>
        <View style={styles.side}>{showBack ? <BackButton /> : null}</View>
        <View style={styles.center}>
          {children ??
            (!!title && (
              <Text variant="paragraph-l-regular" numberOfLines={1} style={styles.title}>
                {title}
              </Text>
            ))}
        </View>
        {!children && <View style={styles.side} />}
      </View>
    </View>
  )
}
