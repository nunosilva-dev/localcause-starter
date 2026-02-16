import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'assets.tina.io',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/admin",
                destination: "/admin/index.html",
                permanent: true,
            },
        ];
    },
    // TinaCMS usually handles this, but explicit redirect helps if Tina's rewrite doesn't catch it in pure Next dev
};

export default nextConfig;
