"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function HeroSection() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

    return (
        <section
            ref={ref}
            className={`max-w-7xl mx-auto px-6 py-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
        >
            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Left Content - Text */}
                <div className="pt-4">
                    <h1 className="text-[32px] md:text-[38px] font-bold text-[#0a2540] leading-[1.2] mb-5">
                        ¡BAQ+DIGITAL! Conecta<br />
                        Barranquilla con el{" "}
                        <span className="text-[#00b8c4]">Futuro</span>.
                    </h1>
                    <p className="text-gray-500 text-[15px] leading-relaxed mb-8 max-w-md">
                        Únete a la Alfabetización Digital Híbrida para adultos y
                        adultos mayores. Fortalece tus habilidades
                        tecnológicas esenciales para acceder a servicios básicos:
                        salud, trámites en línea, pagos seguros y más.
                    </p>
                    <div className="flex gap-3">
                        <Link href="/login">
                            <button className="border-2 border-[#0a2540] text-[#0a2540] text-[14px] font-medium px-5 py-2.5 rounded hover:bg-[#0a2540] hover:text-white transition-colors">
                                Iniciar sesión
                            </button>
                        </Link>
                        <Link href="#nosotros">
                            <button className="bg-[#0a2540] text-white text-[14px] font-medium px-5 py-2.5 rounded hover:bg-[#132f4c] transition-colors">
                                Acerca de nosotros
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Right Content - Images */}
                <div className="flex flex-col items-end">
                    <div className="flex gap-3">
                        {/* Woman with laptop - larger image */}
                        <div className="relative w-[200px] h-[220px] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/IMAGEN1.jpg"
                                alt="Mujer mayor usando laptop"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Cursor icon overlay */}
                            <div className="absolute bottom-6 left-6">
                                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 3L19 12L12 13L9 20L5 3Z" fill="#00b8c4" stroke="#00b8c4" strokeWidth="1.5" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        {/* Man with phone - smaller image */}
                        <div className="relative w-[160px] h-[220px] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/IMAGEN2.png"
                                alt="Hombre mayor usando teléfono"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Nuestros Aliados */}
                    <div className="mt-8 mr-2">
                        <p className="text-[13px] font-semibold text-[#0a2540] mb-3 text-right">Nuestros Aliados</p>
                        <div className="flex items-center gap-5">
                            {/* Logo Alcaldía Barranquilla */}
                            <div className="flex items-center gap-2">
                                <div className="w-9 h-9 bg-[#0a2540] rounded-sm flex items-center justify-center">
                                    <span className="text-white text-[8px] font-bold leading-none">B</span>
                                </div>
                                <div>
                                    <p className="text-[9px] font-bold text-[#0a2540] leading-tight">ALCALDÍA</p>
                                    <p className="text-[8px] text-[#0a2540] leading-tight">BARRANQUILLA</p>
                                </div>
                            </div>

                            {/* Logo RIWI */}
                            <Image
                                src="/images/RIWI.webp"
                                alt="RIWI"
                                width={55}
                                height={22}
                                className="h-5 w-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
