/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images :{
    loader: "akamai",
    path: "",
  },
  basePath: "/out",
  assetPrefix: "/out"
}

module.exports = nextConfig
