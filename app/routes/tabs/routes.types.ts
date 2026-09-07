const ROUTE = "Tabs"

/** Route names for the bottom tabs. */
export const TABS_ROUTES = {
  ROUTE,
  CHATS: `${ROUTE}ChatsTab`,
  SETTINGS: `${ROUTE}SettingsTab`,
} as const

/** Params each tab expects (`undefined` = no params). */
export type TabsRoutesParamList = {
  [TABS_ROUTES.CHATS]: undefined
  [TABS_ROUTES.SETTINGS]: undefined
}
