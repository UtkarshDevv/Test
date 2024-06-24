import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
     outDir: 'dist',
    rollupOptions: {
      external: ['/src/main.jsx', '/src/index.html', '/src/App.jsx', '/src/App.css', '/src/index.css'], // Add any other modules or files here
    },
  },
server: {
host: true,
strictPort: true,
port: 8000,
}
})
