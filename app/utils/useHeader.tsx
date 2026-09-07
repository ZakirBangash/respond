import { useLayoutEffect } from "react"
import { useNavigation } from "@react-navigation/native"

import { Header, HeaderProps } from "@/components/Header"

/**
 * Sets the navigator header from inside a screen (or its hook).
 *
 * Prefer a static `options.header` in `routes.tsx` when the title never changes.
 * Use this hook when the header depends on screen data (user, flags, etc.).
 *
 * Pass values that should refresh the header in `deps` — `headerProps` itself is
 * not compared; only `deps` + `navigation` re-run the effect.
 *
 * @example Static title
 * ```tsx
 * useHeader({ title: translate("settingsScreen:title") })
 * ```
 *
 * @example Dynamic center (chat contact row)
 * ```tsx
 * useHeader(
 *   {
 *     children: (
 *       <ChatContactHeader
 *         user={user}
 *         contactName={contactName}
 *         isBlocked={isBlocked}
 *         onPress={onOpenProfile}
 *       />
 *     ),
 *   },
 *   [user, contactName, isBlocked, onOpenProfile],
 * )
 * ```
 *
 * Back is handled by `Header` when `navigation.canGoBack()`.
 * Ensure the screen has `headerShown: true` (this hook sets it) so the bar appears.
 */
export function useHeader(
  headerProps: HeaderProps,
  deps: Parameters<typeof useLayoutEffect>[1] = [],
) {
  const navigation = useNavigation()

  // useLayoutEffect applies options before paint to avoid a header jump.
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header {...headerProps} />,
    })
    // intentionally created API to have user set when they want to update the header via `deps`
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, navigation])
}
