import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

function serviceDetailsRewrite() {
  return {
    name: "service-details-rewrite",

    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith("/service-details/")) {
          req.url = "/service-details.html";
        }
        next();
      });
    },

    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith("/service-details/")) {
          req.url = "/service-details.html";
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [tailwindcss(), serviceDetailsRewrite()],

  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        contact: resolve(__dirname, "contact.html"),
        blogDetails: resolve(__dirname, "blog-details.html"),
        serviceDetails: resolve(__dirname, "service-details.html"),
        studyAustralia: resolve(__dirname, "study-australia.html"),
        courses: resolve(__dirname, "courses.html"),
        services: resolve(__dirname, "services.html"),
        about: resolve(__dirname, "about.html"),
        // blog: resolve(__dirname, "blog.html"),
      },
    },
  },
});