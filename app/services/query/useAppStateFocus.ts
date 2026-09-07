import { useEffect } from "react"
import { AppState } from "react-native"
import type { AppStateStatus } from "react-native"
import { focusManager } from "@tanstack/react-query"

function onAppStateChange(status: AppStateStatus) {
  focusManager.setFocused(status === "active")
}

/**
 * Why this exists:
 * React Query does not know when this app returns to the foreground.
 * Without this hook, stale screens stay stale after the user leaves and comes back.
 *
 * Responsibility: tell React Query when the app is in the foreground.
 *
 * @see https://tanstack.com/query/latest/docs/framework/react/react-native
 */
export function useAppStateFocus() {
  useEffect(() => {
    const subscription = AppState.addEventListener("change", onAppStateChange)

    return () => subscription.remove()
  }, [])
}
