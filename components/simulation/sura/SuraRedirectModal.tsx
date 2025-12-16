import React from 'react'

interface TuraRedirectModalProps {
    onClose: () => void
}

export function TuraRedirectModal({ onClose }: TuraRedirectModalProps) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-start justify-center pt-20 z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-gray-100 text-center">
                    <h3 className="text-gray-600 font-bold text-lg">Somos tu experto aliado</h3>
                </div>

                {/* Content */}
                <div className="p-8 text-center">
                    <p className="text-gray-600 text-sm mb-8">
                        En un momento te direccionaremos para que continúes con el proceso de solicitud de tu cita.
                    </p>

                    <div className="flex justify-end">
                        <button
                            onClick={onClose}
                            className="bg-[#0033a0] text-white px-8 py-2 rounded-full font-bold text-sm hover:bg-[#002a80] transition-colors uppercase"
                        >
                            Entendido
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
