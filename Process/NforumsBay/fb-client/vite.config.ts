import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "localhost",
    port: 5174,
    strictPort: true,
    origin: "http://localhost:5174",
    hmr: {
      host: "f4ce2728549a.ngrok-free.app", // Your ngrok host
      protocol: "wss", // ngrok uses wss for WebSocket
    },
  },
});