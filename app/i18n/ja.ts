import { Translations } from "./en"

const ja: Translations = {
  common: {
    ok: "OK",
    cancel: "キャンセル",
    back: "戻る",
  },
  welcomeScreen: {
    postscript:
      "注目！ — このアプリはお好みの見た目では無いかもしれません(デザイナーがこのスクリーンを送ってこない限りは。もしそうなら公開しちゃいましょう！)",
    readyForLaunch: "このアプリはもう少しで公開できます！",
    exciting: "(楽しみですね！)",
  },
  errorScreen: {
    title: "問題が発生しました",
    friendlySubtitle:
      "本番では、エラーが投げられた時にこのページが表示されます。もし使うならこのメッセージに変更を加えてください(`app/i18n/jp.ts`)レイアウトはこちらで変更できます(`app/screens/ErrorScreen`)。もしこのスクリーンを取り除きたい場合は、`app/app.tsx`にある<ErrorBoundary>コンポーネントをチェックしてください",
    reset: "リセット",
  },
  tabNavigator: {
    chatTab: "チャット",
    settingsTab: "設定",
  },
  chatsScreen: {
    title: "チャット",
    error: "チャットを読み込めませんでした。",
    retry: "再試行",
  },
  chatScreen: {
    messagePlaceholder: "メッセージ",
    send: "送信",
    error: "このチャットを読み込めませんでした。",
    blocked: "ブロック中",
    blockedBanner: "この連絡先をブロックしました。メッセージを送るにはブロックを解除してください。",
    blockedPlaceholder: "メッセージ不可",
  },
  profileScreen: {
    title: "プロフィール",
    name: "名前",
    phone: "電話番号",
    error: "このプロフィールを読み込めませんでした。",
    block: "連絡先をブロック",
  },
  settingsScreen: {
    title: "設定",
    name: "名前",
    appVersion: "アプリバージョン",
  },
}

export default ja
