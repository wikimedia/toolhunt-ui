import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/

export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  return defineConfig({
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
      proxy: {
        // string shorthand: http://localhost:8082/api -> http://localhost:5000/api
        '/api': process.env.VITE_FLASK_BACKEND_URL,
        // string shorthand: http://localhost:8082/openapi.json -> http://localhost:5000/openapi.json
        '/openapi.json': {
          target: process.env.VITE_FLASK_BACKEND_URL,
          changeOrigin: true,
        },
      }
    },
    test: {
      globals: true,
      environment: "jsdom",
      deps: {
        inline: ["vuetify"],
      },
    },
  });
  
}
  