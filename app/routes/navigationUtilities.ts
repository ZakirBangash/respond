import { useEffect, useRef } from "react"
import { BackHandler, Platform } from "react-native"
import {
  NavigationState,
  PartialState,
  createNavigationContainerRef,
} from "@react-navigation/native"

import type { RootStackParamList } from "./routes.types"

/**
 * Reference to the root App Navigator.
 *
 * If needed, you can use this to access the navigation object outside of a
 * `NavigationContainer` context. However, it's recommended to use the `useNavigation` hook whenever possible.
 * @see [Navigating Without Navigation Prop]{@link https://reactnavigation.org/docs/navigating-without-navigation-prop/}
 */
export const navigationRef = createNavigationContainerRef<RootStackParamList>()

/**
 * Gets the current screen from any navigation state.
 * @param {NavigationState | PartialState<NavigationState>} state - The navigation state to traverse.
 * @returns {string} - The name of the current screen.
 */
export function getActiveRouteName(state: NavigationState | PartialState<NavigationState>): string {
  const route = state.routes[state.index ?? 0]

  if (!route.state) return route.name as keyof RootStackParamList

  return getActiveRouteName(route.state as NavigationState<RootStackParamList>)
}

const iosExit = () => false

/**
 * Hook that handles Android back button presses and forwards those on to
 * the navigation or allows exiting the app.
 * @see [BackHandler]{@link https://reactnative.dev/docs/backhandler}
 * @param {(routeName: string) => boolean} canExit - Function that returns whether we can exit the app.
 * @returns {void}
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
 * use this to navigate without the navigation
 * prop. If you have access to the navigation prop, do not use this.
 * @see {@link https://reactnavigation.org/docs/navigating-without-navigation-prop/}
 * @param {unknown} name - The name of the route to navigate to.
 * @param {unknown} params - The params to pass to the route.
 */
export function navigate(name: unknown, params?: unknown) {
  if (navigationRef.isReady()) {
    // @ts-expect-error
    navigationRef.navigate(name as never, params as never)
  }
}

/**
 * This function is used to go back in a navigation stack, if it's possible to go back.
 * If the navigation stack can't go back, nothing happens.
 */
export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack()
  }
}

/**
 * resetRoot will reset the root navigation state to the given params.
 * @param {Parameters<typeof navigationRef.resetRoot>[0]} state - The state to reset the root to.
 * @returns {void}
 */
export function resetRoot(
  state: Parameters<typeof navigationRef.resetRoot>[0] = { index: 0, routes: [] },
) {
  if (navigationRef.isReady()) {
    navigationRef.resetRoot(state)
  }
}
