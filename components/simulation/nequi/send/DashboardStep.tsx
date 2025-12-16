
import React, { useState } from 'react'
import { User, Bell, HelpCircle, Grid, ArrowDown, ArrowUp, ArrowRight, QrCode, Smartphone, X, ArrowLeft } from "lucide-react"

interface DashboardStepProps {
    onSend: () => void
}

export function DashboardStep({ onSend }: DashboardStepProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="flex flex-col h-full bg-white relative">
            {/* Header Section with Dark Background */}
            <div className="bg-[#130016] p-6 pb-12 rounded-b-[3rem] relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                            <User className="text-white w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-xs">Hola,</p>
                            <p className="text-white font-bold">Carolina</p>
                        </div>
                    </div>
                    <div className="flex gap-4 text-white">
                        <Bell className="w-6 h-6" />
                        <HelpCircle className="w-6 h-6" />
                    </div>
                </div>

                <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-2 text-white mb-1">
                        <span>Cuenta bajo monto</span>
                        <span className="text-xs">👁</span>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-1">$ 100.000<span className="text-xl">,00</span></h1>
                    <p className="text-gray-400 text-sm">Total: $ 1.525.780,67</p>
                </div>

                <div className="flex justify-center">
                    <button className="border border-white/30 text-white px-4 py-1 rounded-full text-sm flex items-center gap-2">
                        Tu plata <ArrowDown className="w-3 h-3" />
                    </button>
                </div>
            </div>

            {/* Pink decoration behind header */}
            <div className="absolute top-40 left-0 right-0 h-20 bg-[#da0081] -skew-y-3 z-0"></div>

            {/* Main Actions Grid */}
            <div className="p-6 pt-8">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-gray-700">Tus favoritos</h3>
                    <span className="text-[#da0081]">✎</span>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-8">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-14 h-14 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm">
                            <Smartphone className="text-[#da0081]" />
                        </div>
                        <span className="text-xs text-center text-gray-600">Tarjeta Nequi</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-14 h-14 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm">
                            <div className="grid grid-cols-2 gap-1">
                                <div className="w-1 h-1 bg-[#da0081] rounded-full"></div>
                                <div className="w-1 h-1 bg-[#da0081] rounded-full"></div>
                                <div className="w-1 h-1 bg-[#da0081] rounded-full"></div>
                                <div className="w-1 h-1 bg-[#da0081] rounded-full"></div>
                            </div>
                        </div>
                        <span className="text-xs text-center text-gray-600">Colchón</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-14 h-14 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm">
                            <div className="w-6 h-6 border-2 border-[#da0081] rounded-t-lg border-b-0"></div>
                        </div>
                        <span className="text-xs text-center text-gray-600">Bolsillos</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-14 h-14 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm">
                            <div className="w-6 h-6 rounded-full border-2 border-[#da0081]"></div>
                        </div>
                        <span className="text-xs text-center text-gray-600">Metas</span>
                    </div>
                </div>
            </div>

            {/* Floating Action Menu */}
            <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
                {isMenuOpen && (
                    <div
                        className="absolute inset-0 bg-[#130016]/90 pointer-events-auto animate-in fade-in duration-200"
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}

                <div className="absolute bottom-6 right-6 flex flex-col gap-3 items-end pointer-events-auto">
                    {isMenuOpen ? (
                        <>
                            <div className="flex items-center gap-4 animate-in slide-in-from-bottom-2 fade-in duration-200">
                                <span className="text-white font-medium">Servicios</span>
                                <button className="bg-[#42a5f5] text-white p-3 rounded-full shadow-lg w-12 h-12 flex items-center justify-center">
                                    <Grid className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex items-center gap-4 animate-in slide-in-from-bottom-3 fade-in duration-200">
                                <span className="text-white font-medium">Saca</span>
                                <button className="bg-[#da0081] text-white p-3 rounded-full shadow-lg w-12 h-12 flex items-center justify-center">
                                    <ArrowUp className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex items-center gap-4 animate-in slide-in-from-bottom-4 fade-in duration-200">
                                <span className="text-white font-medium">Pide</span>
                                <button className="bg-[#da0081] text-white p-3 rounded-full shadow-lg w-12 h-12 flex items-center justify-center">
                                    <ArrowLeft className="w-6 h-6 rotate-180" />
                                </button>
                            </div>

                            <div className="flex items-center gap-4 animate-in slide-in-from-bottom-5 fade-in duration-200">
                                <div className="bg-white border border-[#da0081] text-[#da0081] px-6 py-2 rounded-lg shadow-sm font-medium">
                                    Envía
                                </div>
                                <button
                                    onClick={onSend}
                                    className="bg-[#da0081] text-white p-3 rounded-full shadow-lg w-12 h-12 flex items-center justify-center"
                                >
                                    <ArrowRight className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex items-center gap-4 animate-in slide-in-from-bottom-6 fade-in duration-200">
                                <span className="text-white font-medium">Código QR</span>
                                <button className="bg-[#da0081] text-white p-3 rounded-full shadow-lg w-12 h-12 flex items-center justify-center">
                                    <QrCode className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex items-center gap-4 animate-in slide-in-from-bottom-7 fade-in duration-200">
                                <span className="text-white font-medium">Recarga Nequi</span>
                                <button className="bg-[#da0081] text-white p-3 rounded-full shadow-lg w-12 h-12 flex items-center justify-center">
                                    <ArrowUp className="w-6 h-6" />
                                </button>
                            </div>

                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="bg-gray-200 text-gray-600 p-3 rounded-lg shadow-lg w-12 h-12 flex items-center justify-center mt-2 hover:bg-gray-300 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="bg-[#da0081] text-white w-14 h-14 rounded-lg flex items-center justify-center font-bold text-2xl shadow-lg hover:scale-105 transition-transform"
                        >
                            $
                        </button>
                    )}
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="mt-auto bg-white border-t border-gray-200 p-4 flex justify-around relative z-20">
                <div className="flex flex-col items-center gap-1 text-[#130016]">
                    <div className="w-6 h-6 bg-[#130016] rounded-full"></div>
                    <span className="text-xs font-bold">Inicio</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-gray-400">
                    <div className="w-6 h-6 border border-gray-400 rounded"></div>
                    <span className="text-xs">Movimientos</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-gray-400">
                    <Grid className="w-6 h-6" />
                    <span className="text-xs">Servicios</span>
                </div>
                {/* Spacer for the FAB */}
                <div className="w-12"></div>
            </div>
        </div>
    )
}

