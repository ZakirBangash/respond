import type { PropsWithChildren } from "react"
import type { TextProps as RNTextProps } from "react-native"

export type TextVariant =
  | "display-1"
  | "display-2"
  | "display-3"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "paragraph-l-regular"
  | "paragraph-m-regular"
  | "paragraph-s-regular"
  | "paragraph-l-bold"
  | "paragraph-m-bold"
  | "paragraph-s-bold"
  | "caption-l-regular"
  | "caption-m-regular"
  | "caption-s-regular"
  | "caption-l-bold"
  | "caption-m-bold"
  | "caption-s-bold"

export interface TextProps extends PropsWithChildren<RNTextProps> {
  variant?: TextVariant
  isRTL?: boolean
}
