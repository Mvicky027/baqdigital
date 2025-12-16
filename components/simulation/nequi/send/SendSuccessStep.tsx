import React from 'react'
import { ArrowLeft, Share2, Check } from "lucide-react"

interface SendSuccessStepProps {
    recipient: string
    amount: string
    onFinish: () => void
}

export function SendSuccessStep({ recipient, amount, onFinish }: SendSuccessStepProps) {
    const formattedAmount = Number(amount).toLocaleString('es-CO')
    const currentDate = new Date().toLocaleDateString('es-CO', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })
    const currentTime = new Date().toLocaleTimeString('es-CO', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    })

    return (
        <div className="flex flex-col h-full bg-[#f2f4f8] relative overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center p-4 bg-[#f2f4f8] z-10">
                <ArrowLeft className="w-6 h-6 text-[#130016] cursor-pointer" onClick={onFinish} />
                <h1 className="text-lg font-bold text-[#130016]">Detalle del movimiento</h1>
                <Share2 className="w-6 h-6 text-[#da0081] cursor-pointer" />
            </div>

            {/* Receipt Content */}
            <div className="flex-1 px-4 pb-4 overflow-y-auto">
                <div className="bg-white rounded-lg shadow-sm p-6 relative receipt-pattern">
                    {/* Scalloped edges simulation (top and bottom) - simplified with CSS/SVG or just rounded for now */}

                    <div className="flex flex-col items-center mb-6">
                        <h2 className="text-xl font-bold text-[#130016] mb-4">¡Envío exitoso!</h2>
                        <div className="w-20 h-20 bg-[#00c853] rounded-2xl flex items-center justify-center transform rotate-3 shadow-lg">
                            <Check className="w-12 h-12 text-white" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-baseline">
                            <span className="text-gray-500 text-sm">¿Cuánto?</span>
                            <span className="text-[#130016] font-bold text-xl">$ {formattedAmount},00</span>
                        </div>

                        <div className="flex justify-between items-baseline">
                            <span className="text-gray-500 text-sm">Para</span>
                            <span className="text-[#130016] font-bold">Usuario Desconocido</span>
                        </div>

                        <div className="flex justify-between items-baseline">
                            <span className="text-gray-500 text-sm">Fecha</span>
                            <span className="text-[#130016] font-bold text-right text-sm">{currentDate} a las {currentTime}</span>
                        </div>

                        <div className="flex justify-between items-baseline">
                            <span className="text-gray-500 text-sm">Referencia</span>
                            <span className="text-[#130016] font-bold">M12345</span>
                        </div>

                        <div className="flex justify-between items-baseline">
                            <span className="text-gray-500 text-sm">Número Nequi</span>
                            <span className="text-[#130016] font-bold">{recipient}</span>
                        </div>

                        <div>
                            <span className="text-gray-500 text-sm block mb-1">Conversación</span>
                            <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-600 border border-gray-100">
                                Te envié la plata para pagar los productos que me pasaste. Avísame cuando la recibas, gracias.
                            </div>
                        </div>

                        <div className="flex justify-between items-baseline pt-2 border-t border-gray-100">
                            <span className="text-gray-500 text-sm">¿De dónde salió la plata?</span>
                            <span className="text-[#130016] font-bold">Disponible</span>
                        </div>
                    </div>

                    {/* Decorative bottom edge could be added here */}
                </div>
            </div>

            {/* Footer Button */}
            <div className="p-4 bg-[#f2f4f8]">
                <button
                    onClick={onFinish}
                    className="w-full bg-[#da0081] hover:bg-[#b5006b] text-white font-medium py-4 rounded-lg transition-colors text-lg"
                >
                    Listo
                </button>
            </div>
        </div>
    )
}
