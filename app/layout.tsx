import "./globals.css";
import React from 'react';
import {Inter} from "next/font/google";
import {client} from "../tina/__generated__/client";
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";
import {Metadata} from 'next';

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

    return {
        title: globalData?.global?.organizationName || "LocalCause Site",
        description: "Built with LocalCause",
        icons: {
            icon: globalData?.global?.favicon || '/icon.svg',
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
                social: {}
            }
        };
    }

    const primaryColor = globalData?.global?.brandColor || "#000000";

    return (
        <html lang="en" style={
            { "--primary-color": primaryColor } as React.CSSProperties
        }>
            <body className={`${inter.variable} antialiased`}>
                <div className="flex flex-col min-h-screen">
                    <Header data={globalData?.global}/>

                    <main className="flex-grow">
                        {children}
                    </main>

                    <Footer data={globalData?.global} />
                </div>
            </body>
        </html>
    );
}
