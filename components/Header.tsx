"use client";

import Link from "next/link";
import React, {useState} from "react";
import {Menu, X} from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Header = ({data}: { data: any }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="p-4 border-b bg-white relative z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/" className="font-bold text-xl text-primary flex items-center gap-2">
                    {data?.logo ? (
                        <img src={data.logo} alt="Logo" className="h-10"/>
                    ) : (
                        <>
                            {(data?.showPlaceholderLogo !== false) && (
                                <img src="/icon.svg" alt="Logo" className="h-10 w-10"/>
                            )}
                            <span>{data?.organizationName}</span>
                        </>
                    )}
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {data?.navigation?.map((nav: any, i: number) => (
                        <Link key={i} href={nav?.url || "#"}
                              className="text-gray-600 hover:text-primary transition-colors font-medium">
                            {nav?.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-600 hover:text-primary focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMenuOpen && (
                <div
                    className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg animate-in slide-in-from-top-2">
                    <nav className="flex flex-col p-4 space-y-4">
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {data?.navigation?.map((nav: any, i: number) => (
                            <Link
                                key={i}
                                href={nav?.url || "#"}
                                className="text-gray-600 hover:text-primary transition-colors font-medium text-lg block py-2 border-b border-gray-100 last:border-0"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {nav?.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};
