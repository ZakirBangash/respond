import { useMemo } from "react"
import { ActivityIndicator, View } from "react-native"
import { FlashList, type ListRenderItemInfo } from "@shopify/flash-list"

import { useHeaderHeight } from "@/components/Header"
import { Screen } from "@/components/Screen"
import { translate } from "@/i18n/translate"
import { sharedStyles } from "@/utils/styles"
import { Button, Text } from "respond-ui"

import { styles } from "./ChatScreen.styles"
import { DaySeparator } from "./components/DaySeparator"
import { MessageBubble } from "./components/MessageBubble"
import { MessageComposer } from "./components/MessageComposer"
import { useChatScreen, type UseChatScreenResult } from "./hooks"
import { getChatItemType, getChatListItems, type ChatListItem } from "./utils"

const keyExtractor = (item: ChatListItem) => item.id

const maintainVisibleContentPosition = {
  autoscrollToBottomThreshold: 0.2,
  startRenderingFromBottom: false,
}

const renderMessage = ({ item }: ListRenderItemInfo<ChatListItem>) => (
  <View style={item.isGroupStart ? styles.groupGap : styles.messageGap}>
    {item.isNewDay && <DaySeparator date={item.createdAt} />}
    <MessageBubble message={item} isGroupStart={item.isGroupStart} />
  </View>
)

export const ChatScreen = () => {
  const headerHeight = useHeaderHeight()
  const { isPending, isError, isBlocked, messages, onSend, onRetry }: UseChatScreenResult =
    useChatScreen()
  const listItems = useMemo(() => getChatListItems(messages), [messages])

  const renderLoading = () => (
    <View style={styles.centered}>
      <ActivityIndicator />
    </View>
  )

  const renderError = () => (
    <View style={styles.centered}>
      <Text variant="paragraph-s-regular" style={styles.error}>
        {translate("chatScreen:error")}
      </Text>
      <Button
        label={translate("chatsScreen:retry")}
        variant="primary"
        size="small"
        onPress={onRetry}
      />
    </View>
  )

  const renderBlockedBanner = () => (
    <View style={styles.blockedBanner}>
      <Text variant="caption-m-regular" style={styles.blockedBannerText}>
        {translate("chatScreen:blockedBanner")}
      </Text>
    </View>
  )

  const renderMessages = () => (
    <>
      <FlashList
        data={listItems}
        renderItem={renderMessage}
        initialScrollIndex={listItems.length > 0 ? listItems.length - 1 : undefined}
        keyExtractor={keyExtractor}
        getItemType={getChatItemType}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="interactive"
        maintainVisibleContentPosition={maintainVisibleContentPosition}
      />
      {isBlocked && renderBlockedBanner()}
      <MessageComposer onSend={onSend} disabled={isBlocked} />
    </>
  )

  const renderContent = () => {
    if (isPending) return renderLoading()
    if (isError) return renderError()
    return renderMessages()
  }

  return (
    <Screen
      preset="fixed"
      safeAreaEdges={["bottom"]}
      keyboardOffset={headerHeight}
      contentContainerStyle={sharedStyles.flex1}
    >
      {renderContent()}
    </Screen>
  )
}
