import type { ReactNode } from "react"

export type HeaderProps = {
  /** Plain title. Ignored when `children` is set. */
  title?: string
  /** Custom center content (e.g. chat contact row). */
  children?: ReactNode
  /**
   * Show the back button. Defaults to `navigation.canGoBack()`.
   * Pass `false` on tab roots so a parent stack history never shows back.
   */
  showBack?: boolean
}
