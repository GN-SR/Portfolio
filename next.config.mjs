/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  basePath: "/Portfolio", // Change to your GitHub repo name
  assetPrefix: isProd ? "/Portfolio/" : "",
  images: {
    unoptimized: true, // Needed for static export
  },
};

export default nextConfig;
