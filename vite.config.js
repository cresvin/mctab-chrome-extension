import { crx } from "@crxjs/vite-plugin";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import manifest from "./manifest";

export default defineConfig({
  plugins: [react(), crx({ manifest })],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        installed: resolve(__dirname, "src/pages/installed/index.html"),
        newtab: resolve(__dirname, "src/pages/new-tab/index.html"),
      },
    },
  },
});
