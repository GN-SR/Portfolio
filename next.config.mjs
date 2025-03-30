/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",  // Export static site
  basePath: isProd ? "/Portfolio" : "",  // Ensure paths work
  assetPrefix: isProd ? "/Portfolio/" : "", // Fix static assets like images
  images: {
    unoptimized: true, // Fix for GitHub Pages
  },
};

export default nextConfig;
