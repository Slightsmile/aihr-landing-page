const nextConfig = {
  output: 'export', // enable static HTML export
  reactStrictMode: true,
  images: {
    unoptimized: true // required if you use <Image> component
  }
};

export default nextConfig;
