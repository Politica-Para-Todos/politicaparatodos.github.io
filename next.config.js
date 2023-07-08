/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = {
  images: {
    loader: "akamai",
    path: "",
  },
};

const nextConfig = {
  basePath: 'ppt-ui'
}

module.exports = nextConfig;
