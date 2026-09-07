import { Translations } from "./en"

const ar: Translations = {
  common: {
    ok: "نعم",
    cancel: "حذف",
    back: "خلف",
  },
  welcomeScreen: {
    postscript:
      "ربما لا يكون هذا هو الشكل الذي يبدو عليه تطبيقك مالم يمنحك المصمم هذه الشاشات وشحنها في هذه الحالة",
    readyForLaunch: "تطبيقك تقريبا جاهز للتشغيل",
    exciting: "اوه هذا مثير",
  },
  errorScreen: {
    title: "هناك خطأ ما",
    friendlySubtitle:
      "هذه هي الشاشة التي سيشاهدها المستخدمون في عملية الانتاج عند حدوث خطأ. سترغب في تخصيص هذه الرسالة ( الموجودة في 'ts.en/i18n/app') وربما التخطيط ايضاً ('app/screens/ErrorScreen'). إذا كنت تريد إزالة هذا بالكامل، تحقق من 'app/app.tsp' من اجل عنصر <ErrorBoundary>.",
    reset: "اعادة تعيين التطبيق",
  },
  tabNavigator: {
    chatTab: "الدردشة",
    settingsTab: "الإعدادات",
  },
  chatsScreen: {
    title: "الدردشات",
    error: "تعذر تحميل الدردشات.",
    retry: "حاول مرة أخرى",
  },
  chatScreen: {
    messagePlaceholder: "رسالة",
    send: "إرسال",
    error: "تعذر تحميل هذه الدردشة.",
    blocked: "محظور",
    blockedBanner: "لقد حظرت هذا جهة الاتصال. ألغِ الحظر لإرسال الرسائل.",
    blockedPlaceholder: "الرسائل معطلة",
  },
  profileScreen: {
    title: "الملف الشخصي",
    name: "الاسم",
    phone: "رقم الهاتف",
    error: "تعذر تحميل هذا الملف.",
    block: "حظر جهة الاتصال",
  },
  settingsScreen: {
    title: "الإعدادات",
    name: "الاسم",
    appVersion: "إصدار التطبيق",
  },
}

export default ar
