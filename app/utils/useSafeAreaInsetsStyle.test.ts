import { renderHook } from "@testing-library/react-native"

import { useSafeAreaInsetsStyle } from "./useSafeAreaInsetsStyle"

jest.mock("react-native-safe-area-context", () => ({
  useSafeAreaInsets: () => ({
    top: 59,
    bottom: 34,
    left: 8,
    right: 12,
  }),
}))

describe("useSafeAreaInsetsStyle", () => {
  it("returns no insets when no edges are passed", () => {
    const { result } = renderHook(() => useSafeAreaInsetsStyle())
    expect(result.current).toEqual({})
  })

  it("adds padding for each edge in the array", () => {
    const { result } = renderHook(() => useSafeAreaInsetsStyle(["top", "bottom"]))
    expect(result.current).toEqual({ paddingTop: 59, paddingBottom: 34 })
  })

  it("adds only the edges that were passed", () => {
    const { result } = renderHook(() => useSafeAreaInsetsStyle(["bottom"]))
    expect(result.current).toEqual({ paddingBottom: 34 })
  })

  it("uses margin when kind is margin", () => {
    const { result } = renderHook(() => useSafeAreaInsetsStyle(["top"], "margin"))
    expect(result.current).toEqual({ marginTop: 59 })
  })

  it("maps left/start to start and right/end to end", () => {
    const { result } = renderHook(() => useSafeAreaInsetsStyle(["left", "right", "start", "end"]))
    expect(result.current).toEqual({
      paddingStart: 8,
      paddingEnd: 12,
    })
  })
})
