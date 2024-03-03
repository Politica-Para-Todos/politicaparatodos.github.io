/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  images: {
    unoptimized: true
  },
  output: 'standalone',
  transpilePackages: ['antd', '@ant-design']
}

module.exports = nextConfig;
