import type {NextConfig} from "next";

const nextConfig: NextConfig = {
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
