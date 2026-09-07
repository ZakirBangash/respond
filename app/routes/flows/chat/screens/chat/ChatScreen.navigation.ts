import type { RouteProp } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"

import { CHAT_ROUTES, type ChatRoutesParamList } from "@/routes/flows/chat"

export type ChatScreenNavigationProp = NativeStackNavigationProp<
  ChatRoutesParamList,
  typeof CHAT_ROUTES.CHAT
>
export type ChatScreenRouteProp = RouteProp<ChatRoutesParamList, typeof CHAT_ROUTES.CHAT>
