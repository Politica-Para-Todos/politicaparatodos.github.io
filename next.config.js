/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  basePath: '/ppt-ui',
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  images: {
    unoptimized: true
  },
  output: 'export'
}

module.exports = nextConfig;
