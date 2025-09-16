import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    // allowlist hosts for forwarded tunnels (ngrok)
    allowedHosts: ['https://fbab19253e39.ngrok-free.app', 'localhost'],
    // set origin so vite uses correct host when generating HMR client URL
    origin: 'https://fbab19253e39.ngrok-free.app',
    host: true,
  }

})
