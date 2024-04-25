import { defineConfig as defineViteConfig } from "vite";

import dts from "vite-plugin-dts";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default defineViteConfig({
  root: "",
  cacheDir: "node_modules/.vite/app",

  plugins: [
    dts({
      entryRoot: "src",
      tsconfigPath: "tsconfig.json",
    }),
  ],

  build: {
    outDir: "dist/",
    emptyOutDir: true,
    reportCompressedSize: true,

    commonjsOptions: {
    },
    lib: {
      entry: "src/app.ts",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      plugins: [nodeResolve(), commonjs()],
    },
  },
});
