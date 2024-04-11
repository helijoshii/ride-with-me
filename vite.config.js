import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { qrcode } from "vite-plugin-qrcode";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    qrcode(),
    VitePWA({
      // injectRegister: "auto",
      // registerType: "autoUpdate",
      // devOptions: {
      //   enabled: true,
      // },
      includeAssets: [
        "Vehicle.ico",
        "apple-touch-icon.png",
        "pwa-maskable-192x192.svg",
      ],
      manifest: {
        name: "Ride with me",
        short_name: "Ride with me",
        theme_color: "#ffffff",
        icons: [
          // {
          //   src: "pwa-64x64.png",
          //   sizes: "64x64",
          //   type: "image/png",
          // },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          // {
          //   src: "",
          //   sizes: "512x512",
          //   type: "image/png",
          //   purpose: "maskable",
          // },
        ],
      },
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
