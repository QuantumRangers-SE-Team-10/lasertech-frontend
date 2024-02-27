import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@components/*": ["src/components/*"],
      "@assets/*": ["src/assets/*"],
      "@styles/*": ["src/styles/*"],
      "@pages/*": ["pages/*"],
      "@api/*": ["api/*"],
    },
  },
  // esbuild: {
  //   tsxInject: `import React from 'react'`
  // },
  plugins: [react()],
})
