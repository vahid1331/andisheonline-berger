import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
export default defineConfig({
  base: "./",
  resolve: { alias: { "@kits/shadcn": fileURLToPath(new URL("./kits/shadcn/src/Kit.jsx", import.meta.url)) } },
  build: { outDir: "web-build" }
});
