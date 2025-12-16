import React from 'react'

interface WelcomeStepProps {
    onNext: () => void
}

export function WelcomeStep({ onNext }: WelcomeStepProps) {
    return (
        <div className="flex flex-col h-full bg-[#130016] text-white p-6 relative">
            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="mb-8 relative">
                    <span className="text-6xl font-bold tracking-tighter">Nesqui</span>
                    <div className="absolute -top-2 -left-4 w-4 h-4 bg-emerald-600"></div>
                </div>
            </div>

            <div className="space-y-4 mb-8">
                <button
                    onClick={onNext}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-4 rounded-lg transition-colors text-lg"
                >
                    Crea tu Nesqui
                </button>
                <button
                    className="w-full border border-white/30 text-white font-medium py-4 rounded-lg hover:bg-white/10 transition-colors text-lg"
                >
                    Entra
                </button>
            </div>
        </div>
    )
}
