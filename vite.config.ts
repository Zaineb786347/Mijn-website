import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use VITE_BASE_URL env variable for GitHub Pages deployment, fallback to '/'
const base = process.env.VITE_BASE_URL || '/'

export default defineConfig({
  plugins: [react()],
  base,
  root: '.',
  publicDir: 'public',
  server: {
    port: 5173,
    strictPort: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
