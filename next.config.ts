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
  
  // Optimize webpack config for performance
  webpack: (config, { dev, isServer }) => {
    // Reduce bundle size by excluding unused modules
    if (!dev) {
      config.optimization.minimize = true;
      
      // Split chunks for better caching
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    
    return config;
  },
  
  // Optimize react production build
  reactStrictMode: true,
  
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'lucide-react'
    ],
  },
};

export default nextConfig;