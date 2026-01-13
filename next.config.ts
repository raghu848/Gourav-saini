import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Optimize images
  images: {
    unoptimized: true,
  },
  
  // Only use static export for production builds
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: process.env.NODE_ENV === 'production',
  
  // Enable gzip compression
  compress: true,
  
  // Enable Turbopack optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'lucide-react'
    ],
  },
  
  // Explicitly enable Turbopack
  turbopack: {},
  
  // Optimize react production build
  reactStrictMode: true,
  

};

export default nextConfig;