import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  webpack: (config) => {
    // Required for Docker deployment
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  webServer: {
    settings: {
      hostname: '0.0.0.0'
    }
  }
};

export default nextConfig;