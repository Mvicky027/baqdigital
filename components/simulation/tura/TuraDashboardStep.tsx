import React, { useState } from 'react'
import { ChevronDown, User, Calendar, FileText, CreditCard, List, Pill, Hospital, Briefcase, Clock } from "lucide-react"

interface TuraDashboardStepProps {
    onNavigate: (path: string) => void
}

export function TuraDashboardStep({ onNavigate }: TuraDashboardStepProps) {
    const [isCitasOpen, setIsCitasOpen] = useState(false)

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Top Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h1 className="text-[#0033a0] text-2xl font-bold tracking-tighter flex items-center gap-1">
                            EPS <span className="font-light">sura</span>
                            <div className="flex flex-col gap-0.5 ml-1 scale-75">
                                <div className="w-6 h-1 bg-[#00aec7] rounded-full rotate-[-15deg] translate-x-2"></div>
                                <div className="w-5 h-1 bg-[#00aec7] rounded-full rotate-[-15deg] translate-x-1"></div>
                                <div className="w-4 h-1 bg-[#00aec7] rounded-full rotate-[-15deg]"></div>
                            </div>
                        </h1>
                    </div>

                    <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600 font-medium">
                        <a href="#" className="hover:text-[#0033a0]">Inicio</a>

                        <div className="relative group">
                            <button
                                className="flex items-center gap-1 hover:text-[#0033a0]"
                                onClick={() => setIsCitasOpen(!isCitasOpen)}
                                onMouseEnter={() => setIsCitasOpen(true)}
                            >
                                Citas y turnos <ChevronDown className="w-4 h-4" />
                            </button>

                            {/* Dropdown Menu */}
                            {isCitasOpen && (
                                <div
                                    className="absolute top-full left-0 w-80 bg-white shadow-lg rounded-b-lg border-t-2 border-[#00aec7] py-2 z-50"
                                    onMouseLeave={() => setIsCitasOpen(false)}
                                >
                                    <button
                                        onClick={() => onNavigate('general')}
                                        className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm"
                                    >
                                        Solicitud y cancelación citas médico general
                                    </button>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm">Solicitud y cancelación citas ayudas diagnósticas</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm">Solicitud y cancelación citas Optometría</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm">Solicitud y cancelación otras citas</a>
                                    <div className="border-t border-gray-100 my-1"></div>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm">Turno virtual trámites operativos</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm">Turno virtual medicina laboral</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm">Turno virtual autorizaciones de salud</a>
                                </div>
                            )}
                        </div>

                        <a href="#" className="flex items-center gap-1 hover:text-[#0033a0]">Pagos y reembolsos <ChevronDown className="w-4 h-4" /></a>
                        <a href="#" className="flex items-center gap-1 hover:text-[#0033a0]">Afiliaciones y retiros <ChevronDown className="w-4 h-4" /></a>
                        <a href="#" className="flex items-center gap-1 hover:text-[#0033a0]">Solicitudes y autorizaciones <ChevronDown className="w-4 h-4" /></a>
                        <a href="#" className="flex items-center gap-1 hover:text-[#0033a0]">Certificados y consultas <ChevronDown className="w-4 h-4" /></a>

                        <div className="ml-4">
                            <User className="w-6 h-6 text-[#00aec7]" />
                        </div>
                    </nav>
                </div>
            </header>

            {/* Blue Bar */}
            <div className="bg-[#00aec7] h-12 flex items-center justify-between px-4 md:px-8 text-white text-sm">
                <div className="font-bold">EPS</div>
                <div>Directorio médico PBS</div>
            </div>

            {/* Gray Bar */}
            <div className="bg-gray-200 h-8 flex items-center px-4 md:px-8 text-xs text-gray-600">
                <span>Inicio</span>
            </div>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
                {/* Left Column */}
                <div className="flex-1">
                    <h2 className="text-[#0033a0] text-3xl font-bold mb-1">Servicios a un clic</h2>
                    <h3 className="text-gray-600 text-2xl mb-4">Hola, MARIA</h3>
                    <p className="text-gray-500 text-sm mb-2">Realiza fácilmente tus procesos con EPS SURA.</p>
                    <p className="text-gray-500 text-sm mb-8">¡Conoce aquí las soluciones virtuales que tenemos especialmente para ti!</p>

                    <h4 className="text-[#0033a0] font-bold mb-6">Los servicios más utilizados</h4>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        <button
                            onClick={() => onNavigate('general')}
                            className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow h-40 justify-center"
                        >
                            <Calendar className="w-8 h-8 text-[#0033a0]" />
                            <span className="text-xs font-medium text-gray-700">Solicitud y cancelación citas médico general</span>
                        </button>

                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow h-40 justify-center">
                            <Calendar className="w-8 h-8 text-[#0033a0]" />
                            <span className="text-xs font-medium text-gray-700">Solicitud y cancelación citas ayudas diagnósticas</span>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow h-40 justify-center">
                            <FileText className="w-8 h-8 text-[#0033a0]" />
                            <span className="text-xs font-medium text-gray-700">Historia clínica</span>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow h-40 justify-center">
                            <CreditCard className="w-8 h-8 text-[#0033a0]" />
                            <span className="text-xs font-medium text-gray-700">Autorización de órdenes y solicitud de servicios</span>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow h-40 justify-center">
                            <List className="w-8 h-8 text-[#0033a0]" />
                            <span className="text-xs font-medium text-gray-700">Transcripción de incapacidades</span>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow h-40 justify-center">
                            <Pill className="w-8 h-8 text-[#0033a0]" />
                            <span className="text-xs font-medium text-gray-700">Medicamentos</span>
                        </div>
                    </div>
                </div>

                {/* Right Column (Sidebar) */}
                <div className="w-full md:w-80 space-y-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-600 text-sm font-medium">Tu grupo familiar</span>
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                        </div>

                        <div className="space-y-4">
                            <div className="flex gap-3 items-start border-b border-gray-100 pb-3">
                                <User className="w-5 h-5 text-[#0033a0] mt-1" />
                                <div>
                                    <p className="text-xs text-gray-500 uppercase">MEDICO DE FAMILIA</p>
                                    <p className="text-xs font-bold text-gray-700">MAURICIO ALEXANDER VERGEL BRUGES</p>
                                    <a href="#" className="text-[#0033a0] text-xs font-medium">Ver más</a>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start border-b border-gray-100 pb-3">
                                <User className="w-5 h-5 text-[#0033a0] mt-1" />
                                <div>
                                    <p className="text-xs text-gray-500 uppercase">TIPO DE AFILIADO</p>
                                    <p className="text-xs font-bold text-gray-700">BENEFICIARIO</p>
                                    <p className="text-xs text-gray-500">GRUPO DE INGRESOS: B</p>
                                    <a href="#" className="text-[#0033a0] text-xs font-medium">Ver más</a>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start border-b border-gray-100 pb-3">
                                <Hospital className="w-5 h-5 text-[#0033a0] mt-1" />
                                <div>
                                    <p className="text-xs text-gray-500 uppercase">ESTADO DE AFILIACION</p>
                                    <p className="text-xs font-bold text-gray-700">TIENE DERECHO A COBERTURA INTEGRAL</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start">
                                <Hospital className="w-5 h-5 text-[#0033a0] mt-1" />
                                <div>
                                    <p className="text-xs text-gray-500 uppercase">IPS ACTUAL</p>
                                    <p className="text-xs font-bold text-gray-700">IPS VIVA 1A PORTAL DEL PRADO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
