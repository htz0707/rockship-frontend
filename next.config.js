/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
};

module.exports = {
  output: nextConfig.output,
  optimizeFonts: false,
  env: {
    API_AMPLITUDE_KEY: "ccd79d9a84fca7bc1873cf57eb7823f9",
  },
};
