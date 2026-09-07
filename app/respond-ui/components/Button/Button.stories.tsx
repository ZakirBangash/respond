import type { Meta, StoryObj } from "@storybook/react-native"
import { fn } from "storybook/test"

import { Button } from "./Button"
import { Icon } from "../Icon/Icon"

const meta = {
  title: "respond-ui/Button",
  component: Button,
  args: {
    label: "Continue",
    variant: "primary",
    size: "large",
    onPress: fn(),
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "outline", "link", "danger", "utility"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    loading: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
    isRTL: { control: { type: "boolean" } },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    label: "Save",
    variant: "secondary",
    size: "medium",
  },
}

export const Outline: Story = {
  args: {
    label: "Cancel",
    variant: "outline",
    size: "small",
  },
}

export const Danger: Story = {
  args: {
    label: "Delete",
    variant: "danger",
  },
}

export const Link: Story = {
  args: {
    label: "Learn more",
    variant: "link",
    size: "medium",
  },
}

export const WithIcon: Story = {
  args: {
    label: "Next",
    rightIcon: <Icon icon="check" />,
  },
}

export const Loading: Story = {
  args: {
    label: "Submitting",
    loading: true,
  },
}

export const Disabled: Story = {
  args: {
    label: "Unavailable",
    disabled: true,
  },
}
