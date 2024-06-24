import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
     outDir: 'dist',
    rollupOptions: {
      external: ['/src/main.jsx'], // Add any other modules or files here
    },
  },
server: {
host: true,
strictPort: true,
port: 8000,
}
})
