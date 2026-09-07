import * as Linking from "expo-linking"
import { LinkingOptions } from "@react-navigation/native"

import { CHAT_ROUTES } from "./flows/chat/routes.types"
import type { RootStackParamList } from "./routes.types"
import { TABS_ROUTES } from "./tabs/routes.types"

const prefix = Linking.createURL("/")

const Tabs = {
  [TABS_ROUTES.ROUTE]: {
    screens: {
      [TABS_ROUTES.CHATS]: "",
      [TABS_ROUTES.SETTINGS]: "settings",
    },
  },
}

const Chat = {
  [CHAT_ROUTES.ROUTE]: {
    screens: {
      [CHAT_ROUTES.CHAT]: "chat/:conversationId",
      [CHAT_ROUTES.PROFILE]: "profile/:conversationId",
    },
  },
}

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [prefix],
  config: {
    screens: {
      ...Tabs,
      ...Chat,
    },
  },
}
