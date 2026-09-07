/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/routes, so head over there
 * if you're interested in adding screens and navigators.
 */
import "./utils/gestureHandler"

import { useEffect, useState } from "react"
import { useFonts } from "expo-font"
import { KeyboardProvider } from "react-native-keyboard-controller"
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"

import { customFontsToLoad } from "respond-ui/foundations"

import { useIsStorybook } from "./dev/storybookStore"
import { initI18n } from "./i18n"
import { Routes } from "./routes"
import { QueryProvider } from "./services/query"
import { setImperativeTheming } from "./utils/setImperativeTheming"
import { loadDateFnsLocale } from "./utils/formatDate"

/**
 * This is the root component of our app.
 * @param {AppProps} props - The props for the `App` component.
 * @returns {JSX.Element} The rendered `App` component.
 */
export function App() {
  const [areFontsLoaded, fontLoadError] = useFonts(customFontsToLoad)
  const [isI18nInitialized, setIsI18nInitialized] = useState(false)
  const isStorybookEnabled = useIsStorybook()

  useEffect(() => {
    setImperativeTheming()
    initI18n()
      .then(() => setIsI18nInitialized(true))
      .then(() => loadDateFnsLocale())
  }, [])

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color.
  // In iOS: application:didFinishLaunchingWithOptions:
  // In Android: https://stackoverflow.com/a/45838109/204044
  // You can replace with your own loading component if you wish.
  if (!isI18nInitialized || (!areFontsLoaded && !fontLoadError)) {
    return null
  }

  if (__DEV__ && isStorybookEnabled) {
    const StorybookUI = require("../.rnstorybook").default
    const { StorybookHost } = require("./dev/StorybookHost") as typeof import("./dev/StorybookHost")
    return (
      <QueryProvider>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <StorybookHost>
            <StorybookUI />
          </StorybookHost>
        </SafeAreaProvider>
      </QueryProvider>
    )
  }

  // otherwise, we're ready to render the app
  return (
    <QueryProvider>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <KeyboardProvider>
          <Routes />
          {__DEV__ ? <DevStorybookFab /> : null}
        </KeyboardProvider>
      </SafeAreaProvider>
    </QueryProvider>
  )
}

function DevStorybookFab() {
  const { StorybookFab } = require("./dev/StorybookFab") as typeof import("./dev/StorybookFab")
  return <StorybookFab />
}
