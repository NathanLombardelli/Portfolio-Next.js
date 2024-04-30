// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {

    output: 'export',

    // Optional: Change the output directory `out` -> `dist`
    distDir: 'dist',
    images: {unoptimized: true}
};

export default nextConfig;
