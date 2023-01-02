import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    watch: {
      usePolling: true, // needed for hot reloads
    },
    host: true, // needed for the Docker Container port mapping to work
    hmr: {
      clientPort: 8082,
    },
    strictPort: true,
    port: 8082, // needs to be specified
  },
});
