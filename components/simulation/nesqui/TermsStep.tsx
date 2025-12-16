import React from 'react'
import { ArrowLeft, Eye } from "lucide-react"

interface TermsStepProps {
    onNext: () => void
    onBack: () => void
}

export function TermsStep({ onNext, onBack }: TermsStepProps) {
    return (
        <div className="flex flex-col h-full bg-white p-6">
            <div className="mb-4">
                <ArrowLeft className="w-6 h-6 text-gray-800 cursor-pointer" onClick={onBack} />
            </div>

            <div className="flex justify-center mb-4">
                <div className="relative">
                    {/* Simple illustration of person with phone */}
                    <div className="w-32 h-32 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
                        <span className="text-[#da0081] font-cursive text-2xl">A Tu Ritmo</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold text-[#130016] leading-tight">Reglamento Depósito de Bajo Monto</h1>
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold shrink-0 ml-2">12</div>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 text-xs text-gray-600 space-y-3 mb-4">
                <p><span className="text-[#da0081] font-bold">Los requisitos:</span> Debes ser mayor de edad, vivir en Colombia, tener cédula, Permiso por Protección Temporal (migrantes venezolanos PPT) o tarjeta de identidad, y poder firmar contratos legales.</p>
                <p><span className="text-[#da0081] font-bold">Tu Nesqui:</span> Es un Depósito de Bajo Monto ligado a tu celular u otros datos que elijas en el sistema de pagos. Solo puedes tener uno con nosotros.</p>
                <p><span className="text-[#da0081] font-bold">Tu información:</span> Debes compartirnos toda la información y documentación necesaria para que te conozcamos mejor.</p>
                <p><span className="text-[#da0081] font-bold">Tus límites:</span> Por ley, tu saldo y débitos mensuales no pueden superar 210.50 UVT. Estás exento del 4x1000 hasta 65 UVT al mes.</p>

                <h3 className="text-[#da0081] font-bold mt-4">Aceptación Reglamento Depósito de Bajo Monto</h3>
                <p>¡Hola! Nos encanta que quieras tener Nesqui para manejar la plata #ATuRitmo. Con la aceptación de este Reglamento das el paso final para abrir tu Depósito de Bajo Monto, más conocido como 'Tu Nesqui'. Este Depósito de Bajo Monto es habilitado por BANCOLOMBIA S.A. a través de su línea de negocio Nesqui (en adelante "Nesqui"), y tiene los términos y condiciones que te contamos a continuación.</p>
                <p>Ten en cuenta que a este Reglamento le aplican las normas vigentes y lo puedes encontrar publicado en nuestro sitio</p>
            </div>

            <button
                onClick={onNext}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-4 rounded-lg transition-colors text-lg mt-auto"
            >
                Aceptar
            </button>
        </div>
    )
}
