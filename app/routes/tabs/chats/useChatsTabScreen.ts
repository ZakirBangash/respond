import { useCallback } from "react"
import { useNavigation } from "@react-navigation/native"

import { CHAT_ROUTES } from "@/routes/flows/chat"
import { type RootStackNavigationProp } from "@/routes/routes.types"
import { useUsers } from "@/services/hooks/useUsers"

import type { ChatsTabScreenNavigationProp } from "./ChatsTabScreen.navigation"

export const useChatsTabScreen = () => {
  const navigation = useNavigation<ChatsTabScreenNavigationProp>()
  const {
    users,
    isPending,
    isError,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    refetch,
  } = useUsers()

  const openConversation = useCallback(
    (conversationId: string) => {
      navigation.getParent<RootStackNavigationProp>()?.navigate(CHAT_ROUTES.ROUTE, {
        screen: CHAT_ROUTES.CHAT,
        params: { conversationId },
      })
    },
    [navigation],
  )

  const onRetry = useCallback(() => {
    refetch()
  }, [refetch])

  const onRefresh = useCallback(() => {
    refetch()
  }, [refetch])

  const onEndReached = useCallback(() => {
    if (hasNextPage && !isFetching) {
      fetchNextPage()
    }
  }, [fetchNextPage, hasNextPage, isFetching])

  return {
    users,
    isPending,
    isError,
    isRefreshing: isFetching && !isFetchingNextPage,
    isFetchingNextPage,
    openConversation,
    onRetry,
    onRefresh,
    onEndReached,
  }
}
