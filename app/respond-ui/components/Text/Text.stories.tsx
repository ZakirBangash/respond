import type { Meta, StoryObj } from "@storybook/react-native"

import { Text } from "./Text"

const meta = {
  title: "respond-ui/Text",
  component: Text,
  args: {
    children: "The quick brown fox",
    variant: "paragraph-l-regular",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "display-1",
        "display-2",
        "display-3",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "paragraph-l-regular",
        "paragraph-m-regular",
        "paragraph-s-regular",
        "paragraph-l-bold",
        "paragraph-m-bold",
        "paragraph-s-bold",
        "caption-l-regular",
        "caption-m-regular",
        "caption-s-regular",
        "caption-l-bold",
        "caption-m-bold",
        "caption-s-bold",
      ],
    },
    isRTL: { control: { type: "boolean" } },
  },
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Paragraph: Story = {}

export const Heading: Story = {
  args: {
    children: "Ready for launch",
    variant: "h1",
  },
}

export const Display: Story = {
  args: {
    children: "Respond",
    variant: "display-2",
  },
}

export const Caption: Story = {
  args: {
    children: "Helper text",
    variant: "caption-s-regular",
  },
}
