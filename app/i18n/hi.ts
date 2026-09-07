import { Translations } from "./en"

const hi: Translations = {
  common: {
    ok: "ठीक है!",
    cancel: "रद्द करें",
    back: "वापस",
  },
  welcomeScreen: {
    postscript:
      "psst - शायद आपका ऐप ऐसा नहीं दिखता है। (जब तक कि आपके डिजाइनर ने आपको ये स्क्रीन नहीं दी हों, और उस स्थिति में, इसे लॉन्च करें!)",
    readyForLaunch: "आपका ऐप, लगभग लॉन्च के लिए तैयार है!",
    exciting: "(ओह, यह रोमांचक है!)",
  },
  errorScreen: {
    title: "कुछ गलत हो गया!",
    friendlySubtitle:
      "यह वह स्क्रीन है जो आपके उपयोगकर्ता संचालन में देखेंगे जब कोई त्रुटि होगी। आप इस संदेश को बदलना चाहेंगे (जो `app/i18n/hi.ts` में स्थित है) और शायद लेआउट भी (`app/screens/ErrorScreen`)। यदि आप इसे पूरी तरह से हटाना चाहते हैं, तो `app/app.tsx` में <ErrorBoundary> कंपोनेंट की जांच करें।",
    reset: "ऐप रीसेट करें",
  },
  tabNavigator: {
    chatTab: "चैट",
    settingsTab: "सेटिंग्स",
  },
  chatsScreen: {
    title: "चैट्स",
    error: "चैट लोड नहीं हो सकीं।",
    retry: "फिर कोशिश करें",
  },
  chatScreen: {
    messagePlaceholder: "संदेश",
    send: "भेजें",
    error: "यह चैट लोड नहीं हो सकी।",
    blocked: "ब्लॉक किया गया",
    blockedBanner: "आपने इस संपर्क को ब्लॉक कर दिया है। संदेश भेजने के लिए अनब्लॉक करें।",
    blockedPlaceholder: "संदेश बंद हैं",
  },
  profileScreen: {
    title: "प्रोफ़ाइल",
    name: "नाम",
    phone: "फ़ोन नंबर",
    error: "यह प्रोफ़ाइल लोड नहीं हो सकी।",
    block: "संपर्क ब्लॉक करें",
  },
  settingsScreen: {
    title: "सेटिंग्स",
    name: "नाम",
    appVersion: "ऐप संस्करण",
  },
}

export default hi
