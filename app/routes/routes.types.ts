import { NavigatorScreenParams } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"

import { CHAT_ROUTES, type ChatRoutesParamList } from "./flows/chat/routes.types"
import { TABS_ROUTES, type TabsRoutesParamList } from "./tabs/routes.types"

const ROUTE = "Root"

export const ROUTES = {
  ROUTE,
  [TABS_ROUTES.ROUTE]: TABS_ROUTES,
  [CHAT_ROUTES.ROUTE]: CHAT_ROUTES,
} as const

export type RootStackParamList = {
  [TABS_ROUTES.ROUTE]: NavigatorScreenParams<TabsRoutesParamList>
  [CHAT_ROUTES.ROUTE]: NavigatorScreenParams<ChatRoutesParamList>
}

/** Use when climbing to the root stack, e.g. `getParent<RootStackNavigationProp>()`. */
export type RootStackNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>
