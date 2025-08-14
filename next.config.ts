/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/in',
  assetPrefix: '/in/',
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    loader: 'default',
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
  // Ensure CSS is properly processed for static export
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
