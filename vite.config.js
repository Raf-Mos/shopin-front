import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["lucide-react"],
    },
  },
  server: {
    proxy: {
      "/api/": "https://shopin-backend-kngmelpnl-raf-mos-projects.vercel.app/",
      "/uploads/":
        "https://shopin-backend-kngmelpnl-raf-mos-projects.vercel.app/",
    },
  },
});
