# Routes architecture

## The idea in one sentence

**Root** holds Tabs + flows. **Each flow has its own stack.** Screens live in that stack’s folder.

---

## What you see in the app

```
Root stack                    (app shell)
│
├── Tabs                      (bottom bar — always there)
│   ├── Chats
│   └── Settings
│
└── Chat flow                 (opens on top when you tap a chat)
    ├── Conversation
    └── Profile
```

---

## Who owns what

| Layer | Navigator type | Lives in | Owns |
| --- | --- | --- | --- |
| Root | Stack | `routes/routes.tsx` | Tabs + each flow |
| Tabs | Bottom tabs | `tabs/` | Tab screens |
| Flow | Stack | `flows/<name>/` | That feature’s screens |

**Important:** Chat’s stack is in `flows/chat/`, not in the root file. Root only says “mount the Chat flow.”

---

## Folders

```
routes/
├── routes.tsx              → root stack
├── routes.types.ts         → root route names + types
├── linking.ts              → deep links
│
├── tabs/                   → bottom tabs
│   ├── routes.tsx
│   ├── routes.types.ts
│   ├── chats/              → Chats tab screen
│   └── settings/           → Settings tab screen
│
└── flows/
    └── chat/               → Chat feature
        ├── routes.tsx      → Chat’s stack
        ├── routes.types.ts
        └── screens/
            ├── chat/       → Conversation screen
            └── profile/    → Profile screen
```

---

## Words we use

- **Tab** — item on the bottom bar  
- **Flow** — feature stack pushed above tabs (Chat, later onboarding, etc.)  
- **Screen** — one page, one folder  

---

## How to navigate

| From → To | How |
| --- | --- |
| Screen → screen in the **same flow** | `navigation.navigate(...)` |
| **Tab** → a **flow** | `navigation.getParent().navigate(FLOW.ROUTE, { screen, params })` |

Always use `TABS_ROUTES` / `CHAT_ROUTES` — never hardcode `"Chat"`.

Flows on the root stack load lazily with `getComponent` + `require`.
