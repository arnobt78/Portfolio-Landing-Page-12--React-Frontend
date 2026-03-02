import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        /* Split Three.js/R3F and react-simple-maps into separate chunks for better caching; app bundle stays small. */
        manualChunks: {
          'three': ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing'],
          'maps': ['react-simple-maps'],
        },
      },
    },
    /* Three.js bundle is large; raise limit to avoid build warning. */
    chunkSizeWarningLimit: 1400,
  },
})
