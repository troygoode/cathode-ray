import type { NextConfig } from "next";
import path from "path";

const __dirname = new URL(".", import.meta.url).pathname;

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  // param defined as "any" in Next's NextJsWebpackConfig
  webpack: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./"),
    };
    return config;
  },
};

export default nextConfig;
