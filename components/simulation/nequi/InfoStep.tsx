import React from 'react'
import { ArrowLeft, ChevronRight } from "lucide-react"

interface InfoStepProps {
    onNext: () => void
    onBack: () => void
}

export function InfoStep({ onNext, onBack }: InfoStepProps) {
    return (
        <div className="flex flex-col h-full bg-white p-6">
            <div className="mb-6">
                <ArrowLeft className="w-6 h-6 text-gray-800 cursor-pointer" onClick={onBack} />
            </div>

            <h1 className="text-2xl font-bold text-[#130016] mb-2">Tu Info</h1>
            <p className="text-[#da0081] text-sm font-medium mb-6">Tus nombres</p>

            <div className="space-y-4 mb-8">
                <div className="bg-pink-50 p-4 rounded-lg">
                    <label className="block text-xs text-[#da0081] mb-1">Primer nombre *</label>
                    <input type="text" className="w-full bg-transparent border-none outline-none text-[#130016] font-medium" defaultValue="C" />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <input type="text" placeholder="Segundo nombre (opcional)" className="w-full bg-transparent border-none outline-none text-[#130016]" />
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                    <label className="block text-xs text-[#da0081] mb-1">Primer apellido *</label>
                    <input type="text" className="w-full bg-transparent border-none outline-none text-[#130016] font-medium" defaultValue="C" />
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                    <label className="block text-xs text-[#da0081] mb-1">Segundo apellido (opcional)</label>
                    <input type="text" className="w-full bg-transparent border-none outline-none text-[#130016] font-medium" defaultValue="G" />
                </div>
            </div>

            <p className="text-[#da0081] text-sm font-medium mb-2">¿Cómo quieres que te llamemos?</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <input type="text" placeholder="Nombre de usuari@ (opcional)" className="w-full bg-transparent border-none outline-none text-[#130016]" />
            </div>

            <p className="text-[#da0081] text-sm font-medium mb-2">Info adicional</p>
            <div className="bg-pink-50 p-4 rounded-lg mb-8 flex justify-between items-center">
                <div>
                    <label className="block text-xs text-[#da0081]">País de residencia *</label>
                    <span className="text-[#130016] font-medium">Colombia</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            <button
                onClick={onNext}
                className="w-full bg-[#da0081] hover:bg-[#b5006b] text-white font-medium py-4 rounded-lg transition-colors text-lg mt-auto"
            >
                Sigue
            </button>
        </div>
    )
}
