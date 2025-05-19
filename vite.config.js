import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    jsxRuntime: 'classic'  // 👈 forces the need for `import React from "react"` and ensures compatibility
  })]
})
