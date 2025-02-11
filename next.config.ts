import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  eslint: {
    dirs: [
      "/src/app",
      "/src/components",
      "/src/context",
      "/src/hooks",
      "/src/lib",
    ],
  },
};

export default nextConfig;
