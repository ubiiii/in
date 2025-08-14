/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/in' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/in/' : '',
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    loader: 'default',
    path: process.env.NODE_ENV === 'production' ? '/in' : '',
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'assets.aceternity.com' },
      { protocol: 'https', hostname: 'cdn.simpleicons.org' },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ensure static assets are properly handled
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
};

module.exports = nextConfig;
