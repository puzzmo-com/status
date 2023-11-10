
const production = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: production ? '/' : '',
  reactStrictMode: true,
  swcMinify: true,
  basePath: "status"
}

module.exports = nextConfig
