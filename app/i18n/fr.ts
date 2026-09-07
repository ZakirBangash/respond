import { Translations } from "./en"

const fr: Translations = {
  common: {
    ok: "OK !",
    cancel: "Annuler",
    back: "Retour",
  },
  welcomeScreen: {
    postscript:
      "psst  — Ce n'est probablement pas à quoi ressemble votre application. (À moins que votre designer ne vous ait donné ces écrans, dans ce cas, mettez la en prod !)",
    readyForLaunch: "Votre application, presque prête pour le lancement !",
    exciting: "(ohh, c'est excitant !)",
  },
  errorScreen: {
    title: "Quelque chose s'est mal passé !",
    friendlySubtitle:
      "C'est l'écran que vos utilisateurs verront en production lorsqu'une erreur sera lancée. Vous voudrez personnaliser ce message (situé dans `app/i18n/fr.ts`) et probablement aussi la mise en page (`app/screens/ErrorScreen`). Si vous voulez le supprimer complètement, vérifiez `app/app.tsx` pour le composant <ErrorBoundary>.",
    reset: "RÉINITIALISER L'APPLICATION",
  },
  tabNavigator: {
    chatTab: "Chat",
    settingsTab: "Réglages",
  },
  chatsScreen: {
    title: "Chats",
    error: "Impossible de charger les chats.",
    retry: "Réessayer",
  },
  chatScreen: {
    messagePlaceholder: "Message",
    send: "Envoyer",
    error: "Impossible de charger cette conversation.",
    blocked: "Bloqué",
    blockedBanner: "Vous avez bloqué ce contact. Débloquez-le pour envoyer des messages.",
    blockedPlaceholder: "Messagerie désactivée",
  },
  profileScreen: {
    title: "Profil",
    name: "Nom",
    phone: "Numéro de téléphone",
    error: "Impossible de charger ce profil.",
    block: "Bloquer le contact",
  },
  settingsScreen: {
    title: "Réglages",
    name: "Nom",
    appVersion: "Version de l'application",
  },
}

export default fr
