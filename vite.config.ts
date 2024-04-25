import { defineConfig as defineViteConfig } from "vite";
import commonjs from "@rollup/plugin-commonjs";

export default defineViteConfig({
  root: "",
  cacheDir: "node_modules/.vite/app",

  plugins: [],

  build: {
    outDir: "dist/",
    emptyOutDir: true,
    reportCompressedSize: true,

    commonjsOptions: {
      // transformMixedEsModules: true,
      // defaultIsModuleExports: false,
      // include: [/.js$/],
    },
    lib: {
      entry: "src/app.js",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      plugins: [commonjs()],
    },
  },
});
