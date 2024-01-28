import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import typescript from "@rollup/plugin-typescript"

const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: "src/assets/*",
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
      name: "@flowagent-design/table",
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
        "react-use",
        "@emotion/react",
        "framer-motion",
        "@flowagent-design/icon",
        "@flowagent-design/trigger",
        "@flowagent-design/button",
        "@flowagent-design/checkbox",
        "@flowagent-design/pagination",
        "@flowagent-design/theme",
        "@flowagent-design/system",
        "@flowagent-design/spin",
        "@flowagent-design/empty",
        "@tanstack/react-table",
        "@tanstack/match-sorter-utils",
        "@flowagent-design/select",
        "@flowagent-design/input",
        "chroma-js",
        "react-fast-compare",
        "lodash.debounce",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
          "react-use": "react-use",
          "@emotion/react": "@emotion/react",
          "framer-motion": "framer-motion",
          "@flowagent-design/icon": "@flowagent-design/icon",
          "@flowagent-design/trigger": "@flowagent-design/trigger",
          "@flowagent-design/button": "@flowagent-design/button",
          "@flowagent-design/checkbox": "@flowagent-design/checkbox",
          "@flowagent-design/pagination": "@flowagent-design/pagination",
          "@flowagent-design/theme": "@flowagent-design/theme",
          "@flowagent-design/system": "@flowagent-design/system",
          "@flowagent-design/spin": "@flowagent-design/spin",
          "@flowagent-design/empty": "@flowagent-design/empty",
          "@tanstack/react-table": "@tanstack/react-table",
          "@tanstack/match-sorter-utils": "@tanstack/match-sorter-utils",
          "@flowagent-design/select": "@flowagent-design/select",
          "@flowagent-design/input": "@flowagent-design/input",
          "chroma-js": "chroma-js",
          "react-fast-compare": "react-fast-compare",
          "lodash.debounce": "@lodash/debounce",
        },
      },
    },
  },
})
