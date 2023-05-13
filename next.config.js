const path = require("path");

/** @type {import('next').NextConfig} */
module.exports = {
  
  reactStrictMode: true,
  output: "standalone",
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
};
