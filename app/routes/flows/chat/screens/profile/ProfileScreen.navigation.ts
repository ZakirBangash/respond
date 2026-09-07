import type { RouteProp } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"

import { CHAT_ROUTES, type ChatRoutesParamList } from "@/routes/flows/chat"

export type ProfileScreenNavigationProp = NativeStackNavigationProp<
  ChatRoutesParamList,
  typeof CHAT_ROUTES.PROFILE
>
export type ProfileScreenRouteProp = RouteProp<ChatRoutesParamList, typeof CHAT_ROUTES.PROFILE>
