"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function InfoBanner() {
    // WhatsApp contact number
    const whatsappNumber = "573045966210" // BAQ+DIGITAL contact number
    const whatsappMessage = encodeURIComponent("Hola, me gustaría obtener más información sobre BAQ+DIGITAL")
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

    return (
        <section
            ref={ref}
            className={`bg-[#0a2540] transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 py-4 sm:py-0">
                <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-0">
                    {/* Left - BAQ+DIGITAL Cyan Box */}
                    <div className="bg-[#00b8c4] py-5 px-6 rounded-xl lg:rounded-l-xl lg:rounded-r-none flex-shrink-0 lg:min-w-[220px]">
                        <div className="flex items-center gap-0.5 mb-1">
                            <span className="text-[11px] font-bold text-[#0a2540]">BAQ</span>
                            <span className="text-[11px] font-bold text-[#0a2540]">+</span>
                            <span className="text-[11px] font-bold text-[#0a2540]">DIGITAL</span>
                        </div>
                        <p className="text-[22px] font-bold text-white leading-tight">¡Conéctate</p>
                        <p className="text-[22px] font-bold text-white leading-tight">con el futuro!</p>
                        <p className="text-[10px] text-white/90 mt-2 leading-tight">
                            Alfabetización Digital Híbrida<br />
                            para adultos y adultos mayores
                        </p>
                    </div>

                    {/* Center - Schedule Info */}
                    <div className="flex-1 flex items-center justify-center py-5 px-4 sm:px-8 lg:border-l border-white/10 rounded-xl lg:rounded-none">
                        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 w-full max-w-2xl">
                            {/* Calendar Icon */}
                            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white/70 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <rect x="3" y="4" width="18" height="18" rx="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                                <rect x="7" y="14" width="3" height="3" rx="0.5" />
                            </svg>
                            <div className="flex-1">
                                <h3 className="font-bold text-[#4ade80] text-[13px] sm:text-[14px] mb-3">Horario y lugar de nuestros talleres:</h3>
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
                                    <div>
                                        <p className="text-[#4ade80] font-semibold text-[11px] sm:text-[12px]">Lugar:</p>
                                        <p className="text-white text-[11px] sm:text-[12px]">Calle 40 #46-223,</p>
                                        <p className="text-white text-[11px] sm:text-[12px]">Fábrica de la cultura</p>
                                    </div>
                                    <div>
                                        <p className="text-[#4ade80] font-semibold text-[11px] sm:text-[12px]">Sábados:</p>
                                        <p className="text-white text-[11px] sm:text-[12px]">de 8:00 a.m a 12:00 m.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - WhatsApp CTA */}
                    <div className="flex flex-row sm:flex-row items-center justify-between sm:justify-center gap-4 py-5 px-6 lg:border-l border-white/10 rounded-xl lg:rounded-r-xl lg:rounded-l-none">
                        <div className="flex-1 sm:flex-initial">
                            <p className="text-[11px] sm:text-[12px] text-white font-medium">Obtén ayuda o</p>
                            <p className="text-[11px] sm:text-[12px] text-white font-medium mb-1">información las 24 hrs</p>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-[#4ade80] text-[11px] sm:text-[12px] font-medium hover:underline"
                            >
                                <span className="text-[14px]">→</span>
                                <span>Ir al WhatsApp</span>
                            </a>
                        </div>

                        <div className="flex items-center gap-3 sm:gap-4">
                            {/* WhatsApp Icon */}
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#25D366] rounded-full p-2 sm:p-2.5 shrink-0 hover:bg-[#20BA5A] transition-colors"
                                aria-label="Contactar por WhatsApp"
                            >
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>

                            {/* BAQ+DIGITAL Mini Logo */}
                            <div className="hidden sm:flex flex-col items-center shrink-0">
                                <span className="text-[10px] font-bold tracking-tight">
                                    <span className="text-white">BAQ</span>
                                    <span className="text-[#00b8c4]">+</span>
                                    <span className="text-white">DIGITAL</span>
                                </span>
                                <svg className="w-5 h-5 mt-0.5" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="7" stroke="#00b8c4" strokeWidth="2" />
                                    <circle cx="10" cy="10" r="2.5" fill="#00b8c4" />
                                    <line x1="10" y1="3" x2="10" y2="5" stroke="#00b8c4" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="10" y1="15" x2="10" y2="17" stroke="#00b8c4" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="3" y1="10" x2="5" y2="10" stroke="#00b8c4" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="15" y1="10" x2="17" y2="10" stroke="#00b8c4" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
