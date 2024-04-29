/// <reference types='vitest' />
import { defineConfig } from 'vite';
import esmShim from '@rollup/plugin-esm-shim';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/app',

  plugins: [nxViteTsPaths()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: '../../dist/apps/app',
    emptyOutDir: true,
    reportCompressedSize: true,

    sourcemap: true,

    commonjsOptions: {
      transformMixedEsModules: true,
    },

    lib: {
      entry: 'src/main.ts',
      fileName: 'main',
      formats: ['es'],
    },

    rollupOptions: {
      plugins: [
        esmShim(),
      ],
    },
  },
});
