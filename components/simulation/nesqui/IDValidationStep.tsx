import React from 'react'
import { ArrowLeft, User, Camera, Check } from "lucide-react"

interface IDValidationStepProps {
    onNext: () => void
    onBack: () => void
}

export function IDValidationStep({ onNext, onBack }: IDValidationStepProps) {
    return (
        <div className="flex flex-col h-full bg-white p-6">
            <div className="mb-6">
                <ArrowLeft className="w-6 h-6 text-gray-800 cursor-pointer" onClick={onBack} />
            </div>

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold text-[#130016]">Validemos tu identidad</h1>
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">10</div>
            </div>

            <div className="bg-gray-200 rounded-lg h-48 mb-6 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for ID image */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-200 opacity-50"></div>
                <div className="relative z-10 text-center">
                    <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <User className="w-12 h-12 text-gray-500" />
                    </div>
                    <p className="text-xs text-gray-500 font-mono">REPUBLICA DE COLOMBIA</p>
                </div>
                <div className="absolute bottom-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                    <Camera className="w-3 h-3" /> Ampliar imagen
                </div>
            </div>

            <div className="flex items-start gap-3 mb-6">
                <div className="mt-1">
                    <div className="w-6 h-6 rounded-full border-2 border-[#00c853] flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#00c853]" />
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-[#130016] mb-1">¡Listo!</h2>
                    <h2 className="text-2xl font-bold text-[#130016] mb-1">Ya quedó la foto de tu documento por esta cara.</h2>
                </div>
            </div>

            <button
                onClick={onNext}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-4 rounded-lg transition-colors text-lg mt-auto"
            >
                Continuar
            </button>
        </div>
    )
}
