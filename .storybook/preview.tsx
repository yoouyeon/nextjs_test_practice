import type { Preview } from "@storybook/react";
import { initialize, mswDecorator } from "msw-storybook-addon";
import React from "react";
import { RecoilRoot } from "recoil";

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [
  mswDecorator,
  (Story) => (
    // <ThemeProvider theme={theme}>
    <RecoilRoot>
      <Story />
    </RecoilRoot>
    // </ThemeProvider>
  ),
];

if (typeof global.process === "undefined") {
  const { worker } = require("../src/mocks/browser");
  worker.start();
}

const preview: Preview = {
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

export default preview;
