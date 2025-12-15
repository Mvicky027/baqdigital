import React from 'react'
import { ArrowLeft, User, Pencil } from "lucide-react"

interface SendFormStepProps {
    recipient: string
    setRecipient: (value: string) => void
    amount: string
    setAmount: (value: string) => void
    onNext: () => void
    onBack: () => void
}

export function SendFormStep({ recipient, setRecipient, amount, setAmount, onNext, onBack }: SendFormStepProps) {
    return (
        <div className="flex flex-col h-full bg-white p-6">
            <div className="mb-6">
                <ArrowLeft className="w-6 h-6 text-gray-800 cursor-pointer" onClick={onBack} />
            </div>

            <h1 className="text-xl font-bold text-[#130016] mb-6">¿A quién le vas a enviar plata?</h1>

            <div className="space-y-6">
                <div className="bg-pink-50/50 p-4 rounded-xl relative">
                    <label className="text-xs text-[#da0081] font-medium block mb-1">Escribe la llave para enviar</label>
                    <input
                        type="tel"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        className="w-full bg-transparent border-none outline-none text-[#130016] font-medium text-lg"
                        placeholder="3..."
                    />
                    <User className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>

                <p className="text-xs text-gray-400 px-2">
                    Puedes escribir un número de celular, número de documento, un correo o usuario
                </p>

                <div className="bg-pink-50/50 p-4 rounded-xl relative">
                    <label className="text-xs text-[#da0081] font-medium block mb-1">¿Cuánto?</label>
                    <div className="flex items-center">
                        <span className="text-[#130016] font-medium text-lg mr-1">$</span>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full bg-transparent border-none outline-none text-[#130016] font-medium text-lg"
                            placeholder="0"
                        />
                    </div>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 border-2 border-[#da0081] rounded p-1">
                        <Pencil className="text-[#da0081] w-4 h-4" />
                    </div>
                </div>

                <div className="bg-pink-50/50 p-4 rounded-xl">
                    <label className="text-xs text-[#da0081] font-medium block mb-1">Mensaje</label>
                    <input
                        type="text"
                        className="w-full bg-transparent border-none outline-none text-[#130016]"
                        placeholder="Escribe un mensaje..."
                    />
                </div>

                <div>
                    <p className="text-gray-500 text-sm mb-2">¿De dónde saldrá la plata?</p>
                    <div className="border border-gray-200 rounded-xl p-3 flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#da0081] rounded flex items-center justify-center">
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

            <div className="mt-auto relative">
                <div className="absolute -top-12 left-0 w-8 h-8 bg-[#da0081] rounded-full flex items-center justify-center text-white font-bold">4</div>
                <button
                    onClick={onNext}
                    className="w-full bg-[#da0081] hover:bg-[#b5006b] text-white font-medium py-4 rounded-lg transition-colors text-lg"
                >
                    Seguir
                </button>
            </div>
        </div>
    )
}
