import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
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
};

export default nextConfig;
