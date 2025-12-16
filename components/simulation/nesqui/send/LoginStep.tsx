import React from 'react'
import { ArrowLeft } from "lucide-react"

interface LoginStepProps {
    phoneNumber: string
    setPhoneNumber: (value: string) => void
    onNext: () => void
    onBack: () => void
}

export function LoginStep({ phoneNumber, setPhoneNumber, onNext, onBack }: LoginStepProps) {
    return (
        <div className="flex flex-col h-full bg-[#130016] p-6 relative">
            <div className="flex justify-between mb-4">
                <button
                    onClick={() => window.location.href = '/dashboard'}
                    className="text-white/70 hover:text-white flex items-center gap-1 text-xs"
                >
                    <ArrowLeft className="w-4 h-4" /> Volver
                </button>
                <div className="border border-white/30 rounded-lg px-3 py-1 flex items-center gap-2 text-white text-xs">
                    <span>?</span> Ayuda
                </div>
            </div>

            <div className="flex-1 flex items-center justify-center">
                <div className="relative">
                    <span className="text-6xl font-bold text-white tracking-tighter">Nesqui</span>
                    <div className="absolute -top-2 -left-4 w-4 h-4 bg-emerald-600"></div>
                </div>
            </div>

            <div className="mt-auto">
                <div className="bg-white/10 rounded-lg p-4 mb-4 flex items-center relative">
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        1
                    </div>
                    <span className="text-gray-400 mr-2">+57</span>
                    <span className="text-gray-500 mx-2">|</span>
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Ingresa tu cel"
                        className="bg-transparent border-none outline-none text-white w-full placeholder-gray-400"
                    />
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={onNext}
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-4 rounded-lg transition-colors"
                    >
                        Entra
                    </button>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 rounded-lg font-bold text-xl">
                        $
                    </button>
                </div>

                <div className="flex justify-between items-center mt-6 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="border border-gray-400 rounded w-4 h-6 block"></span>
                        ¿Cambiaste tu cel?
                    </div>
                    <div>by Bancolombia</div>
                </div>
            </div>
        </div>
    )
}
