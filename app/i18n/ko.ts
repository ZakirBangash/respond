import { Translations } from "./en"

const ko: Translations = {
  common: {
    ok: "확인!",
    cancel: "취소",
    back: "뒤로",
  },
  welcomeScreen: {
    postscript:
      "잠깐! — 지금 보시는 것은 아마도 당신의 앱의 모양새가 아닐겁니다. (디자이너분이 이렇게 건내주셨다면 모를까요. 만약에 그렇다면, 이대로 가져갑시다!) ",
    readyForLaunch: "출시 준비가 거의 끝난 나만의 앱!",
    exciting: "(오, 이거 신나는데요!)",
  },
  errorScreen: {
    title: "뭔가 잘못되었습니다!",
    friendlySubtitle:
      "이 화면은 오류가 발생할 때 프로덕션에서 사용자에게 표시됩니다. 이 메시지를 커스터마이징 할 수 있고(해당 파일은 `app/i18n/ko.ts` 에 있습니다) 레이아웃도 마찬가지로 수정할 수 있습니다(`app/screens/error`). 만약 이 오류화면을 완전히 없에버리고 싶다면 `app/app.tsx` 파일에서 <ErrorBoundary> 컴포넌트를 확인하기 바랍니다.",
    reset: "초기화",
  },
  tabNavigator: {
    chatTab: "채팅",
    settingsTab: "설정",
  },
  chatsScreen: {
    title: "채팅",
    error: "채팅을 불러오지 못했습니다.",
    retry: "다시 시도",
  },
  chatScreen: {
    messagePlaceholder: "메시지",
    send: "보내기",
    error: "이 채팅을 불러오지 못했습니다.",
    blocked: "차단됨",
    blockedBanner: "이 연락처를 차단했습니다. 메시지를 보내려면 차단을 해제하세요.",
    blockedPlaceholder: "메시지 비활성화됨",
  },
  profileScreen: {
    title: "프로필",
    name: "이름",
    phone: "전화번호",
    error: "이 프로필을 불러오지 못했습니다.",
    block: "연락처 차단",
  },
  settingsScreen: {
    title: "설정",
    name: "이름",
    appVersion: "앱 버전",
  },
}

export default ko
