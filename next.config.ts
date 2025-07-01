import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  images: {
    domains: ['images.microcms-assets.io'], 
  },
};

export default withBundleAnalyzer(nextConfig);
