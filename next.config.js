/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
};
const path = require('path')

module.exports = {
  output: nextConfig.output,
  optimizeFonts: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "./src/styles/common/main.scss";`
  },
};
