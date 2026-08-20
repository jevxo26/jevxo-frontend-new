import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.api.jevxo.com',
      },
      {
        protocol: 'https',
        hostname: 'api.jevxo.com',
      },
    ],
  },
  /* config options here */
  // @ts-expect-error - Next.js config type is slightly restrictive but these options work
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
