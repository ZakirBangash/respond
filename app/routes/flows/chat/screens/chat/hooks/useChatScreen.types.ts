import type { ChatMessage } from "../chat.types"

export type UseChatScreenResult = {
  isPending: boolean
  isError: boolean
  isBlocked: boolean
  messages: ChatMessage[]
  onSend: (text: string) => void
  onRetry: () => void
}
