---
name: creating-respond-screen
description: >-
  Scaffolds a new tab or flow screen under app/routes using Respond navigation
  conventions (route constants, navigation types, Screen/Header, i18n). Use when
  the user asks to create, add, or scaffold a screen, tab, flow, or navigator
  route in this app.
---

# Creating a Respond screen

Follow @app/routes/README.md. Apply @.cursor/rules/respond-screens.mdc.

Canonical examples: @app/routes/flows/chat/screens/profile/ProfileScreen.tsx @app/routes/tabs/settings/SettingsTabScreen.tsx @app/routes/flows/chat/screens/chat/ChatScreen.tsx

## When to use

- New tab, new screen in an existing flow, or a new flow
- Not for respond-ui primitives or app chrome components

## Decide placement

| Need | Where | Copy from |
| --- | --- | --- |
| Bottom-bar page | `tabs/<name>/` | `tabs/settings/` |
| Page inside a stack | `flows/<flow>/screens/<name>/` | `flows/chat/screens/profile/` |
| New stack of pages | `flows/<flow>/` | `flows/chat/` |

## Steps — screen in an existing flow

1. Add route name + param list entry in `flows/<flow>/routes.types.ts`.
2. Create `flows/<flow>/screens/<name>/`:

```
NameScreen.tsx
NameScreen.navigation.ts
NameScreen.types.ts     # only if route params
NameScreen.styles.ts    # preferred for non-trivial UI
useNameScreen.ts        # when there is real logic
index.ts
```

3. `NameScreen.navigation.ts` — plain navigation/route types (see @app/routes/flows/chat/screens/profile/ProfileScreen.navigation.ts).
4. Screen: wrap in `Screen`, prefer `respond-ui`. Put data/handlers in `useNameScreen`.
5. Header: configure on the navigator in `routes.tsx`, not inside the screen:

```ts
options={{
  headerShown: true,
  header: () => <Header title={translate("nameScreen:title")} />,
}}
```

   Back shows automatically when the stack can go back.
   Tabs: `header: () => <Header title={translate("…")} />`.
   Dynamic center (chat contact): `useHeader({ children: <ContactRow /> }, deps)` in the screen hook.
6. Export from `flows/<flow>/screens/index.ts` and register `<Stack.Screen>` in `flows/<flow>/routes.tsx`.
7. Add i18n namespace keys (e.g. `nameScreen:title`) to all locale files; `en.ts` defines `Translations`.
8. Optional: deep link path in `linking.ts`.

Navigate within the same flow: `navigation.navigate(CHAT_ROUTES.NAME, params)`.

## Steps — new tab

1. Add name + param list in `tabs/routes.types.ts`.
2. Create `tabs/<name>/` with `NameTabScreen.tsx`, `NameTabScreen.navigation.ts`, `index.ts`.
3. Register `<Tab.Screen>` in `tabs/routes.tsx` with navigator header + tab label:

```ts
options={{
  title: translate("tabNavigator:…"),
  header: () => <Header title={translate("nameScreen:title")} showBack={false} />,
  tabBarIcon: ({ color, size }) => <Icon icon="…" color={color} size={size} />,
}}
```

4. i18n for tab label + screen copy; optional `linking.ts` path.

## Steps — new flow

1. Copy `flows/chat/` shape: `routes.types.ts`, `routes.tsx`, `screens/`, `index.ts`.
2. Wire into root `routes.types.ts` (`ROUTES` + `RootStackParamList`).
3. Register on root with lazy load:

```ts
<Stack.Screen
  name={MY_FLOW_ROUTES.ROUTE}
  getComponent={() => require("./flows/my-flow/routes").MyFlow}
/>
```

4. Export from `flows/index.ts` and `routes/index.ts`.
5. From a tab, open via parent:

```ts
navigation.getParent<RootStackNavigationProp>()?.navigate(MY_FLOW_ROUTES.ROUTE, {
  screen: MY_FLOW_ROUTES.FIRST,
  params: { /* ... */ },
})
```

## Checklist

- [ ] Route constant — no raw string names
- [ ] `*Screen.navigation.ts` + `index.ts`
- [ ] Param list + navigator `routes.tsx` registration
- [ ] `Screen` wrapper; standard header via navigator `options.header` (`Header` + `title={translate(...)}`)
- [ ] Copy in i18n
- [ ] Logic in `use*Screen` when non-trivial
- [ ] New flow uses `getComponent` + `require`
