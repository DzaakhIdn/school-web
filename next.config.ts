import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
