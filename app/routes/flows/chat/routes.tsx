import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Header } from "@/components/Header"
import { translate } from "@/i18n/translate"
import type { ROUTES } from "@/routes/routes.types"
import { background } from "respond-ui/foundations"

import { CHAT_ROUTES, ChatRoutesParamList } from "./routes.types"
import { ChatScreen, ProfileScreen } from "./screens"

const ChatStack = createNativeStackNavigator<
  ChatRoutesParamList,
  typeof CHAT_ROUTES.ROUTE | typeof ROUTES.ROUTE
>()

export function ChatFlow() {
  return (
    <ChatStack.Navigator
      id={CHAT_ROUTES.ROUTE}
      initialRouteName={CHAT_ROUTES.CHAT}
      screenOptions={{
        headerShown: false,
        navigationBarColor: background.white,
        contentStyle: {
          backgroundColor: background.white,
        },
      }}
    >
      <ChatStack.Screen
        name={CHAT_ROUTES.CHAT}
        component={ChatScreen}
        options={{ headerShown: true }}
      />
      <ChatStack.Screen
        name={CHAT_ROUTES.PROFILE}
        component={ProfileScreen}
        options={{
          headerShown: true,
          header: () => <Header title={translate("profileScreen:title")} />,
        }}
      />
    </ChatStack.Navigator>
  )
}
