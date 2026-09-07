import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import type { RouteProp } from "@react-navigation/native"

import { TABS_ROUTES, type TabsRoutesParamList } from "@/routes/tabs"

export type ChatsTabScreenNavigationProp = BottomTabNavigationProp<
  TabsRoutesParamList,
  typeof TABS_ROUTES.CHATS
>
export type ChatsTabScreenRouteProp = RouteProp<TabsRoutesParamList, typeof TABS_ROUTES.CHATS>
