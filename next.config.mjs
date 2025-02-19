/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'docs',
    basePath: '/next-notification',
    images: {
        unoptimized: true, // Required for GitHub Pages to serve images correctly
      },
};

export default nextConfig;
