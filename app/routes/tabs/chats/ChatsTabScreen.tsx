import { useCallback } from "react"
import { ActivityIndicator, View } from "react-native"
import { FlashList, type ListRenderItemInfo } from "@shopify/flash-list"

import { Screen } from "@/components/Screen"
import { translate } from "@/i18n/translate"
import type { User } from "@/services/api/users"
import { sharedStyles } from "@/utils/styles"
import { Button, Text } from "respond-ui"

import { styles } from "./ChatsTabScreen.styles"
import { ConversationItem } from "./components/ConversationItem"
import { useChatsTabScreen } from "./useChatsTabScreen"

export const ChatsTabScreen = () => {
  const {
    users,
    isPending,
    isError,
    isRefreshing,
    isFetchingNextPage,
    openConversation,
    onRetry,
    onRefresh,
    onEndReached,
  } = useChatsTabScreen()

  const renderConversation = useCallback(
    ({ item }: ListRenderItemInfo<User>) => (
      <ConversationItem
        name={item.name}
        lastMessage={item.email}
        timestamp={item.address.city}
        avatar={item.avatar}
        onPress={() => openConversation(String(item.id))}
      />
    ),
    [openConversation],
  )

  const renderLoading = () => (
    <View style={styles.centered}>
      <ActivityIndicator />
    </View>
  )

  const renderError = () => (
    <View style={styles.centered}>
      <Text variant="paragraph-s-regular" style={styles.error}>
        {translate("chatsScreen:error")}
      </Text>
      <Button
        label={translate("chatsScreen:retry")}
        variant="primary"
        size="small"
        onPress={onRetry}
      />
    </View>
  )

  const renderList = () => (
    <FlashList
      data={users}
      keyExtractor={(item) => String(item.id)}
      style={styles.list}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.4}
      ListFooterComponent={
        isFetchingNextPage ? (
          <View style={styles.footer}>
            <ActivityIndicator />
          </View>
        ) : null
      }
      renderItem={renderConversation}
    />
  )

  const renderContent = () => {
    if (isPending) return renderLoading()
    if (isError) return renderError()
    return renderList()
  }

  return (
    <Screen preset="fixed" contentContainerStyle={sharedStyles.flex1}>
      {renderContent()}
    </Screen>
  )
}
