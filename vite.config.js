import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";

let config;

// https://vitejs.dev/config/
if (process.env.NODE_ENV == "production") {
  config = defineConfig({
    plugins: [reactRefresh()],
  });
} else {
  config = defineConfig({
    // Vi er nødt til at have den her med indtil Relay får fikset den her: https://github.com/facebook/relay/pull/3465
    define: {
      global: {
        ErrorUtils: null,
      },
    },

    plugins: [reactRefresh()],
  });
}

export default config;
