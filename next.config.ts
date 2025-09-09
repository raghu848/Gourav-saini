import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true
  },
  // Remove the explicit appDir and dir configuration as they might be causing issues
  // The app directory is automatically recognized in Next.js 13+
};

export default nextConfig;