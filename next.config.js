/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  outputFileTracingRoot: __dirname,
  // Force HTTPS only in production
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://www.drgauravsainiortho.com' : '',
};

module.exports = nextConfig;