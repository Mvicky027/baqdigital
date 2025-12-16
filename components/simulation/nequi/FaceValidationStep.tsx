import React from 'react'
import { Check } from "lucide-react"

interface FaceValidationStepProps {
    onNext: () => void
}

export function FaceValidationStep({ onNext }: FaceValidationStepProps) {
    return (
        <div className="flex flex-col h-full bg-white p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold text-[#130016]">Validemos tu identidad</h1>
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">11</div>
            </div>

            <div className="bg-gray-200 rounded-lg h-80 mb-6 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for Face image */}
                <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Face Validation"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-xs">
                    Ampliar imagen
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
                    <h2 className="text-2xl font-bold text-[#130016] mb-1">Ya quedó la foto de tu cara</h2>
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
