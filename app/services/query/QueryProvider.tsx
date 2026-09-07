import { type ReactNode } from "react"
import { QueryClientProvider } from "@tanstack/react-query"

import { queryClient } from "./queryClient"
import { setupOnlineManager } from "./setupOnlineManager"
import { useAppStateFocus } from "./useAppStateFocus"

setupOnlineManager()

/**
 * Why this exists:
 * App screens use `useQuery` / `useMutation`, which only work under a
 * QueryClientProvider. This wrapper owns that provider and the React Native
 * focus + online adapters so `app.tsx` does not hold React Query setup.
 *
 * Responsibility: mount the shared client and wire refetch-on-focus / reconnect.
 */
export function QueryProvider({ children }: { children: ReactNode }) {
  useAppStateFocus()

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
