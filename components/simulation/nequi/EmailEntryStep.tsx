import React, { useState } from 'react'
import { ArrowLeft, Pencil, Eye, Mail } from "lucide-react"

interface EmailEntryStepProps {
    email: string
    setEmail: (value: string) => void
    confirmEmail: string
    setConfirmEmail: (value: string) => void
    onNext: () => void
    onBack: () => void
}

export function EmailEntryStep({ email, setEmail, confirmEmail, setConfirmEmail, onNext, onBack }: EmailEntryStepProps) {
    const [showEmailModal, setShowEmailModal] = useState(false)

    return (
        <div className="flex flex-col h-full bg-white p-6 relative">
            <div className="mb-6">
                <ArrowLeft className="w-6 h-6 text-gray-800 cursor-pointer" onClick={onBack} />
            </div>

            <h1 className="text-2xl font-bold text-[#130016] mb-8">Tu correo electrónico</h1>

            <div className="space-y-4 mb-8">
                <div className="bg-pink-50 p-4 rounded-lg flex items-center justify-between">
                    <input
                        type="email"
                        placeholder="Escribe tu correo *"
                        className="w-full bg-transparent border-none outline-none text-[#130016]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Pencil className="w-5 h-5 text-[#da0081]" />
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <input
                        type="email"
                        placeholder="Repite tu correo *"
                        className="w-full bg-transparent border-none outline-none text-[#130016]"
                        value={confirmEmail}
                        onChange={(e) => setConfirmEmail(e.target.value)}
                    />
                </div>
            </div>

            <p className="text-gray-500 text-sm mb-4">
                Te enviaremos a tu correo el contrato de tu Nequi y la confirmación de creación.
            </p>
            <p className="text-gray-500 text-sm mb-auto">
                Es súper importante que pongas el correo que usas ahora, por ahí nos comunicamos todo el tiempo y te servirá para recuperar tu clave en cualquier momento.
            </p>

            <button
                onClick={() => setShowEmailModal(true)}
                disabled={!email || email !== confirmEmail}
                className={`w-full py-4 rounded-lg font-medium text-white text-lg transition-colors ${email && email === confirmEmail ? 'bg-[#da0081] hover:bg-[#b5006b]' : 'bg-pink-200 cursor-not-allowed'
                    }`}
            >
                Confirma tu correo
            </button>

            {/* Confirmation Modal */}
            {showEmailModal && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-sm text-center relative">
                        <div className="absolute top-4 right-4">
                            <Eye className="w-6 h-6 text-[#130016]" />
                        </div>
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center">
                                <Mail className="w-8 h-8 text-[#da0081]" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-[#130016] mb-4">Necesitamos confirmar tu correo</h3>
                        <p className="text-gray-600 mb-2">Vamos a enviarte un código a</p>
                        <p className="text-[#da0081] font-medium mb-4">{email}</p>
                        <p className="text-gray-600 mb-6">para que confirmes el correo que vas a usar con tu Nequi.</p>

                        <button
                            onClick={() => {
                                setShowEmailModal(false)
                                onNext()
                            }}
                            className="w-full bg-[#da0081] text-white font-medium py-3 rounded-lg"
                        >
                            Listo
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
