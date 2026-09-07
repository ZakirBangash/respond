import { Pressable, StyleSheet, View } from "react-native"

import { AvatarPlaceholder } from "@/components/AvatarPlaceholder"
import { FastImage } from "@/components/FastImage"
import { translate } from "@/i18n/translate"
import type { User } from "@/services/api/users"
import { Text } from "respond-ui"
import { mainContent, radius, systemScale } from "respond-ui/foundations"

type ChatContactHeaderProps = {
  user: User | undefined
  contactName: string
  isBlocked: boolean
  onPress: () => void
}

export const ChatContactHeader = ({
  user,
  contactName,
  isBlocked,
  onPress,
}: ChatContactHeaderProps) => (
  <Pressable accessibilityRole="button" disabled={!user} onPress={onPress} style={styles.contact}>
    {user?.avatar ? (
      <FastImage source={{ uri: user.avatar }} resizeMode="cover" style={styles.avatar} />
    ) : (
      <AvatarPlaceholder name={contactName} size="small" />
    )}
    <View style={styles.contactInfo}>
      <Text variant="paragraph-m-bold" numberOfLines={1} style={styles.contactName}>
        {contactName}
      </Text>
      {isBlocked && (
        <Text variant="caption-s-regular" style={styles.blockedLabel}>
          {translate("chatScreen:blocked")}
        </Text>
      )}
    </View>
  </Pressable>
)

const styles = StyleSheet.create({
  avatar: {
    borderRadius: radius.full,
    height: systemScale.size36,
    width: systemScale.size36,
  },
  blockedLabel: {
    color: mainContent.secondary,
  },
  contact: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    minHeight: systemScale.size40,
  },
  contactInfo: {
    flex: 1,
    marginStart: systemScale.size8,
  },
  contactName: {
    color: mainContent.primary,
  },
})
