/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images :{
    loader: "akamai",
    path: "",
  },
  basePath: "/https://danieljliu.github.io",
  assetPrefix: "/https://danieljliu.github.io"
}

module.exports = nextConfig
