import Link from "next/link";
import "./globals.css";
import React from 'react';
import {Inter} from "next/font/google";
import {client} from "../tina/__generated__/client";
import {Footer} from "../components/Footer";

const inter = Inter({subsets: ["latin"], variable: "--font-inter"});

export const metadata = {
    title: "LocalCause Site",
    description: "Built with LocalCause",
};

export default async function RootLayout({
  children,
                                         }: {
  children: React.ReactNode;
}) {
    let globalData;
    try {
        // Assuming index.json is the singleton file connection
        const globalResponse = await client.queries.global({relativePath: "index.json"});
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
          {"--primary-color": primaryColor} as React.CSSProperties
      }>
      <body className={`${inter.variable} antialiased`}>
      <div className="flex flex-col min-h-screen">
          <header className="p-4 border-b bg-white">
              <div className="max-w-7xl mx-auto flex justify-between items-center">
                  <Link href="/" className="font-bold text-xl text-primary">
                      {globalData?.global?.logo ? (
                          <img src={globalData.global.logo} alt="Logo" className="h-10"/>
                      ) : (
                          <span>{globalData?.global?.organizationName}</span>
                      )}
                  </Link>
                  <nav className="hidden md:flex gap-6">
                      {globalData?.global?.navigation?.map((nav: any, i: number) => (
                          <Link key={i} href={nav?.url || "#"}
                                className="text-gray-600 hover:text-primary transition-colors font-medium">
                              {nav?.label}
                          </Link>
                      ))}
                  </nav>
              </div>
          </header>

          <main className="flex-grow">
              {children}
          </main>

          <Footer data={globalData?.global}/>
      </div>
      </body>
    </html>
  );
}
