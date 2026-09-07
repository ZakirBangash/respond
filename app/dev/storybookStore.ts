import { useSyncExternalStore } from "react"

let enabled = false
const listeners = new Set<() => void>()

const emit = () => {
  listeners.forEach((listener) => listener())
}

export const openStorybook = () => {
  enabled = true
  emit()
}

export const closeStorybook = () => {
  enabled = false
  emit()
}

export const useIsStorybook = () =>
  useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    () => enabled,
  )
