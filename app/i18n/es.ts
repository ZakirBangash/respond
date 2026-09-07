import { Translations } from "./en"

const es: Translations = {
  common: {
    ok: "OK",
    cancel: "Cancelar",
    back: "Volver",
  },
  welcomeScreen: {
    postscript:
      "psst — Esto probablemente no es cómo se va a ver tu app. (A menos que tu diseñador te haya enviado estas pantallas, y en ese caso, ¡lánzalas en producción!)",
    readyForLaunch: "Tu app, casi lista para su lanzamiento",
    exciting: "(¡ohh, esto es emocionante!)",
  },
  errorScreen: {
    title: "¡Algo salió mal!",
    friendlySubtitle:
      "Esta es la pantalla que verán tus usuarios en producción cuando haya un error. Vas a querer personalizar este mensaje (que está ubicado en `app/i18n/es.ts`) y probablemente también su diseño (`app/screens/ErrorScreen`). Si quieres eliminarlo completamente, revisa `app/app.tsx` y el componente <ErrorBoundary>.",
    reset: "REINICIA LA APP",
  },
  tabNavigator: {
    chatTab: "Chat",
    settingsTab: "Ajustes",
  },
  chatsScreen: {
    title: "Chats",
    error: "No se pudieron cargar los chats.",
    retry: "Intentar de nuevo",
  },
  chatScreen: {
    messagePlaceholder: "Mensaje",
    send: "Enviar",
    error: "No se pudo cargar este chat.",
    blocked: "Bloqueado",
    blockedBanner: "Bloqueaste este contacto. Desbloquéalo para enviar mensajes.",
    blockedPlaceholder: "Mensajes deshabilitados",
  },
  profileScreen: {
    title: "Perfil",
    name: "Nombre",
    phone: "Número de teléfono",
    error: "No se pudo cargar este perfil.",
    block: "Bloquear contacto",
  },
  settingsScreen: {
    title: "Ajustes",
    name: "Nombre",
    appVersion: "Versión de la app",
  },
}

export default es
