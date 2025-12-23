import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Optimize images
  images: {
    unoptimized: true,
  },
  
  // Static export configuration
  output: 'export',
  trailingSlash: true,
  
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
  
  // Add headers for X-Robots-Tag
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
        ],
      },
    ];
  },
};

export default nextConfig;