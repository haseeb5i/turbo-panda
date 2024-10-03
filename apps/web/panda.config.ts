import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ["@pandacss/dev/presets", "@repo/ui/preset"],

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./app/**/*.{ts,tsx}", "../../packages/ui-lib/src/**/*.{ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "../../packages/styled-system",
  jsxFramework: "react",
  importMap: "@repo/styled",
  syntax: "object-literal",
});
