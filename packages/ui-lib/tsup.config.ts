import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/index.ts", "src/preset.ts"],
  format: ["esm", "cjs"],
  external: ["@repo/styled", "react"],
  // dts: true,
  banner: {
    js: "'use client'",
  },
  ...options,
}));
