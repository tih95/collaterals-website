import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
export const customTheme = {
  ...theme,
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, serif",
    mono: "Menlo, monospace",
  },
  breakpoints: ['550px', '768px', '1096px']
};