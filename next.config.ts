import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Vercel 배포를 위해 output: 'export' 제거
  // output: 'export',
  // trailingSlash: true,
  // images: {
  //   unoptimized: true,
  // },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
