import { useCallback } from "react"
import { ActivityIndicator, View } from "react-native"
import { FlashList, type ListRenderItemInfo } from "@shopify/flash-list"

import { useHeaderHeight } from "@/components/Header"
import { Screen } from "@/components/Screen"
import { translate } from "@/i18n/translate"
import { sharedStyles } from "@/utils/styles"
import { Button, Text } from "respond-ui"

import type { ChatMessage } from "./chat.types"
import { styles } from "./ChatScreen.styles"
import { DaySeparator } from "./components/DaySeparator"
import { MessageBubble } from "./components/MessageBubble"
import { MessageComposer } from "./components/MessageComposer"
import { useChatScreen, type UseChatScreenResult } from "./hooks"
import { getMessageLayout } from "./utils"

export const ChatScreen = () => {
  const headerHeight = useHeaderHeight()
  const { isPending, isError, isBlocked, messages, onSend, onRetry }: UseChatScreenResult =
    useChatScreen()

  const renderMessage = useCallback(
    ({ item, index }: ListRenderItemInfo<ChatMessage>) => {
      const { isNewDay, isGroupStart } = getMessageLayout(item, messages[index - 1])

      return (
        <View style={isGroupStart ? styles.groupGap : styles.messageGap}>
          {isNewDay && <DaySeparator date={item.createdAt} />}
          <MessageBubble message={item} isGroupStart={isGroupStart} />
        </View>
      )
    },
    [messages],
  )

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
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        initialScrollIndex={messages.length > 0 ? messages.length - 1 : undefined}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="interactive"
        maintainVisibleContentPosition={{
          autoscrollToBottomThreshold: 0.2,
        }}
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
