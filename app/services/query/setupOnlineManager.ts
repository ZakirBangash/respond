import * as Network from "expo-network"
import { onlineManager } from "@tanstack/react-query"

/**
 * Why this exists:
 * React Query does not know when this device loses or regains connectivity.
 * Without this setup, failed queries will not automatically retry just because
 * Wi-Fi or cellular came back.
 *
 * Responsibility: tell React Query when the device is online or offline.
 * expo-network is only used here for that signal.
 *
 * @see https://tanstack.com/query/latest/docs/framework/react/react-native
 */
export const setupOnlineManager = () => {
  onlineManager.setEventListener((setOnline) => {
    let initialised = false

    const eventSubscription = Network.addNetworkStateListener((state) => {
      initialised = true
      setOnline(!!state.isConnected)
    })

    Network.getNetworkStateAsync()
      .then((state) => {
        if (!initialised) {
          setOnline(!!state.isConnected)
        }
      })
      .catch(() => {
        // getNetworkStateAsync can reject on some platforms/SDK versions
      })

    return eventSubscription.remove
  })
}
