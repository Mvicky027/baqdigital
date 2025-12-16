import Link from "next/link"
import Image from "next/image"
import type React from "react"

interface AuthLayoutProps {
    children: React.ReactNode
    title: string
    subtitle: string
    imagePosition?: "left" | "right"
    brandingTitle?: React.ReactNode
    brandingSubtitle?: React.ReactNode
    brandingText?: string
}

export function AuthLayout({
    children,
    title,
    subtitle,
    imagePosition = "left",
    brandingTitle,
    brandingSubtitle,
    brandingText,
}: AuthLayoutProps) {
    const BrandingSection = (
        <div className="hidden lg:flex flex-1 bg-[#0a2540] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-20 w-64 h-64 rounded-full border-[40px] border-[#00b8c4]" />
                <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full border-[30px] border-[#00b8c4]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-[50px] border-[#00b8c4]" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center w-full px-12">
                {/* Logo Grande */}
                <div className="flex items-center mb-8">
                    <span className="text-4xl font-bold">
                        <span className="text-white">BAQ</span>
                        <span className="text-[#00b8c4]">+</span>
                        <span className="text-white">DIGITAL</span>
                    </span>
                    <svg className="w-12 h-12 ml-2" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="18" stroke="#00b8c4" strokeWidth="4" />
                        <circle cx="24" cy="24" r="6" fill="#00b8c4" />
                        <line x1="24" y1="6" x2="24" y2="14" stroke="#00b8c4" strokeWidth="4" strokeLinecap="round" />
                        <line x1="24" y1="34" x2="24" y2="42" stroke="#00b8c4" strokeWidth="4" strokeLinecap="round" />
                        <line x1="6" y1="24" x2="14" y2="24" stroke="#00b8c4" strokeWidth="4" strokeLinecap="round" />
                        <line x1="34" y1="24" x2="42" y2="24" stroke="#00b8c4" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                </div>

                {brandingTitle && (
                    <h2 className="text-white text-2xl font-bold text-center mb-4">
                        {brandingTitle}
                    </h2>
                )}

                {brandingSubtitle && (
                    <h2 className="text-white text-2xl font-bold text-center mb-4">
                        {brandingSubtitle}
                    </h2>
                )}

                {brandingText && (
                    <p className="text-white/70 text-center max-w-sm text-[15px] leading-relaxed">
                        {brandingText}
                    </p>
                )}

                {/* Features - Only for Register (can be passed as children or prop if needed, but keeping simple for now) */}
                {/* We can make this more generic if needed, but for now let's stick to the common parts */}

                {/* Allies */}
                <div className="mt-12 flex items-center gap-6">
                    <Image
                        src="/images/RIWI.webp"
                        alt="RIWI"
                        width={80}
                        height={32}
                        className="h-8 w-auto object-contain brightness-0 invert opacity-70"
                    />
                </div>
            </div>
        </div>
    )

    const FormSection = (
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 xl:px-24 bg-white">
            <div className="w-full max-w-md mx-auto">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center text-sm text-gray-500 hover:text-[#0a2540] transition-colors mb-8 group"
                >
                    <svg
                        className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Volver al inicio
                </Link>

                {/* Welcome Text */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-[#0a2540] mb-2">{title}</h1>
                    <p className="text-gray-500 text-[15px]">{subtitle}</p>
                </div>

                {children}

                {/* Footer */}
                <div className="mt-10 pt-6 border-t border-gray-100">
                    <p className="text-gray-400 text-[12px] text-center">
                        © 2024 BAQ+DIGITAL. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </div>
    )

    return (
        <div className="min-h-screen flex">
            {imagePosition === "left" ? (
                <>
                    {BrandingSection}
                    {FormSection}
                </>
            ) : (
                <>
                    {FormSection}
                    {BrandingSection}
                </>
            )}
        </div>
    )
}
