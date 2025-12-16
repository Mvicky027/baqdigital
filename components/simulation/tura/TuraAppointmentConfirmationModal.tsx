import React from 'react'

interface TuraAppointmentConfirmationModalProps {
    onClose: () => void
}

export function TuraAppointmentConfirmationModal({ onClose }: TuraAppointmentConfirmationModalProps) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded shadow-lg w-full max-w-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-[#5b21b6] text-white p-3 font-bold text-sm uppercase">
                    MENSAJE DE USUARIO
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="bg-[#d4edda] border border-[#c3e6cb] text-[#155724] p-4 text-center text-xs space-y-2 mb-6">
                        <p>
                            SEÑORa MARIA VICTORIA VILORIA ANAYA, SU CITA CON EL PROFESIONAL SERGIO ENRIQUE MOZO MUNOZ EN LA SEDE IPS VIVA 1A PORTAL DEL PRADO HA SIDO PROGRAMADA PARA EL sábado 27 de diciembre de 2025 A LAS 11:00. RECUERDA QUE ESTA CITA ES PRESENCIAL POR LO CUAL DEBES DESPLAZARTE AL LUGAR DE ATENCIÓN.. RECUERDE QUE ESTA CITA NO FUE ASIGNADA CON SU MEDICO DE FAMILIA
                        </p>
                    </div>

                    <div className="flex justify-center gap-2">
                        <button
                            onClick={onClose}
                            className="bg-[#dc3545] text-white px-4 py-1.5 rounded text-xs font-medium hover:bg-red-700"
                        >
                            Cerrar
                        </button>
                        <button
                            className="bg-violet-600 text-white px-4 py-1.5 rounded text-xs font-medium hover:bg-violet-600"
                        >
                            Nueva cita para otro servicio
                        </button>
                        <button
                            className="bg-violet-600 text-white px-4 py-1.5 rounded text-xs font-medium hover:bg-violet-600"
                        >
                            Verificar valor
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
