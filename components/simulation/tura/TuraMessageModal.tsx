import React from 'react'
import { X } from "lucide-react"

interface TuraMessageModalProps {
    onClose: () => void
}

export function TuraMessageModal({ onClose }: TuraMessageModalProps) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded shadow-lg w-full max-w-lg overflow-hidden">
                {/* Header */}
                <div className="bg-[#5b21b6] text-white p-3 font-bold text-sm uppercase flex justify-between items-center">
                    <span>MENSAJE DE USUARIO</span>
                    <X className="w-4 h-4 cursor-pointer" onClick={onClose} />
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="bg-[#fff3cd] text-[#856404] p-6 text-center text-xs font-medium">
                        <p>
                            GRACIAS POR CONTAR SIEMPRE CON NOSOTROS, RECUERDE QUE SI NO VA ASISTIR A LA CITA DEBE CANCELARLA CON MINIMO 2 HORAS DE ANTICIPACION
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
