import { useCallback } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"

import { CHAT_ROUTES } from "@/routes/flows/chat"
import { useCreatePost, usePosts } from "@/services/hooks/usePosts"
import { useUser } from "@/services/hooks/useUsers"
import { useBlockedUsersStore } from "@/stores"
import { useHeader } from "@/utils/useHeader"

import type { ChatScreenNavigationProp, ChatScreenRouteProp } from "../ChatScreen.navigation"
import { ChatContactHeader } from "../components/ChatContactHeader"
import type { UseChatScreenResult } from "./useChatScreen.types"

export type { UseChatScreenResult } from "./useChatScreen.types"

export const useChatScreen = (): UseChatScreenResult => {
  const navigation = useNavigation<ChatScreenNavigationProp>()
  const { conversationId } = useRoute<ChatScreenRouteProp>().params
  const {
    user,
    isPending: isUserPending,
    isError: isUserError,
    refetch: refetchUser,
  } = useUser(conversationId)
  const {
    messages,
    isPending: isPostsPending,
    isError: isPostsError,
    refetch: refetchPosts,
  } = usePosts(conversationId)
  const createPost = useCreatePost(conversationId)
  const isBlocked = useBlockedUsersStore((state) => state.blockedUsers.includes(conversationId))

  const contactName = user?.name ?? ""
  const isPending = isUserPending || isPostsPending
  const isError = isUserError || isPostsError

  const onSend = useCallback(
    (text: string) => {
      if (isBlocked) return
      createPost.mutate(text)
    },
    [createPost, isBlocked],
  )

  const onRetry = useCallback(() => {
    refetchUser()
    refetchPosts()
  }, [refetchUser, refetchPosts])

  const onOpenProfile = useCallback(() => {
    navigation.navigate(CHAT_ROUTES.PROFILE, { conversationId })
  }, [navigation, conversationId])

  useHeader(
    {
      children: (
        <ChatContactHeader
          user={user}
          contactName={contactName}
          isBlocked={isBlocked}
          onPress={onOpenProfile}
        />
      ),
    },
    [user, contactName, isBlocked, onOpenProfile],
  )

  return {
    isPending,
    isError,
    isBlocked,
    messages,
    onSend,
    onRetry,
  }
}
