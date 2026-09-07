import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Header } from "@/components/Header"
import { translate } from "@/i18n/translate"
import type { ROUTES } from "@/routes/routes.types"
import { Icon } from "respond-ui"
import { background, border, fill, mainContent } from "respond-ui/foundations"

import { ChatsTabScreen } from "./chats"
import { TABS_ROUTES, TabsRoutesParamList } from "./routes.types"
import { SettingsTabScreen } from "./settings"

const Tab = createBottomTabNavigator<
  TabsRoutesParamList,
  typeof TABS_ROUTES.ROUTE | typeof ROUTES.ROUTE
>()

export function TabsNavigator() {
  return (
    <Tab.Navigator
      id={TABS_ROUTES.ROUTE}
      initialRouteName={TABS_ROUTES.CHATS}
      screenOptions={{
        headerShown: true,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: fill.brandRegular,
        tabBarInactiveTintColor: mainContent.tertiary,
        tabBarStyle: {
          backgroundColor: background.white,
          borderTopColor: border.default,
        },
      }}
    >
      <Tab.Screen
        name={TABS_ROUTES.CHATS}
        component={ChatsTabScreen}
        options={{
          title: translate("tabNavigator:chatTab"),
          header: () => <Header title={translate("chatsScreen:title")} showBack={false} />,
          tabBarIcon: ({ color, size }) => <Icon icon="menu" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name={TABS_ROUTES.SETTINGS}
        component={SettingsTabScreen}
        options={{
          title: translate("tabNavigator:settingsTab"),
          header: () => <Header title={translate("settingsScreen:title")} showBack={false} />,
          tabBarIcon: ({ color, size }) => <Icon icon="settings" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  )
}

export const TabsRoutes = TabsNavigator
