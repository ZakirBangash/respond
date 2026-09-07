import { StyleSheet, View } from "react-native"

import { formatDate } from "@/utils/formatDate"
import { Icon, Text } from "respond-ui"
import { alpha, border, fill, mainContent, radius, systemScale } from "respond-ui/foundations"

import type { ChatMessage } from "../chat.types"

type MessageBubbleProps = {
  message: ChatMessage
  isGroupStart: boolean
}

export const MessageBubble = ({ message, isGroupStart }: MessageBubbleProps) => {
  const isMine = message.isMine

  return (
    <View style={[styles.row, isMine ? styles.rowMine : styles.rowTheirs]}>
      <View
        style={[
          styles.bubble,
          isMine ? styles.bubbleMine : styles.bubbleTheirs,
          isGroupStart && (isMine ? styles.tailMine : styles.tailTheirs),
        ]}
      >
        <Text variant="paragraph-m-regular" style={isMine ? styles.textMine : styles.textTheirs}>
          {message.text}
        </Text>
        <View style={styles.meta}>
          <Text variant="caption-s-regular" style={isMine ? styles.timeMine : styles.timeTheirs}>
            {formatDate(message.createdAt, "p")}
          </Text>
          {isMine && <Icon icon="check" size={12} color={alpha.white[70]} />}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bubble: {
    borderRadius: radius[5],
    maxWidth: "78%",
    paddingHorizontal: systemScale.size14,
    paddingVertical: systemScale.size10,
  },
  bubbleMine: {
    backgroundColor: fill.brandRegular,
  },
  bubbleTheirs: {
    backgroundColor: fill.white,
    borderColor: border.default,
    borderWidth: StyleSheet.hairlineWidth,
  },
  meta: {
    alignItems: "center",
    alignSelf: "flex-end",
    flexDirection: "row",
    gap: systemScale.size4,
    marginTop: systemScale.size4,
  },
  row: {
    flexDirection: "row",
  },
  rowMine: {
    justifyContent: "flex-end",
  },
  rowTheirs: {
    justifyContent: "flex-start",
  },
  tailMine: {
    borderTopEndRadius: radius[1],
  },
  tailTheirs: {
    borderTopStartRadius: radius[1],
  },
  textMine: {
    color: mainContent.invert,
  },
  textTheirs: {
    color: mainContent.primary,
  },
  timeMine: {
    color: alpha.white[70],
  },
  timeTheirs: {
    color: mainContent.tertiary,
  },
})
