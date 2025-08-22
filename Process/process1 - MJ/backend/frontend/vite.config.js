import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss()
  ],
  server: {
    port: 5173,
    allowedHosts: [
      '0040a66b79bf.ngrok-free.app', // your ngrok domain
    ]
  }

})
