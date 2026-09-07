import { useState } from "react"
import { Pressable, StyleSheet, View } from "react-native"
import Svg, { Path } from "react-native-svg"

import { translate } from "@/i18n/translate"
import { TextField } from "respond-ui"
import { base, border, fill, radius, systemScale } from "respond-ui/foundations"

type MessageComposerProps = {
  onSend: (text: string) => void
  disabled?: boolean
}

const SendGlyph = ({ color }: { color: string }) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <Path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
    <Path d="m21.854 2.147-10.94 10.939" />
  </Svg>
)

export const MessageComposer = ({ onSend, disabled = false }: MessageComposerProps) => {
  const [draft, setDraft] = useState("")
  const canSend = !disabled && draft.trim().length > 0

  const handleSend = () => {
    if (disabled) return
    const text = draft.trim()
    if (!text) return
    onSend(text)
    setDraft("")
  }

  return (
    <View style={styles.container}>
      <TextField
        value={draft}
        onChangeText={setDraft}
        placeholderTx={disabled ? "chatScreen:blockedPlaceholder" : "chatScreen:messagePlaceholder"}
        multiline
        editable={!disabled}
        status={disabled ? "disabled" : undefined}
        containerStyle={styles.field}
        inputWrapperStyle={styles.fieldWrapper}
        style={styles.fieldInput}
      />
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={translate("chatScreen:send")}
        disabled={!canSend}
        onPress={handleSend}
        style={({ pressed }) => [
          styles.send,
          !canSend && styles.sendDisabled,
          pressed && styles.pressed,
        ]}
      >
        <SendGlyph color={base[0]} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    backgroundColor: fill.white,
    borderColor: border.default,
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    paddingHorizontal: systemScale.size16,
    paddingVertical: systemScale.size10,
  },
  field: {
    flex: 1,
  },
  fieldInput: {
    maxHeight: 100,
  },
  fieldWrapper: {
    alignItems: "center",
    backgroundColor: fill.elevated,
    borderRadius: radius[6],
    borderWidth: 0,
    minHeight: 0,
  },
  pressed: {
    opacity: 0.7,
  },
  send: {
    alignItems: "center",
    backgroundColor: fill.brandRegular,
    borderRadius: radius.full,
    height: systemScale.size40,
    justifyContent: "center",
    marginStart: systemScale.size10,
    width: systemScale.size40,
  },
  sendDisabled: {
    backgroundColor: fill.disabled,
  },
})
