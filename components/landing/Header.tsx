import Image from "next/image"
import Link from "next/link"

export function Header() {
    return (
        <header className="py-4 px-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo BAQ+DIGITAL */}
                <Link href="/" className="flex items-center">
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

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    <Link href="/" className="text-[#0a2540] font-semibold text-[15px] border-b-2 border-[#0a2540] pb-0.5">
                        Home
                    </Link>
                    <Link href="#nosotros" className="text-gray-500 text-[15px] hover:text-[#0a2540]">
                        Nosotros
                    </Link>
                    <Link href="/login" className="text-gray-500 text-[15px] hover:text-[#0a2540]">
                        Iniciar sesion
                    </Link>
                    <Link href="/register">
                        <button className="bg-[#0a2540] text-white text-[14px] font-medium px-5 py-2 rounded-full hover:bg-[#132f4c]">
                            Registrarse
                        </button>
                    </Link>
                </nav>

                {/* RIWI Logo */}
                <div className="hidden md:block">
                    <Image
                        src="/images/RIWI.webp"
                        alt="RIWI"
                        width={70}
                        height={28}
                        className="h-7 w-auto object-contain"
                    />
                </div>
            </div>
        </header>
    )
}
