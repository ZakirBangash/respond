import { useCallback } from "react"
import { useRoute } from "@react-navigation/native"

import { useUser } from "@/services/hooks/useUsers"
import { useBlockedUsersStore } from "@/stores"

import type { ProfileScreenRouteProp } from "./ProfileScreen.navigation"

export const useProfileScreen = () => {
  const { conversationId } = useRoute<ProfileScreenRouteProp>().params
  const { user, isPending, isError, refetch } = useUser(conversationId)
  const isBlocked = useBlockedUsersStore((state) => state.blockedUsers.includes(conversationId))
  const actions = useBlockedUsersStore((state) => state.actions)

  const name = user?.name ?? ""
  const phone = user?.phone ?? ""

  const onRetry = useCallback(() => {
    refetch()
  }, [refetch])

  const onBlockedChange = useCallback(
    (blocked: boolean) => {
      actions.setBlocked(conversationId, blocked)
    },
    [actions, conversationId],
  )

  return {
    user,
    name,
    phone,
    isPending,
    isError,
    isBlocked,
    onBlockedChange,
    onRetry,
  }
}
