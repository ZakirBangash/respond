jest.mock("i18next", () => ({
  currentLocale: "en",
  t: (key: string, params: Record<string, string>) => {
    return `${key} ${JSON.stringify(params)}`
  },
  translate: (key: string, params: Record<string, string>) => {
    return `${key} ${JSON.stringify(params)}`
  },
}))

jest.mock("@d11/react-native-fast-image", () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { View } = require("react-native")
  const FastImage = View
  FastImage.resizeMode = {
    contain: "contain",
    cover: "cover",
    stretch: "stretch",
    center: "center",
  }
  FastImage.priority = { low: "low", normal: "normal", high: "high" }
  FastImage.cacheControl = { immutable: "immutable", web: "web", cacheOnly: "cacheOnly" }
  FastImage.preload = jest.fn()
  FastImage.clearMemoryCache = jest.fn()
  FastImage.clearDiskCache = jest.fn()
  return { __esModule: true, default: FastImage }
})

jest.mock("expo-localization", () => ({
  ...jest.requireActual("expo-localization"),
  getLocales: () => [{ languageTag: "en-US", textDirection: "ltr" }],
}))

jest.mock("../app/i18n/index.ts", () => ({
  i18n: {
    isInitialized: true,
    language: "en",
    t: (key: string, params: Record<string, string>) => {
      return `${key} ${JSON.stringify(params)}`
    },
    numberToCurrency: jest.fn(),
  },
}))
