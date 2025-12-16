"use client"

import { useState } from "react"
import Image from "next/image"
import { VideoModal } from "./VideoModal"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AllianceSection() {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

    const handleRiwiClick = () => {
        // Open RIWI website in new tab
        window.open("https://www.riwi.io/", "_blank", "noopener,noreferrer")
    }

    const handleVideoClick = () => {
        // Open video modal instead of alert
        setIsVideoModalOpen(true)
    }

    return (
        <>
            <section
                ref={ref}
                id="nosotros"
                className={`max-w-7xl mx-auto px-6 py-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
            >
                <p className="text-[#00b8c4] text-[13px] font-medium mb-2">Acerca de nosotros</p>
                <h2 className="text-[28px] md:text-[36px] font-bold text-[#0a2540] leading-tight mb-10">
                    La Alianza Estratégica que<br />
                    Cierra la Brecha
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-gray-500 text-[14px] leading-relaxed mb-6 max-w-md">
                            BAQ+DIGITAL nace de la colaboración con RIWI como respuesta directa a la
                            necesidad urgente de incluir tecnológicamente a nuestros adultos y adultos
                            mayores. Reconocemos que la brecha digital afecta el acceso a servicios
                            esenciales, por lo que esta alianza es un pilar para construir una Barranquilla
                            más inteligente e inclusiva.
                        </p>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={handleRiwiClick}
                                className="bg-[#00b8c4] text-white text-[13px] font-medium px-5 py-2 rounded hover:bg-[#00a0aa] transition-colors"
                            >
                                Conoce Riwi
                            </button>
                            <button
                                onClick={handleVideoClick}
                                className="w-9 h-9 rounded-full bg-[#fef3c7] flex items-center justify-center text-[#f59e0b] hover:bg-[#fde68a] transition-colors"
                                aria-label="Ver video de presentación"
                            >
                                <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Logos Section */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4">
                        {/* BAQ+DIGITAL Logo horizontal - versión más clara */}
                        <div className="flex items-center">
                            <Image
                                src="/images/baq-digital-logo-horizontal.png"
                                alt="BAQ+DIGITAL"
                                width={320}
                                height={100}
                                className="h-20 sm:h-24 w-auto object-contain"
                                priority
                            />
                        </div>

                        {/* Plus Sign - Mejorado para mejor visibilidad */}
                        <span className="text-[40px] sm:text-[48px] font-bold text-[#00b8c4] px-2">+</span>

                        {/* RIWI Logo */}
                        <div className="flex items-center">
                            <Image
                                src="/images/RIWI.webp"
                                alt="RIWI"
                                width={120}
                                height={48}
                                className="h-14 sm:h-12 w-auto object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            <VideoModal
                isOpen={isVideoModalOpen}
                onClose={() => setIsVideoModalOpen(false)}
            />
        </>
    )
}
