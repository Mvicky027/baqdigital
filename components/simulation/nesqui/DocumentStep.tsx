import React from 'react'
import { ArrowLeft, ChevronRight } from "lucide-react"

interface DocumentStepProps {
    setSelectedDocument: (value: string) => void
    onNext: () => void
    onBack: () => void
}

export function DocumentStep({ setSelectedDocument, onNext, onBack }: DocumentStepProps) {
    return (
        <div className="flex flex-col h-full bg-white p-6">
            <div className="mb-6">
                <ArrowLeft className="w-6 h-6 text-gray-800 cursor-pointer" onClick={onBack} />
            </div>

            <h1 className="text-2xl font-bold text-[#130016] mb-8">Tu documento de identidad</h1>

            <div className="space-y-4">
                {["Cédula de ciudadanía", "Cédula de extranjería", "Tarjeta de identidad", "Permiso por protección temporal"].map((doc) => (
                    <div
                        key={doc}
                        onClick={() => {
                            setSelectedDocument(doc)
                            onNext()
                        }}
                        className="w-full p-4 border border-gray-200 rounded-xl flex justify-between items-center cursor-pointer hover:border-[#059669] hover:bg-emerald-50 transition-all"
                    >
                        <span className="text-[#130016] font-medium">{doc}</span>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                ))}
            </div>

            <div className="mt-auto text-center">
                <button className="text-[#059669] font-medium text-sm">
                    Tengo otro documento
                </button>
            </div>
        </div>
    )
}
