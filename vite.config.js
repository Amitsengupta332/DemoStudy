import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],

  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        contact: resolve(__dirname, "contact.html"),
        blogDetails: resolve(__dirname, "blog-details.html"),
        serviceDetails: resolve(__dirname, "service-details.html"),
        studyAustralia: resolve(__dirname, "study-australia.html"),
      },
    },
  },
});