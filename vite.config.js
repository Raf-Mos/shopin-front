import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": process.env.BACKEND_URL,
      "/uploads/":
      process.env.BACKEND_URL,
    },
  },
});
