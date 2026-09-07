/**
 * Sentry crash reporting.
 * Expo: https://docs.expo.dev/guides/using-sentry/
 */
// import * as Sentry from "@sentry/react-native"

/**
 * Call from `./app/app.tsx` after installing `@sentry/react-native`.
 */
export const initCrashReporting = () => {
  // Sentry.init({
  //   dsn: "YOUR DSN HERE",
  //   debug: true, // Set to `false` in production
  // })
}

/**
 * Error classifications used to sort errors on Sentry.
 */
export enum ErrorType {
  /**
   * An error that would normally cause a red screen in dev
   * and force the user to sign out and restart.
   */
  FATAL = "Fatal",
  /**
   * An error caught by try/catch.
   */
  HANDLED = "Handled",
}

/**
 * Manually report a handled error.
 */
export const reportCrash = (error: Error, type: ErrorType = ErrorType.FATAL) => {
  if (__DEV__) {
    const message = error.message || "Unknown"
    console.error(error)
    console.log(message, type)
  } else {
    // Sentry.captureException(error)
  }
}
