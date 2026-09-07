const en = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
  },
  welcomeScreen: {
    postscript:
      "psst  — This probably isn't what your app looks like. (Unless your designer handed you these screens, and in that case, ship it!)",
    readyForLaunch: "Your app, almost ready for launch!",
    exciting: "(ohh, this is exciting!)",
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
  },
  tabNavigator: {
    chatTab: "Chat",
    settingsTab: "Settings",
  },
  chatsScreen: {
    title: "Chats",
    error: "Could not load chats.",
    retry: "Try again",
  },
  chatScreen: {
    messagePlaceholder: "Message",
    send: "Send",
    error: "Could not load this chat.",
    blocked: "Blocked",
    blockedBanner: "You blocked this contact. Unblock them to send messages.",
    blockedPlaceholder: "Messaging disabled",
  },
  profileScreen: {
    title: "Profile",
    name: "Name",
    phone: "Phone number",
    error: "Could not load this profile.",
    block: "Block contact",
  },
  settingsScreen: {
    title: "Settings",
    name: "Name",
    appVersion: "App version",
  },
}

export default en
export type Translations = typeof en
