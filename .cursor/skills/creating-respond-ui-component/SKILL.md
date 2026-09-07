---
name: creating-respond-ui-component
description: Scaffolds a new respond-ui design-system component using the existing folder layout. Use when the user asks to create, add, scaffold, or generate any reusable visual primitive, overlay, or Storybook story in app/respond-ui — regardless of the component name.
---

# Creating a respond-ui component

Copy the folder layout of the canonical examples. Do not copy older Ignite-shaped components.

Canonical examples: @app/respond-ui/components/Text/Text.tsx @app/respond-ui/components/Button/Button.tsx @app/respond-ui/components/index.ts

## When to Use

- User asks to create a reusable visual primitive or overlay
- Not for tokens, screens, navigation, or editing an existing component
- Stop if the request is app chrome, a platform/native loader, or device/OS wiring — those go in `app/components/`

## Instructions

1. Create `app/respond-ui/components/Name/` with only:

```
Name.tsx
types.ts
styles.ts
index.ts
Name.stories.tsx
useName.ts          # skip unless there is real logic
```

2. Arrow function. Types in `types.ts`. `StyleSheet` in `styles.ts`.
3. Tokens from `respond-ui/foundations` only. Public API: `variant`, `isRTL`, `style` / `containerStyle`, and `children` or `label`.
4. Everything the primitive shows or does is a prop (copy, data, callbacks, children). Translate and fetch at the call site. No `tx`, `txOptions`, `text`, `preset`, or Ignite `weight` / `size` on text.
5. `Pressable` for press. Import siblings by file (`../Text/Text`) when that avoids cycles.
6. Pictures always use the app image loader from `app/components`. Do not use React Native `Image`.
7. Register with explicit file paths:

```ts
export { Name } from "./Name/Name"
export type { NameProps } from "./Name/types"
```

8. Add `Name.stories.tsx` with `title: "respond-ui/Name"`. Follow @app/respond-ui/components/Text/Text.stories.tsx. No new Storybook config.
