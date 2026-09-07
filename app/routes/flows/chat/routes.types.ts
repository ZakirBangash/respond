import type { ChatScreenParams } from "./screens/chat/ChatScreen.types"
import type { ProfileScreenParams } from "./screens/profile/ProfileScreen.types"

const ROUTE = "Chat"

/** Route names for the Chat flow. */
export const CHAT_ROUTES = {
  ROUTE,
  CHAT: `${ROUTE}Conversation`,
  PROFILE: `${ROUTE}Profile`,
} as const

/** Params each Chat screen expects. */
export type ChatRoutesParamList = {
  [CHAT_ROUTES.CHAT]: ChatScreenParams
  [CHAT_ROUTES.PROFILE]: ProfileScreenParams
}
