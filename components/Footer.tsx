import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Facebook, Instagram } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Footer = ({ data }: { data: any }) => {
    const orgName = data?.organizationName || "LocalCause Partner";

    return (
        <footer className="bg-gray-50 mt-auto border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">

                {/* Main Footer Content: 3 Columns on Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* 1. Brand Section */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        {data?.logo ? (
                            <div className="relative h-12 w-40 mb-2">
                                <Image
                                    src={data.logo}
                                    alt={orgName}
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        ) : (
                            <div className="flex items-center gap-2 mb-2">
                                {(data?.showPlaceholderLogo !== false) && (
                                    <Image src="/icon.svg" alt={orgName} width={40} height={40} className="h-10 w-10" />
                                )}
                                <span className="text-xl font-bold text-gray-900">{orgName}</span>
                            </div>
                        )}
                        {data?.slogan && (
                            <p className="text-sm text-gray-600 mt-4 leading-relaxed max-w-sm">
                                {data.slogan}
                            </p>
                        )}
                    </div>

                    {/* 2. Social Section - Centered */}
                    <div className="flex flex-col items-center justify-center space-y-4">
                        {(data?.social?.facebook || data?.social?.instagram) && (
                            <>
                                <span
                                    className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Follow Us</span>
                                <div className="flex gap-4">
                                    {data?.social?.facebook && (
                                        <a
                                            href={data.social.facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-[#1877F2] transition-all p-3 rounded-full hover:bg-blue-50"
                                            aria-label="Facebook"
                                        >
                                            <Facebook size={24} />
                                        </a>
                                    )}
                                    {data?.social?.instagram && (
                                        <a
                                            href={data.social.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-[#E4405F] transition-all p-3 rounded-full hover:bg-pink-50"
                                            aria-label="Instagram"
                                        >
                                            <Instagram size={24} />
                                        </a>
                                    )}
                                </div>
                            </>
                        )}
                    </div>

                    {/* 3. Admin Section - Right Aligned */}
                    <div className="flex flex-col items-center md:items-end justify-center">
                        <Link
                            href="/admin"
                            className="group text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-primary flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg hover:border-primary transition-all"
                        >
                            Staff Login
                            <ExternalLink size={14}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar - Spans Full Width */}
                <div
                    className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} {orgName}</p>

                    <p className="mt-4 md:mt-0">
                        Built with{" "}
                        <a
                            href="https://localcause.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-gray-600 hover:text-primary hover:underline decoration-primary transition-colors"
                        >
                            LocalCause
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};