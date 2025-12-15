import React from 'react'
import { ArrowLeft } from "lucide-react"

interface PhoneStepProps {
    phoneNumber: string
    setPhoneNumber: (value: string) => void
    onNext: () => void
    onBack: () => void
}

export function PhoneStep({ phoneNumber, setPhoneNumber, onNext, onBack }: PhoneStepProps) {
    return (
        <div className="flex flex-col h-full bg-white p-6">
            <div className="mb-6">
                <ArrowLeft className="w-6 h-6 text-gray-800 cursor-pointer" onClick={onBack} />
            </div>

            <h1 className="text-2xl font-bold text-[#130016] mb-8">Escribe tu cel</h1>

            <div className="bg-gray-50 p-4 rounded-lg mb-4 flex items-center">
                <span className="text-[#da0081] font-bold text-xl mr-4">+57</span>
                <span className="text-gray-300 text-xl">|</span>
                <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="3..."
                    className="bg-transparent border-none outline-none text-xl ml-4 w-full text-[#130016] placeholder-gray-400"
                    autoFocus
                />
            </div>

            <p className="text-gray-500 text-sm mb-auto">
                Al escribir tu número de cel, autorizas a Nequi para enviarte mensajes de texto con info del servicio, cuando sea necesario.
            </p>

            <div className="mt-6">
                <div className="flex items-start gap-3 mb-6">
                    <div className="mt-1">
                        <input type="checkbox" className="w-5 h-5 accent-[#da0081] rounded" defaultChecked />
                    </div>
                    <p className="text-sm text-gray-600">
                        Marca esta opción para enviarte el mensaje de texto que te permitirá vincular tu cel con Nequi.
                    </p>
                </div>

                <button
                    onClick={onNext}
                    disabled={phoneNumber.length < 10}
                    className={`w-full py-4 rounded-lg font-medium text-white text-lg transition-colors ${phoneNumber.length >= 10 ? 'bg-[#da0081] hover:bg-[#b5006b]' : 'bg-gray-300 cursor-not-allowed'
                        }`}
                >
                    Acepta
                </button>
            </div>
        </div>
    )
}
