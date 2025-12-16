import React from 'react'
import { Eye, ThumbsUp } from "lucide-react"
import { useRouter } from "next/navigation"

export function SuccessStep() {
    const router = useRouter()

    return (
        <div className="flex flex-col h-full bg-[#130016] p-6 relative">
            {/* Overlay Modal style */}
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center h-full my-auto justify-center relative">
                <div className="absolute top-0 left-0 bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center -mt-4 -ml-2 font-bold text-lg">
                    14
                </div>

                <div className="mb-6 relative">
                    <ThumbsUp className="w-24 h-24 text-[#130016] stroke-1" />
                    <div className="absolute -top-4 -left-4 text-[#da0081]">
                        {/* Sparkles decoration */}
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
                        </svg>
                    </div>
                </div>

                <div className="mb-6">
                    <Eye className="w-16 h-16 text-[#da0081] mx-auto" />
                </div>

                <h1 className="text-2xl font-bold text-[#130016] mb-4">
                    ¡La creación de tu Nesqui fue todo un éxito!
                </h1>

                <p className="text-gray-600 mb-8 leading-relaxed">
                    <span className="font-bold">El número de tu Nesqui es el mismo de tu celular.</span> Creaste un depósito de bajo monto. Si lo necesitas, puedes cambiarlo a una cuenta de ahorros desde las opciones de tu perfil y manejar tu plata A Tu Ritmo.
                </p>

                <button
                    onClick={() => router.push('/dashboard')}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-4 rounded-lg transition-colors text-lg mt-auto"
                >
                    Listo
                </button>
            </div>
        </div>
    )
}
