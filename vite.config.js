import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'three': ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing'],
          'maps': ['react-simple-maps'],
        },
      },
    },
    chunkSizeWarningLimit: 1400,
  },
})
