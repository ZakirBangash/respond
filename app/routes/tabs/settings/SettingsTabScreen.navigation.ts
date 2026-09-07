import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import type { RouteProp } from "@react-navigation/native"

import { TABS_ROUTES, type TabsRoutesParamList } from "@/routes/tabs"

export type SettingsTabScreenNavigationProp = BottomTabNavigationProp<
  TabsRoutesParamList,
  typeof TABS_ROUTES.SETTINGS
>
export type SettingsTabScreenRouteProp = RouteProp<TabsRoutesParamList, typeof TABS_ROUTES.SETTINGS>
