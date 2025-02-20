import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: "Cathode Ray",
    name: "Cathode Ray Terminal Simulator",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
      },
      {
        src: "/icons/logo192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        src: "/icons/logo512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    start_url: "/",
    display: "standalone",
    theme_color: "#000000",
    background_color: "#ffffff",
  };
}
