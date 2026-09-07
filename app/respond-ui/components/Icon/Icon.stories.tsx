import type { Meta, StoryObj } from "@storybook/react-native"
import { View } from "react-native"
import { fn } from "storybook/test"

import { systemScale } from "respond-ui/foundations"

import { Icon, PressableIcon } from "./Icon"
import { iconRegistry, type IconTypes } from "./iconRegistry"

const iconOptions = Object.keys(iconRegistry) as IconTypes[]

const meta = {
  title: "respond-ui/Icon",
  component: Icon,
  args: {
    icon: "settings" as IconTypes,
    size: 24,
  },
  argTypes: {
    icon: {
      control: { type: "select" },
      options: iconOptions,
    },
  },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Pressable: Story = {
  render: ({ icon, size, color }) => (
    <PressableIcon icon={icon} size={size} color={color} onPress={fn()} />
  ),
}

export const Gallery: Story = {
  render: () => (
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: systemScale.size16 }}>
      {iconOptions.map((icon) => (
        <Icon key={icon} icon={icon} size={24} />
      ))}
    </View>
  ),
}
