import { ActivityIndicator, View } from "react-native"

import { AvatarPlaceholder } from "@/components/AvatarPlaceholder"
import { FastImage } from "@/components/FastImage"
import { Screen } from "@/components/Screen"
import { translate } from "@/i18n/translate"
import { Button, Switch, Text } from "respond-ui"

import { styles } from "./ProfileScreen.styles"
import { useProfileScreen } from "./useProfileScreen"

export const ProfileScreen = () => {
  const { user, name, phone, isPending, isError, isBlocked, onBlockedChange, onRetry } =
    useProfileScreen()

  const renderLoading = () => (
    <View style={styles.centered}>
      <ActivityIndicator />
    </View>
  )

  const renderError = () => (
    <View style={styles.centered}>
      <Text variant="paragraph-s-regular" style={styles.error}>
        {translate("profileScreen:error")}
      </Text>
      <Button
        label={translate("chatsScreen:retry")}
        variant="primary"
        size="small"
        onPress={onRetry}
      />
    </View>
  )

  const renderProfile = () => (
    <View style={styles.content}>
      {user?.avatar ? (
        <FastImage source={{ uri: user.avatar }} resizeMode="cover" style={styles.avatar} />
      ) : (
        <AvatarPlaceholder name={name} size="large" />
      )}
      <View style={styles.details}>
        <Text variant="caption-m-regular" style={styles.label}>
          {translate("profileScreen:name")}
        </Text>
        <Text variant="paragraph-l-bold" style={styles.value}>
          {name}
        </Text>
        <Text variant="caption-m-regular" style={styles.label}>
          {translate("profileScreen:phone")}
        </Text>
        <Text variant="paragraph-m-regular" style={styles.value}>
          {phone}
        </Text>
        <Switch
          labelTx="profileScreen:block"
          labelPosition="left"
          value={isBlocked}
          onValueChange={onBlockedChange}
          containerStyle={styles.blockToggle}
        />
      </View>
    </View>
  )

  const renderContent = () => {
    if (isPending) return renderLoading()
    if (isError) return renderError()
    return renderProfile()
  }

  return <Screen preset="scroll">{renderContent()}</Screen>
}
