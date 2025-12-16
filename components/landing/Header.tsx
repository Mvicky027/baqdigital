"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    return (
        <>
            <header className="py-4 px-6 relative z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo BAQ+DIGITAL */}
                    <Link href="/" className="flex items-center z-50">
                        <span className="text-[22px] font-bold tracking-tight">
                            <span className="text-[#0a2540]">BAQ</span>
                            <span className="text-[#00b8c4]">+</span>
                            <span className="text-[#0a2540]">DIGITAL</span>
                        </span>
                        <svg className="w-7 h-7 ml-1" viewBox="0 0 28 28" fill="none">
                            <circle cx="14" cy="14" r="11" stroke="#00b8c4" strokeWidth="2.5" />
                            <circle cx="14" cy="14" r="4" fill="#00b8c4" />
                            <line x1="14" y1="3" x2="14" y2="8" stroke="#00b8c4" strokeWidth="2.5" strokeLinecap="round" />
                            <line x1="14" y1="20" x2="14" y2="25" stroke="#00b8c4" strokeWidth="2.5" strokeLinecap="round" />
                            <line x1="3" y1="14" x2="8" y2="14" stroke="#00b8c4" strokeWidth="2.5" strokeLinecap="round" />
                            <line x1="20" y1="14" x2="25" y2="14" stroke="#00b8c4" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10">
                        <Link href="/" className="text-[#0a2540] font-semibold text-[15px] border-b-2 border-[#0a2540] pb-0.5">
                            Home
                        </Link>
                        <Link href="#nosotros" className="text-gray-500 text-[15px] hover:text-[#0a2540] transition-colors">
                            Nosotros
                        </Link>
                        <Link href="/login" className="text-gray-500 text-[15px] hover:text-[#0a2540] transition-colors">
                            Iniciar sesión
                        </Link>
                        <Link href="/register">
                            <button className="bg-[#0a2540] text-white text-[14px] font-medium px-5 py-2 rounded-full hover:bg-[#132f4c] transition-colors">
                                Registrarse
                            </button>
                        </Link>
                    </nav>

                    {/* RIWI Logo - Desktop */}
                    <div className="hidden md:block">
                        <Image
                            src="/images/RIWI.webp"
                            alt="RIWI"
                            width={70}
                            height={28}
                            className="h-7 w-auto object-contain"
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            // Close Icon
                            <svg className="w-6 h-6 text-[#0a2540]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger Icon
                            <svg className="w-6 h-6 text-[#0a2540]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={closeMobileMenu}
                />
            )}

            {/* Mobile Menu Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <nav className="flex flex-col p-6 pt-20 gap-6">
                    <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className="text-[#0a2540] font-semibold text-[16px] py-2 border-b border-gray-200 hover:text-[#00b8c4] transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="#nosotros"
                        onClick={closeMobileMenu}
                        className="text-gray-700 text-[16px] py-2 border-b border-gray-200 hover:text-[#00b8c4] transition-colors"
                    >
                        Nosotros
                    </Link>
                    <Link
                        href="/login"
                        onClick={closeMobileMenu}
                        className="text-gray-700 text-[16px] py-2 border-b border-gray-200 hover:text-[#00b8c4] transition-colors"
                    >
                        Iniciar sesión
                    </Link>
                    <Link href="/register" onClick={closeMobileMenu} className="mt-4">
                        <button className="w-full bg-[#0a2540] text-white text-[15px] font-medium px-6 py-3 rounded-full hover:bg-[#132f4c] transition-colors">
                            Registrarse
                        </button>
                    </Link>

                    {/* RIWI Logo in Mobile Menu */}
                    <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center">
                        <Image
                            src="/images/RIWI.webp"
                            alt="RIWI"
                            width={80}
                            height={32}
                            className="h-8 w-auto object-contain opacity-70"
                        />
                    </div>
                </nav>
            </div>
        </>
    )
}
