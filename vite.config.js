import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    // 允许来自 ngrok 分配的主机名（只在调试时使用）
    allowedHosts: [
      'fernande-coccal-nondietetically.ngrok-free.dev'
    ],
    open: true
  }
});


