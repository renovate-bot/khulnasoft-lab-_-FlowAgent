import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import typescript from "@rollup/plugin-typescript"

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
      name: "@flowagent-design/empty",
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
        "@flowagent-design/icon",
        "@flowagent-design/image",
        "@flowagent-design/config-provider",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDom",
          "@emotion/react": "@emotion/react",
          "framer-motion": "framer-motion",
          "@flowagent-design/system": "@flowagent-design/system",
          "@flowagent-design/theme": "@flowagent-design/theme",
          "@flowagent-design/icon": "@flowagent-design/icon",
          "@flowagent-design/image": "@flowagent-design/image",
          "@flowagent-design/config-provider":
            "@flowagent-design/config-provider",
        },
      },
    },
  },
})
