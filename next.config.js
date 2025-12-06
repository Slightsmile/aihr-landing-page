/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enable static HTML export
  images: {
    unoptimized: true // required if you use <Image> component
  }
};

export default nextConfig;
