import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-native"
import { fn } from "storybook/test"

import { Switch } from "./Switch"

const meta = {
  title: "respond-ui/Switch",
  component: Switch,
  args: {
    label: "Block contact",
    labelPosition: "left",
    onValueChange: fn(),
  },
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: function Render(args) {
    const [value, setValue] = useState(false)
    return (
      <Switch
        {...args}
        value={value}
        onValueChange={(next) => {
          setValue(next)
          args.onValueChange?.(next)
        }}
      />
    )
  },
}
