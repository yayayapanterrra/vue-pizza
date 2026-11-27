import { fileURLToPath, URL } from "url";

import { defineConfig, searchForWorkspaceRoot } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",
  },
  resolve: {
    dedupe: ["vue"],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 8080,
    fs: {
      allow: [
        searchForWorkspaceRoot(fileURLToPath(new URL(".", import.meta.url))),
        fileURLToPath(new URL("../template/src", import.meta.url)),
      ],
    },
    proxy: {
      "/api": {
        target: "http://backend:3000/",
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
