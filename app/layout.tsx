import "./globals.css";
import React from 'react';
import { Inter } from "next/font/google";
import { client } from "../tina/__generated__/client";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export async function generateMetadata(): Promise<Metadata> {
    let globalData;
    try {
        const globalResponse = await client.queries.global({ relativePath: "index.json" });
        globalData = globalResponse.data;
    } catch (e) {
        // Fallback if Tina hasn't generated yet
        return {
            title: "LocalCause Site",
            description: "Built with LocalCause",
            icons: {
                icon: '/icon.svg'
            }
        };
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const locale = (globalData?.global as any)?.locale || 'en_US';

    return {
        metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'),
        title: {
            default: globalData?.global?.organizationName || "LocalCause Site",
            template: `%s | ${globalData?.global?.organizationName || "LocalCause Site"}`
        },
        description: "Built with LocalCause",
        icons: {
            icon: globalData?.global?.favicon || '/icon.svg',
        },
        openGraph: {
            title: globalData?.global?.organizationName || "LocalCause Site",
            description: "Built with LocalCause",
            url: '/',
            siteName: globalData?.global?.organizationName || "LocalCause Site",
            locale: locale,
            type: 'website',
            images: [
                {
                    url: globalData?.global?.logo || '/icon.svg',
                    width: 1200,
                    height: 630,
                    alt: globalData?.global?.organizationName || "LocalCause Site",
                }
            ],
        },
    };
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    let globalData;
    try {
        // Assuming index.json is the singleton file connection
        const globalResponse = await client.queries.global({ relativePath: "index.json" });
        globalData = globalResponse.data;
    } catch (e) {
        console.log("Global data not found or Tina not generated yet.", e);
        // Fallback
        globalData = {
            global: {
                brandColor: "#000000",
                organizationName: "Your Organization",
                logo: "",
                navigation: [],
                social: {},
                locale: "en_US"
            }
        };
    }

    const primaryColor = globalData?.global?.brandColor || "#000000";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const locale = (globalData?.global as any)?.locale || 'en_US';
    const lang = locale.split(/[-_]/)[0]; // Extract language code (e.g. 'en' from 'en_US')

    return (
        <html lang={lang} style={
            { "--primary-color": primaryColor } as React.CSSProperties
        }>
            <body className={`${inter.variable} antialiased`}>
                <div className="flex flex-col min-h-screen">
                    <Header data={globalData?.global} />

                    <main className="flex-grow">
                        {children}
                    </main>

                    <Footer data={globalData?.global} />
                </div>
            </body>
        </html>
    );
}
