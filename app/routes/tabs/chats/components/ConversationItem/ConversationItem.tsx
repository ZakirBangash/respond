import { Pressable, View } from "react-native"

import { AvatarPlaceholder } from "@/components/AvatarPlaceholder"
import { FastImage } from "@/components/FastImage"
import { Text } from "respond-ui"

import { styles } from "./ConversationItem.styles"

export type ConversationItemProps = {
  name: string
  lastMessage: string
  timestamp: string
  avatar?: string
  onPress?: () => void
}

export const ConversationItem = ({
  name,
  lastMessage,
  timestamp,
  avatar,
  onPress,
}: ConversationItemProps) => {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}
    >
      {avatar ? (
        <FastImage source={{ uri: avatar }} resizeMode="cover" style={styles.avatar} />
      ) : (
        <AvatarPlaceholder name={name} />
      )}
      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text variant="paragraph-m-bold" numberOfLines={1} style={styles.name}>
            {name}
          </Text>
          <Text variant="caption-s-regular" style={styles.timestamp}>
            {timestamp}
          </Text>
        </View>
        <Text variant="paragraph-s-regular" numberOfLines={1} style={styles.lastMessage}>
          {lastMessage}
        </Text>
      </View>
    </Pressable>
  )
}
