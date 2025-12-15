import React from 'react'
import { ArrowLeft } from "lucide-react"

interface IDDetailsStepProps {
    idNumber: string
    setIdNumber: (value: string) => void
    birthDate: string
    setBirthDate: (value: string) => void
    expDate: string
    setExpDate: (value: string) => void
    onNext: () => void
    onBack: () => void
}

export function IDDetailsStep({ idNumber, setIdNumber, birthDate, setBirthDate, expDate, setExpDate, onNext, onBack }: IDDetailsStepProps) {
    return (
        <div className="flex flex-col h-full bg-white p-6">
            <div className="mb-6">
                <ArrowLeft className="w-6 h-6 text-gray-800 cursor-pointer" onClick={onBack} />
            </div>

            <div className="flex items-center gap-2 mb-8">
                <h1 className="text-2xl font-bold text-[#130016]">Tu cédula de ciudadanía</h1>
                <div className="w-8 h-8 bg-[#da0081] rounded-full flex items-center justify-center text-white font-bold">9</div>
            </div>

            <div className="space-y-4 mb-8">
                <div className="bg-pink-50 p-4 rounded-lg">
                    <label className="block text-xs text-[#da0081] mb-1">Número de identificación *</label>
                    <input
                        type="text"
                        className="w-full bg-transparent border-none outline-none text-[#130016] font-medium text-lg"
                        value={idNumber}
                        onChange={(e) => setIdNumber(e.target.value)}
                        placeholder="1..."
                    />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-xs text-gray-500 mb-1">Fecha de nacimiento *</label>
                    <input
                        type="date"
                        className="w-full bg-transparent border-none outline-none text-[#130016]"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                    />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-xs text-gray-500 mb-1">Fecha de expedición *</label>
                    <input
                        type="date"
                        className="w-full bg-transparent border-none outline-none text-[#130016]"
                        value={expDate}
                        onChange={(e) => setExpDate(e.target.value)}
                    />
                </div>
            </div>

            <p className="text-gray-500 text-sm mb-auto">
                Recuerda porfa que tu fecha de nacimiento es diferente a la de expedición de tu documento ;)
            </p>

            <button
                onClick={onNext}
                className="w-full bg-[#da0081] hover:bg-[#b5006b] text-white font-medium py-4 rounded-lg transition-colors text-lg"
            >
                Listo
            </button>
        </div>
    )
}
