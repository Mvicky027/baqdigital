import Image from "next/image"

export function AllianceSection() {
    return (
        <section id="nosotros" className="max-w-7xl mx-auto px-6 py-14">
            <p className="text-[#00b8c4] text-[13px] font-medium mb-2">Acerca de nosotros</p>
            <h2 className="text-[26px] md:text-[32px] font-bold text-[#0a2540] leading-tight mb-10">
                La Alianza Estratégica que<br />
                Cierra la Brecha
            </h2>
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <p className="text-gray-500 text-[14px] leading-relaxed mb-6 max-w-md">
                        BAQ+DIGITAL nace de la colaboración con RIWI como respuesta directa a la
                        necesidad urgente de incluir tecnológicamente a nuestros adultos y adultos
                        mayores. Reconocemos que la brecha digital afecta el acceso a servicios
                        esenciales, por lo que esta alianza es un pilar para construir una Barranquilla
                        más inteligente e inclusiva.
                    </p>
                    <div className="flex items-center gap-3">
                        <button className="bg-[#00b8c4] text-white text-[13px] font-medium px-5 py-2 rounded hover:bg-[#00a0aa] transition-colors">
                            Conoce Riwi
                        </button>
                        <button className="w-9 h-9 rounded-full bg-[#fef3c7] flex items-center justify-center text-[#f59e0b] hover:bg-[#fde68a] transition-colors">
                            <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Logos Section */}
                <div className="flex items-center justify-center gap-3">
                    {/* BAQ+DIGITAL Logo grande */}
                    <div className="flex items-center">
                        <Image
                            src="/PNG/PNG logo original positivo.png"
                            alt="BAQ+DIGITAL"
                            width={200}
                            height={50}
                            className="h-12 w-auto object-contain"
                        />

                    </div>

                    {/* Plus Sign */}
                    <span className="text-[36px] md:text-[44px] font-light text-[#00b8c4] mx-3">+</span>

                    {/* RIWI Logo grande */}
                    <Image
                        src="/images/RIWI.webp"
                        alt="RIWI"
                        width={140}
                        height={56}
                        className="h-12 w-auto object-contain"
                    />
                </div>
            </div>
        </section>
    )
}
