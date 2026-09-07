import type { StorybookConfig } from "@storybook/react-native"

const main: StorybookConfig = {
  stories: ["../app/respond-ui/components/**/*.stories.?(ts|tsx)"],
  deviceAddons: ["@storybook/addon-ondevice-controls", "@storybook/addon-ondevice-actions"],
}

export default main
