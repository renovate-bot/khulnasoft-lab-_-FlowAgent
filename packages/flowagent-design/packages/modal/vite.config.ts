import typescript from "@rollup/plugin-typescript"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  build: {
    sourcemap: true,
    minify: "esbuild",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@flowagent-design/modal",
      fileName: (format) => `${format}/index.js`,
    },
    rollupOptions: {
      plugins: [
        typescript({
          tsconfig: path.resolve(__dirname, "tsconfig.json"),
          compilerOptions: {
            rootDir: path.resolve(__dirname, "src"),
            outDir: path.resolve(__dirname, "dist", "types"),
            declaration: true,
          },
          include: path.resolve(__dirname, "src/**"),
          exclude: path.resolve(__dirname, "node_modules/**"),
        }),
      ],
      external: [
        "react",
        "react-dom",
        "@emotion/react",
        "framer-motion",
        "@flowagent-design/system",
        "@flowagent-design/theme",
        "@flowagent-design/button",
        "@flowagent-design/config-provider",
        "@flowagent-design/icon",
        "react-hotkeys-hook",
        "react-focus-lock",
        "@flowagent-design/trigger",
        "uuid",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
          "@emotion/react": "@emotion/react",
          "framer-motion": "framer-motion",
          "@flowagent-design/system": "@flowagent-design/system",
          "@flowagent-design/theme": "@flowagent-design/theme",
          "@flowagent-design/button": "@flowagent-design/button",
          "@flowagent-design/config-provider": "@flowagent-design/config-provider",
          "@flowagent-design/icon": "@flowagent-design/icon",
          "react-hotkeys-hook": "react-hotkeys-hook",
          "react-focus-lock": "react-focus-lock",
          "@flowagent-design/trigger": "@flowagent-design/trigger",
          uuid: "uuid",
        },
      },
    },
  },
})
