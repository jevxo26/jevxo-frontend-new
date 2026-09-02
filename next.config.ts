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
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    // Optimize memory usage during production builds for limited environments (e.g. VPS/Docker)
    cpus: 1,
    workerThreads: false,
    memoryBasedWorkersCount: true,
  },
};

export default nextConfig;
