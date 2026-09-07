import { QueryClient } from "@tanstack/react-query"

/**
 * Why this exists:
 * React Query needs one shared client so screens reuse the same cache instead
 * of each creating their own. Created once at module load, not inside render.
 *
 * Responsibility: hold the app-wide query cache and defaults.
 */
export const queryClient = new QueryClient()
