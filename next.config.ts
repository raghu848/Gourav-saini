import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Optimize images
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  
  // Only use static export for production builds
  output: 'export',
  trailingSlash: true,
  
  // Enable gzip compression
  compress: true,
  
  // Enable experimental optimizations
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      'react-icons'
    ],
  },
  
  // Optimize react production build
  reactStrictMode: true,
  
  // Ensure metadata is consistent
  poweredByHeader: false,
};

export default nextConfig;