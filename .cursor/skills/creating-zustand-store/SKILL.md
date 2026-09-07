---
name: creating-zustand-store
description: >-
  Creates or updates Zustand stores in app/stores using Respond conventions
  (flat state, stable actions object, selective subscriptions, shallow rules).
  Use when the user asks to create, add, scaffold, or update a Zustand store,
  client store, useXStore, or blocked/UI/app state in app/stores.
---

# Creating or updating a Zustand store

Follow @app/stores/blockedUsers.ts. Apply @.cursor/rules/zustand-stores.mdc.

## When to use

- New store under `app/stores/`
- Changing an existing Zustand store’s shape or actions
- Not for React Query / server cache

## Steps

1. Add or edit `app/stores/<name>.ts` (e.g. `useCartStore` → `cart.ts`).
2. Copy the **store-rules comment block** from @app/stores/blockedUsers.ts into the file header.
3. Use this template:

```ts
import { create } from "zustand"

/**
 * <Store purpose>.
 *
 * Store rules (apply to all Zustand stores):
 * ...paste full rules comment from blockedUsers.ts...
 */

const initialState = {
  // flat fields only
}

interface FeatureState {
  // State (flat)
  // ...
  // Actions (single stable reference)
  actions: {
    // ...
  }
}

export const useFeatureStore = create<FeatureState>()((set) => ({
  ...initialState,
  actions: {
    // immutable updates only
  },
}))
```

4. Export from @app/stores/index.ts: `export { useFeatureStore } from "./<name>"`.
5. Consumers must select specifically:

```ts
const value = useFeatureStore((s) => s.value)
const actions = useFeatureStore((s) => s.actions)
```

Never `useFeatureStore()` with no selector.

6. Prefer multiple selectors. Use `shallow` from `zustand/shallow` only for the edge cases listed in the store-rules comment.

## Checklist

- [ ] Flat state + `actions` object
- [ ] `create<State>()((set) => …)` TypeScript form
- [ ] Rules comment present
- [ ] Barrel export updated
- [ ] No whole-store subscriptions at call sites
- [ ] Immutable updates (no in-place mutate / avoid `delete` when a filter/omit works)
