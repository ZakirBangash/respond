import { useEffect, useRef } from "react"
import { BackHandler, Platform } from "react-native"
import {
  NavigationState,
  PartialState,
  createNavigationContainerRef,
} from "@react-navigation/native"

import type { RootStackParamList } from "./routes.types"

/**
 * Pointer to the app's navigator. Use when you are **not** inside a screen.
 * Inside a screen, use `useNavigation()` instead.
 *
 * @example
 * navigationRef.navigate("Chat")
 */
export const navigationRef = createNavigationContainerRef<RootStackParamList>()

/**
 * Name of the screen the user is looking at right now (walks into nested tabs/stacks).
 *
 * @example
 * getActiveRouteName(navigationRef.getRootState())
 * // "TabsChatsTab"  (not "Tabs")
 */
export function getActiveRouteName(state: NavigationState | PartialState<NavigationState>): string {
  const route = state.routes[state.index ?? 0]

  if (!route.state) return route.name as keyof RootStackParamList

  return getActiveRouteName(route.state as NavigationState<RootStackParamList>)
}

const iosExit = () => false

/**
 * Android back button. iOS: no-op.
 *
 * Back on an "exit" screen → close the app.
 * Back anywhere else → go to the previous screen.
 *
 * @example
 * useBackButtonHandler((screen) => screen === "TabsChatsTab")
 *
 * // Chats tab + back     → app closes
 * // Chat screen + back   → previous screen
 */
export function useBackButtonHandler(canExit: (routeName: string) => boolean) {
  const canExitRef = useRef(Platform.OS !== "android" ? iosExit : canExit)

  useEffect(() => {
    canExitRef.current = canExit
  }, [canExit])

  useEffect(() => {
    const onBackPress = () => {
      if (!navigationRef.isReady()) {
        return false
      }

      const routeName = getActiveRouteName(
        navigationRef.getRootState() as NavigationState<RootStackParamList>,
      )

      if (canExitRef.current(routeName)) {
        BackHandler.exitApp()
        return true
      }

      if (navigationRef.canGoBack()) {
        navigationRef.goBack()
        return true
      }

      return false
    }

    const subscription = BackHandler.addEventListener("hardwareBackPress", onBackPress)

    return () => subscription.remove()
  }, [])
}

/**
 * Open a screen from outside React (e.g. a notification). Prefer `useNavigation` in screens.
 *
 * @example
 * navigate("Chat", { screen: "ChatConversation", params: { conversationId: "42" } })
 */
export function navigate(name: unknown, params?: unknown) {
  if (navigationRef.isReady()) {
    // @ts-expect-error
    navigationRef.navigate(name as never, params as never)
  }
}

/**
 * Go to the previous screen. Does nothing if there is nowhere to go.
 *
 * @example
 * goBack()
 */
export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack()
  }
}

/**
 * Wipe the stack and start from one screen. For logout / reset, not normal back.
 *
 * @example
 * resetRoot({ index: 0, routes: [{ name: "Tabs" }] })
 */
export function resetRoot(
  state: Parameters<typeof navigationRef.resetRoot>[0] = { index: 0, routes: [] },
) {
  if (navigationRef.isReady()) {
    navigationRef.resetRoot(state)
  }
}
