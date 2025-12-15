import React, { useState } from 'react'
import { Calendar } from "lucide-react"

interface SuraPatientDataStepProps {
    onNext: () => void
}

export function SuraPatientDataStep({ onNext }: SuraPatientDataStepProps) {
    const [idType, setIdType] = useState("CÉDULA DE CIUDADANÍA")
    const [idNumber, setIdNumber] = useState("")
    const [phone, setPhone] = useState("")
    const [dob, setDob] = useState("")
    const [accepted, setAccepted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (idNumber && phone && dob && accepted) {
            onNext()
        }
    }

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <h1 className="text-[#0033a0] text-2xl font-bold tracking-tighter flex items-center gap-1">
                        eps <span className="font-light">sura</span>
                        <div className="flex flex-col gap-0.5 ml-1 scale-75">
                            <div className="w-6 h-1 bg-[#00aec7] rounded-full rotate-[-15deg] translate-x-2"></div>
                            <div className="w-5 h-1 bg-[#00aec7] rounded-full rotate-[-15deg] translate-x-1"></div>
                            <div className="w-4 h-1 bg-[#00aec7] rounded-full rotate-[-15deg]"></div>
                        </div>
                    </h1>
                </div>
            </header>

            {/* Blue Bar */}
            <div className="bg-[#00aec7] h-8 flex items-center px-4 text-white text-sm font-bold">
                EPS
            </div>

            <div className="container mx-auto px-4 py-12">
                <h2 className="text-[#0033a0] text-center text-sm font-medium mb-8">
                    Por favor diligencia los siguientes datos del paciente:
                </h2>

                <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div>
                            <label className="block text-[#0033a0] text-xs font-bold mb-1">Tipo de documento</label>
                            <select
                                value={idType}
                                onChange={(e) => setIdType(e.target.value)}
                                className="w-full border border-gray-300 rounded p-2 text-sm text-gray-700 focus:outline-none focus:border-[#0033a0]"
                            >
                                <option>CÉDULA DE CIUDADANÍA</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-[#0033a0] text-xs font-bold mb-1">Número de identificación</label>
                            <input
                                type="text"
                                placeholder="Ingresa el número de Identificación"
                                value={idNumber}
                                onChange={(e) => setIdNumber(e.target.value)}
                                className="w-full border border-gray-300 rounded p-2 text-sm placeholder-gray-400 focus:outline-none focus:border-[#0033a0]"
                            />
                        </div>

                        <div>
                            <label className="block text-[#0033a0] text-xs font-bold mb-1">Número de teléfono celular</label>
                            <input
                                type="text"
                                placeholder="Ingresa el número de teléfono celular"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full border border-gray-300 rounded p-2 text-sm placeholder-gray-400 focus:outline-none focus:border-[#0033a0] bg-gray-50"
                            />
                        </div>

                        <div>
                            <label className="block text-[#0033a0] text-xs font-bold mb-1">Fecha de nacimiento</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="DD/MM/AAAA"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    className="w-full border border-gray-300 rounded p-2 text-sm placeholder-gray-400 focus:outline-none focus:border-[#0033a0] bg-gray-50"
                                />
                                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#00aec7] rounded-full p-1">
                                    <Calendar className="w-3 h-3 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-2 mb-8">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={accepted}
                            onChange={(e) => setAccepted(e.target.checked)}
                            className="w-4 h-4 border-gray-300 rounded text-[#0033a0] focus:ring-[#0033a0]"
                        />
                        <label htmlFor="terms" className="text-[#0033a0] text-sm font-bold">
                            Acepto términos y condiciones
                        </label>
                    </div>

                    {/* Hidden submit button to allow Enter key submission, or could add a visible button if needed, 
                  though the screenshot doesn't show one clearly, usually these forms auto-submit or have a button below.
                  I'll add a button for usability. */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-[#0033a0] text-white px-8 py-2 rounded-full font-bold hover:bg-[#002a80] transition-colors"
                        >
                            Continuar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
