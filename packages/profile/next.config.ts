import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // Static hosts (e.g. Cloudflare Pages) have no Image Optimization API; without this,
  // <Image> points at /_next/image?... and the photo 404s in production.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
