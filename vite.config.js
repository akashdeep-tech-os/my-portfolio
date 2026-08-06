import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      png: { quality: 70, effort: 6 },
      jpg: { quality: 70, effort: 6 },
      webp: { quality: 72, effort: 6 },
      avif: { quality: 60, effort: 6 },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
          icons: ['react-icons'],
          emailjs: ['@emailjs/browser'],
        },
      },
    },
  },
})
