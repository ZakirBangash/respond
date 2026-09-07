# Respond

## Try the app (APK + demo)

Download the Android APK and watch the demo recording here:

**[Google Drive — APK & demo video](https://drive.google.com/drive/folders/1T6eR-E9WqUovbQ7n9zZirYqCGB75fxlg?usp=sharing)**

| File | Description |
| --- | --- |
| `respond.apk` | Android package to install and run the app |
| `Respond-app-demo.mp4` | Screen recording of the app demo |

---

React Native mobile app (Expo). Package name: `respond`. Bundle / application id: `com.respond`. URL scheme: `respond`.

This README describes what is in this repository as implemented. For navigation structure details, see [`app/routes/README.md`](app/routes/README.md).

---

## Architecture

**This project follows a highly scalable architecture.** The codebase is structured so new features can be added without collapsing screens, API, state, and UI into one place.

What that means in this repo:

| Layer | Responsibility | Where |
| --- | --- | --- |
| **Routes / flows** | Navigation only. Each feature owns its own stack. | `app/routes/` |
| **Screens** | Screen UI and screen-local hooks. | `app/routes/tabs/`, `app/routes/flows/` |
| **Design system** | Reusable visual primitives and tokens. | `app/respond-ui/` |
| **App chrome** | Screen shell, header, image loader. | `app/components/` |
| **Services** | HTTP client, endpoints, React Query hooks. | `app/services/` |
| **Stores** | Client/UI state (Zustand). | `app/stores/` |
| **Config / i18n** | Environment config and translations. | `app/config/`, `app/i18n/` |

Scalability choices already in the tree:

- **Feature-first navigation** — the root stack stays thin; each flow is a folder (`app/routes/flows/<flow>/`) with its own stack, types, and screens. New product areas add a flow instead of growing a single navigator.
- **Separated concerns** — fetching lives in `services/`, client state in `stores/`, look-and-feel in `respond-ui/`. Screens compose those layers; they do not own the API or the design system.
- **Lazy flows** — root stack screens load with `getComponent` + `require`, so unused flows are not on the critical path.
- **Typed route constants** — `TABS_ROUTES` / `CHAT_ROUTES` instead of hardcoded route strings, so navigation stays refactor-safe as the graph grows.
- **Shared design system** — tokens and primitives are centralized so UI stays consistent as screen count increases.

Details of the navigation graph: [`app/routes/README.md`](app/routes/README.md).

---

## Stack (from `package.json` / Expo config)

| Area | Technology |
| --- | --- |
| Runtime | React Native `0.86.3`, React `19.2.3`, Expo `57.0.20` |
| Entry | `index.tsx` → `app/app.tsx` via `expo-dev-client` |
| Navigation | React Navigation 7 — native stack + bottom tabs |
| Data fetching | TanStack React Query 5, Axios |
| Local UI state | Zustand (`blockedUsers` store) |
| Lists | `@shopify/flash-list` |
| i18n | i18next + react-i18next + expo-localization |
| Design system | In-repo `respond-ui` (`app/respond-ui`) |
| Unit tests | Jest (`jest-expo`) |
| Component docs | Storybook React Native (on-device) |
| Builds | EAS (`eas.json` profiles) |
| Package manager | pnpm (`pnpm-lock.yaml`) |
| Node | `>=22.13.0` (`package.json` `engines`) |

TypeScript path aliases (`tsconfig.json`):

- `@/*` → `app/*`
- `@assets/*` → `assets/*`
- `respond-ui` / `respond-ui/*` → `app/respond-ui`

---

## What the app does (as coded)

```
Root stack
├── Tabs
│   ├── Chats     → paginated users list; tap opens Chat flow
│   └── Settings  → hardcoded name "Taylor Chen" and version "0.0.1"
└── Chat flow
    ├── Conversation  → posts for a userId rendered as messages
    └── Profile       → user details + block toggle
```

- **Chats tab** loads users via infinite query (`useUsers` → `GET api/users` with `limit` / `offset`).
- **Conversation** loads posts for that user (`usePosts` → `GET api/posts?userId=…`) and sends messages via `POST api/posts`. Outgoing messages use `category: "message"` so they can be shown as “mine” (documented in `app/services/api/posts.ts`).
- **Profile** loads one user (`GET api/users/:id`) and can mark that id blocked in Zustand. Blocked contacts cannot send messages from the conversation screen.
- **Deep links** (`app/routes/linking.ts`): `/`, `/settings`, `/chat/:conversationId`, `/profile/:conversationId`.

API base URL (dev and prod configs): `https://responserift.dev/` (`app/config/config.dev.ts`, `app/config/config.prod.ts`).

---

## Repository layout

```
respond/
├── app/
│   ├── app.tsx                 App root (fonts, i18n, QueryProvider, Routes / Storybook)
│   ├── components/             App-level UI (Screen, Header, FastImage, AvatarPlaceholder)
│   ├── config/                 Base + __DEV__ / prod config
│   ├── dev/                    Dev-only Storybook FAB + host
│   ├── i18n/                   Locales: en, ar, es, fr, hi, ja, ko
│   ├── respond-ui/             Design system (components + foundations)
│   ├── routes/                 Navigation (see app/routes/README.md)
│   ├── services/
│   │   ├── api/                Axios client + users/posts endpoints
│   │   ├── hooks/              React Query hooks
│   │   └── query/              QueryClient + focus/online wiring
│   ├── stores/                 Zustand stores
│   ├── utils/                  Storage, dates, shared styles, system UI helpers, etc.
├── assets/                     Icons and images
├── .rnstorybook/               Storybook RN entry
├── .maestro/                   Maestro shared setup (see Testing)
├── android/ / ios/             Native projects
├── app.json / app.config.ts    Expo config
├── eas.json                    EAS build profiles
├── package.json
└── pnpm-lock.yaml
```

---

## Navigation architecture

Documented in [`app/routes/README.md`](app/routes/README.md).

This navigation setup is built to scale: the root stack stays thin, and **each flow owns its own stack** under `app/routes/flows/<flow>/`. New features add a new flow folder (stack + screens) without growing a single giant navigator. Tabs stay under `app/routes/tabs/` as the always-mounted shell.

Summary:

- **Root** native stack registers Tabs and each flow.
- **Tabs** bottom-tab navigator lives under `app/routes/tabs/`.
- **Each flow** (e.g. Chat) has **its stack inside that flow** — not in the root file. Root only mounts the flow.
- Flows on the root stack are registered with `getComponent` + `require` (lazy load).
- Route names come from `TABS_ROUTES` / `CHAT_ROUTES` constants.

---

## Design system (`respond-ui`) and Storybook

Location: `app/respond-ui`.

**Why `respond-ui` exists:** shared UI and foundations live in one place (`Button`, `Text`, `TextField`, `Icon`, `PressableIcon`, `Switch`, plus `foundations` for color, space, typography, fonts). Feature screens import from `respond-ui` instead of restyling primitives in every screen, so look-and-feel stays consistent as the app grows.

**Why Storybook:** on-device Storybook documents and exercises those design-system components in isolation (stories for Button, Text, TextField, Icon, Switch), without needing a full navigation path. Metro enables Storybook when `NODE_ENV !== "production"`. In `__DEV__`, a floating **SB** button opens Storybook; the host includes a close control (`app/dev/`).

---

## Optimization

Handled in this codebase:

| Area | What |
| --- | --- |
| **List rendering** | Chats and conversation use `FlashList` instead of `FlatList` (`ChatsTabScreen`, `ChatScreen`) |
| **Pagination** | Chats load users with React Query `useInfiniteQuery` and `fetchNextPage` on end-reach (`useUsers`, page size `10`) |
| **Lazy navigators** | Root stack screens use `getComponent` + `require` so Tabs / Chat flow load when opened (`routes.tsx`) |
| **JS bundle loading** | Metro `inlineRequires: true` defers loading large modules until needed (`metro.config.js`) |
| **Images** | Remote/local images go through `FastImage` (`@d11/react-native-fast-image`) with optional fallback |
| **Chat list UX** | Conversation list starts near the latest message (`initialScrollIndex`) and uses `maintainVisibleContentPosition` while sending |
| **Stable list rows** | Chat / Chats list `renderItem` handlers are `useCallback`-backed to avoid recreating row renderers every render |
| **Query cache** | Single shared `QueryClient` + focus/online managers so screens reuse cache and refetch on reconnect/foreground |

---

## Scripts (`package.json`)

| Script | Purpose |
| --- | --- |
| `pnpm start` | `expo start --dev-client` |
| `pnpm ios` / `pnpm android` | `expo run:ios` / `expo run:android` |
| `pnpm compile` | Typecheck (`tsc --noEmit`) |
| `pnpm lint` / `pnpm lint:check` | ESLint |
| `pnpm test` / `pnpm test:watch` | Jest |
| `pnpm storybook:generate` | Regenerate Storybook requires |
| `pnpm align-deps` | `expo install --fix` |
| `pnpm prebuild:clean` | `expo prebuild --clean` |
| `pnpm build:ios:*` / `pnpm build:android:*` | Local EAS builds (see `eas.json`) |
| `pnpm test:maestro` | Maestro (`MAESTRO_APP_ID=com.respond`, path `.maestro/flows`) |
| `pnpm adb` | Reverse ports `3000`, `9001`, `8081` |

---

## Getting started

Requirements implied by the repo:

- Node `>=22.13.0`
- pnpm
- Native toolchain for iOS/Android as required by Expo / `expo run:*`
- Dev client builds use EAS profiles in `eas.json` (`development`, `development:device`, `preview`, `production`, etc.)

```bash
pnpm install
pnpm start
```

To run on a simulator/device with the native project, use `pnpm ios` / `pnpm android`, or an EAS local build script from `package.json` after native projects / credentials are set up as required by Expo EAS.

---

## Testing

**Jest**

- Config: `jest.config.js` (preset `jest-expo`, setup `test/setup.ts`)
- Present test files:
  - `app/respond-ui/components/Text.test.tsx`
  - `app/respond-ui/foundations/foundations.test.ts`
  - `app/utils/storage/storage.test.ts`

**Maestro**

- Script: `pnpm test:maestro` → `maestro test -e MAESTRO_APP_ID=com.respond .maestro/flows`
- In this repo today: `.maestro/shared/_OnFlowStart.yaml` exists; there is no `.maestro/flows/` directory with flow files checked in.

---

## i18n

Supported resource keys in `app/i18n`: `en`, `ar`, `es`, `fr`, `hi`, `ja`, `ko`. Fallback locale logic lives in `app/i18n/index.ts` (fallback tag `en-US`).

---

## Config notes

- `Config.API_URL` is the Axios `baseURL`.
- `catchErrors: "always"` and Android exit route `TABS_ROUTES.CHATS` are in `app/config/config.base.ts`.
- Metro Storybook wrapper is enabled when `NODE_ENV !== "production"` (`metro.config.js`).
