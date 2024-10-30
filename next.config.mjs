/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com', // Add this line
            },
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com', // New entry for iStock images
            },
        ],
    },
};

export default nextConfig;
