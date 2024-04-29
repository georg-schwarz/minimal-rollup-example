import { defineConfig as defineViteConfig } from "vite";
import esmShim from "@rollup/plugin-esm-shim";

import { nodeResolve } from "@rollup/plugin-node-resolve";

export default defineViteConfig({
  root: "",
  cacheDir: "node_modules/.vite/app",

  plugins: [
  ],

  build: {
    outDir: "dist/",
    emptyOutDir: true,
    reportCompressedSize: true,

    sourcemap: true,

    commonjsOptions: {
      transformMixedEsModules: true,
    },

    lib: {
      entry: "src/app.ts",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      plugins: [
        nodeResolve(), 
        esmShim(),
      ],
    },
  },
});
