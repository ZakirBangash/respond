import { useRef, useState } from "react"
import type { LayoutChangeEvent } from "react-native"

import type { AutoScreenProps } from "./types"

export const useAutoPreset = (props: AutoScreenProps) => {
  const { preset, scrollEnabledToggleThreshold } = props
  const { percent = 0.92, point = 0 } = scrollEnabledToggleThreshold || {}

  const scrollViewHeight = useRef<null | number>(null)
  const scrollViewContentHeight = useRef<null | number>(null)
  const [scrollEnabled, setScrollEnabled] = useState(true)

  const updateScrollState = () => {
    if (scrollViewHeight.current === null || scrollViewContentHeight.current === null) return

    const contentFitsScreen = point
      ? scrollViewContentHeight.current < scrollViewHeight.current - point
      : scrollViewContentHeight.current < scrollViewHeight.current * percent

    if (scrollEnabled && contentFitsScreen) setScrollEnabled(false)
    if (!scrollEnabled && !contentFitsScreen) setScrollEnabled(true)
  }

  const onContentSizeChange = (_w: number, h: number) => {
    scrollViewContentHeight.current = h
    updateScrollState()
  }

  const onLayout = (e: LayoutChangeEvent) => {
    scrollViewHeight.current = e.nativeEvent.layout.height
    updateScrollState()
  }

  // eslint-disable-next-line react-hooks/refs -- auto preset reads sizes after layout
  if (preset === "auto") updateScrollState()

  return {
    scrollEnabled: preset === "auto" ? scrollEnabled : true,
    onContentSizeChange,
    onLayout,
  }
}
