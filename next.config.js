/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // required if you're using next/image
  },
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
};

module.exports = nextConfig;
