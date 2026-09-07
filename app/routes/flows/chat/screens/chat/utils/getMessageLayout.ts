import { isSameDay } from "date-fns/isSameDay"
import { parseISO } from "date-fns/parseISO"

import type { ChatMessage } from "../chat.types"

type MessageLayout = {
  isNewDay: boolean
  isGroupStart: boolean
}

// Decides whether this bubble needs a date pill and whether it starts a new
// visual group (more spacing + tail corner), like WhatsApp.
export const getMessageLayout = (message: ChatMessage, previous?: ChatMessage): MessageLayout => {
  if (!previous) {
    return { isNewDay: true, isGroupStart: true }
  }

  const isNewDay = !isSameDay(parseISO(previous.createdAt), parseISO(message.createdAt))
  const senderChanged = previous.isMine !== message.isMine

  return {
    isNewDay,
    isGroupStart: isNewDay || senderChanged,
  }
}
