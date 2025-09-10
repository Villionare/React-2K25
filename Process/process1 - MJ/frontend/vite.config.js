import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ]
  ,
  server: {
    // allowlist hosts for forwarded tunnels (ngrok)
    allowedHosts: ['ba89ca6928e3.ngrok-free.app', 'localhost'],
    // set origin so vite uses correct host when generating HMR client URL
    origin: 'https://ba89ca6928e3.ngrok-free.app',
    host: true,
  }
})
