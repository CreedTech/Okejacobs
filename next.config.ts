import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000, // 1 year
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent-lhr6-1.cdninstagram.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'interactive-examples.mdn.mozilla.net',
        port: '',
        pathname: '/**',
      },
    ],
    qualities: [75, 100],
  },
  // Enable image optimization
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
