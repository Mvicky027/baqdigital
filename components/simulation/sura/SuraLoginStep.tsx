import React, { useState } from 'react'
import { ChevronDown } from "lucide-react"

interface SuraLoginStepProps {
    onLogin: () => void
}

export function SuraLoginStep({ onLogin }: SuraLoginStepProps) {
    const [idType, setIdType] = useState("Cédula de Ciudadanía")
    const [idNumber, setIdNumber] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (idNumber && password) {
            onLogin()
        }
    }

    return (
        <div className="flex flex-col items-center min-h-screen bg-white p-4 font-sans">
            {/* Logo */}
            <div className="mb-8 mt-12">
                <h1 className="text-[#0033a0] text-5xl font-bold tracking-tighter flex items-center gap-2">
                    eps <span className="font-light">sura</span>
                    {/* Simple geometric representation of the bird logo */}
                    <div className="flex flex-col gap-0.5 ml-1">
                        <div className="w-6 h-1 bg-[#00aec7] rounded-full rotate-[-15deg] translate-x-2"></div>
                        <div className="w-5 h-1 bg-[#00aec7] rounded-full rotate-[-15deg] translate-x-1"></div>
                        <div className="w-4 h-1 bg-[#00aec7] rounded-full rotate-[-15deg]"></div>
                    </div>
                </h1>
            </div>

            {/* Login Card */}
            <div className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-sm p-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-medium text-gray-800">Iniciar sesión</h2>
                    <p className="text-gray-500 text-sm">EPS SURA</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <select
                            value={idType}
                            onChange={(e) => setIdType(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-3 text-gray-600 appearance-none bg-white focus:outline-none focus:border-[#0033a0] focus:ring-1 focus:ring-[#0033a0]"
                        >
                            <option>Tipo de identificación</option>
                            <option>Cédula de Ciudadanía</option>
                            <option>Tarjeta de Identidad</option>
                            <option>Cédula de Extranjería</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Número de identificación"
                            value={idNumber}
                            onChange={(e) => setIdNumber(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0033a0] focus:ring-1 focus:ring-[#0033a0]"
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded-md p-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0033a0] focus:ring-1 focus:ring-[#0033a0]"
                        />
                    </div>

                    <div className="flex justify-between items-center pt-4">
                        <a href="#" className="text-[#0033a0] text-sm font-medium hover:underline">
                            ¿Has olvidado tu contraseña?
                        </a>
                        <button
                            type="submit"
                            className="bg-[#0033a0] text-white px-6 py-2 rounded-full font-medium hover:bg-[#002a80] transition-colors"
                        >
                            Iniciar sesión
                        </button>
                    </div>
                </form>
            </div>

            {/* Footer Links */}
            <div className="mt-8 text-center">
                <p className="text-gray-800 font-medium">¿Aún no tienes una cuenta?</p>
                <a href="#" className="text-[#0033a0] font-bold hover:underline">
                    Crear una cuenta
                </a>
            </div>

            {/* Bottom Footer */}
            <div className="mt-auto py-6 text-center text-xs text-gray-500 flex gap-4 justify-center w-full border-t border-gray-100">
                <span>© 2025 Suramericana S.A</span>
                <a href="#" className="text-[#0033a0]">Ayuda</a>
                <a href="#" className="text-[#0033a0]">Privacidad</a>
                <a href="#" className="text-[#0033a0]">Seguridad</a>
            </div>
        </div>
    )
}
