/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  basePath: "/Portfolio",
  assetPrefix: isProd ? "/Portfolio/" : "",
};

export default nextConfig;
