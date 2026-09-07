import type { ChatMessage } from "../chat.types"
import { getMessageLayout } from "./getMessageLayout"

export type ChatListItem = ChatMessage & {
  isNewDay: boolean
  isGroupStart: boolean
}

export const getChatListItems = (messages: ChatMessage[]): ChatListItem[] =>
  messages.map((message, index) => ({
    ...message,
    ...getMessageLayout(message, messages[index - 1]),
  }))

export const getChatItemType = (item: ChatListItem) =>
  item.isNewDay ? "day-message" : "message"