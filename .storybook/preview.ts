import type { Preview } from "@storybook/react";

const customViewports = {
  smallDevice: {
    name: "smallDevice",
    styles: {
      width: "360px",
      height: "540px",
    },
  },
  mediumDevice: {
    name: "mediumDevice",
    styles: {
      width: "1024px",
      height: "1200px",
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: customViewports,
      defaultViwport: "someDefault",
    },
  },
};

export default preview;
