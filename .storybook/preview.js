/** @type { import('@storybook/react').Preview } */

import "../src/styles/main.scss"

export const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const globalTypes = {
  scheme: {
    name: "Scheme",
    description: "Global scheme for components",
    defaultValue: "light",
    toolbar: {
      icon: "mirror",
      items: ["light", "dark"],
      dynamicTitle: true,
    }
  }
}
