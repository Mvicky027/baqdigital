import React from 'react'
import { ArrowLeft, X } from "lucide-react"

interface ConfirmStepProps {
    recipient: string
    amount: string
    onConfirm: () => void
    onBack: () => void
}

export function ConfirmStep({ recipient, amount, onConfirm, onBack }: ConfirmStepProps) {
    // Format amount with dots
    const formattedAmount = Number(amount).toLocaleString('es-CO')

    return (
        <div className="flex flex-col h-full bg-black/50 p-6 relative">
            {/* Background content (blurred/dimmed) */}
            <div className="absolute inset-0 bg-white z-0 opacity-50 pointer-events-none"></div>

            {/* Modal Sheet */}
            <div className="bg-white rounded-t-3xl mt-auto relative z-10 p-6 animate-in slide-in-from-bottom duration-300">
                <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>

                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl font-bold text-[#130016]">Confirma el envío</h2>
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold absolute -top-4 right-6">5</div>
                    <button onClick={onBack}>
                        <X className="w-6 h-6 text-gray-500" />
                    </button>
                </div>

                <div className="space-y-4 mb-8">
                    <div>
                        <p className="text-[#059669] text-xs font-medium">Vas a enviar a:</p>
                        <p className="text-[#130016] font-medium">Usuario Desconocido</p>
                    </div>
                    <div>
                        <p className="text-[#059669] text-xs font-medium">A la llave</p>
                        <p className="text-[#130016] font-medium">{recipient}</p>
                    </div>
                    <div>
                        <p className="text-[#059669] text-xs font-medium">¿Cuánto?</p>
                        <p className="text-[#130016] font-medium text-xl">$ {formattedAmount},00</p>
                    </div>

                    <div>
                        <p className="text-gray-500 text-sm mb-2">La plata saldrá de:</p>
                        <div className="border border-gray-200 rounded-xl p-3 flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-600 rounded flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-1">
                                    <div className="w-2 h-2 bg-white/50 rounded-sm"></div>
                                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                                    <div className="w-2 h-2 bg-white/50 rounded-sm"></div>
                                    <div className="w-2 h-2 bg-white/50 rounded-sm"></div>
                                </div>
                            </div>
                            <span className="font-medium text-[#130016]">Disponible</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <button
                        onClick={onConfirm}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-4 rounded-lg transition-colors text-lg"
                    >
                        Enviar
                    </button>
                    <button
                        onClick={onBack}
                        className="w-full border border-gray-300 text-[#130016] font-medium py-4 rounded-lg transition-colors text-lg"
                    >
                        Corregir
                    </button>
                </div>
            </div>
        </div>
    )
}
