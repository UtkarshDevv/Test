import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
server: {
<<<<<<< HEAD
host: true,
strictPort: true,
port: 8000,
=======
  host:true,
    port: process.env.PORT || 3000

>>>>>>> ce0e642225aa32531435f31e9c0ba60461c1467b
}
})
