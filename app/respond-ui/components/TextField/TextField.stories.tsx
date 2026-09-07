import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-native"
import { fn } from "storybook/test"

import { TextField } from "./TextField"

const meta = {
  title: "respond-ui/TextField",
  component: TextField,
  args: {
    placeholder: "Message",
    onChangeText: fn(),
  },
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: function Render(args) {
    const [value, setValue] = useState("")
    return <TextField {...args} value={value} onChangeText={setValue} />
  },
}

export const Multiline: Story = {
  ...Default,
  args: {
    placeholder: "Write a message…",
    multiline: true,
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "Messaging disabled",
    status: "disabled",
    editable: false,
    value: "",
  },
}
