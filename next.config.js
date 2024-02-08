/** @type {import('next').NextConfig} */

const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'app/styles')],
  //   reactStrictMode: true
  //   // disable css-modules component styling
  //   // webpack(config) {
  //   //   config.module.rules.forEach((rule) => {
  //   //     const { oneOf } = rule;
  //   //     if (oneOf) {
  //   //       oneOf.forEach((one) => {
  //   //         if (!`${one.issuer?.and}`.includes('_app')) return;
  //   //         one.issuer.and = [path.resolve(__dirname)];
  //   //       });
  //   //     }
  //   //   })
  //   //   return config;
  //   // }
  // },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'upload.wikimedia.org'
    }]
  }
}
