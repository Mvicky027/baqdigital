import React, { useState, useEffect } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

interface SuraAppointmentStepProps {
    onAssignAppointment: () => void
    onTabChange: (tab: 'assign' | 'list') => void
}

export function SuraAppointmentStep({ onAssignAppointment, onTabChange }: SuraAppointmentStepProps) {
    const [service, setService] = useState("CONSULTA MEDICINA GENERAL SALUD CITA PRESI")
    const [showAvailability, setShowAvailability] = useState(false)

    // Editable state for Affiliate Info
    const [idInfo, setIdInfo] = useState("")
    const [name, setName] = useState("")
    const [ips, setIps] = useState("")

    // Editable state for Contact Info
    const [phone, setPhone] = useState("")
    const [cellphone, setCellphone] = useState("")
    const [email, setEmail] = useState("")

    // State for API data
    const [apiData, setApiData] = useState({
        idInfo: "",
        name: "",
        ips: "",
        cellphone: "",
        email: ""
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/simulations/sura/user')
                if (response.ok) {
                    const data = await response.json()
                    setApiData(data)
                }
            } catch (error) {
                console.error("Failed to fetch user data", error)
            }
        }
        fetchData()
    }, [])

    return (
        <div className="min-h-screen bg-white font-sans">
            <div className="container mx-auto px-4 py-8 max-w-5xl">
                {/* Tabs */}
                <div className="flex gap-4 mb-8">
                    <button
                        onClick={() => onTabChange('assign')}
                        className="bg-[#007bff] text-white px-4 py-2 rounded text-sm font-medium"
                    >
                        Asignación de citas
                    </button>
                    <button
                        onClick={() => onTabChange('list')}
                        className="text-[#007bff] px-4 py-2 rounded text-sm font-medium hover:bg-blue-50"
                    >
                        Consulta, pago y cancelación
                    </button>
                    <div className="ml-auto text-[#007bff] text-sm font-medium cursor-pointer hover:underline">
                        Nueva cita para otros servicios
                    </div>
                </div>

                <div className="border border-gray-200 rounded-lg shadow-sm bg-white">
                    {/* Card Header */}
                    <div className="flex justify-between items-center p-4 border-b border-gray-200">
                        <h2 className="text-[#0033a0] font-bold text-sm uppercase">Asignación de citas</h2>
                        <button className="bg-[#dc3545] text-white px-3 py-1 rounded text-xs font-medium">
                            Cerrar sesión
                        </button>
                    </div>

                    <div className="p-6 space-y-8">
                        {/* Affiliate Info */}
                        <div>
                            <div className="bg-[#e9ecef] px-4 py-2 mb-4">
                                <h3 className="text-gray-600 font-bold text-xs uppercase">Información del afiliado</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-gray-500 text-xs mb-1">Tipo y número de identificación</label>
                                    <input
                                        type="text"
                                        value={idInfo}
                                        onChange={(e) => setIdInfo(e.target.value)}
                                        placeholder={apiData.idInfo}
                                        className="w-full border border-gray-300 rounded p-2 text-sm text-gray-700 focus:outline-none focus:border-[#007bff] bg-white placeholder:text-gray-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-500 text-xs mb-1">Nombre</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder={apiData.name}
                                        className="w-full border border-gray-300 rounded p-2 text-sm text-gray-700 focus:outline-none focus:border-[#007bff] bg-white placeholder:text-gray-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-500 text-xs mb-1">IPS Básica</label>
                                    <input
                                        type="text"
                                        value={ips}
                                        onChange={(e) => setIps(e.target.value)}
                                        placeholder={apiData.ips}
                                        className="w-full border border-gray-300 rounded p-2 text-sm text-gray-700 focus:outline-none focus:border-[#007bff] bg-white placeholder:text-gray-400"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <div className="bg-[#e9ecef] px-4 py-2 mb-4">
                                <h3 className="text-gray-600 font-bold text-xs uppercase">Información de contacto</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                                <div>
                                    <label className="block text-gray-500 text-xs mb-1">Número de Teléfono</label>
                                    <input
                                        type="text"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full border border-gray-300 rounded p-2 text-sm text-gray-700 focus:outline-none focus:border-[#007bff] bg-white h-[38px]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-500 text-xs mb-1">Número de Celular</label>
                                    <input
                                        type="text"
                                        value={cellphone}
                                        onChange={(e) => setCellphone(e.target.value)}
                                        placeholder={apiData.cellphone}
                                        className="w-full border border-gray-300 rounded p-2 text-sm text-gray-700 focus:outline-none focus:border-[#007bff] bg-white placeholder:text-gray-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-500 text-xs mb-1">Dirección de correo</label>
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={apiData.email}
                                        className="w-full border border-gray-300 rounded p-2 text-sm text-gray-700 focus:outline-none focus:border-[#007bff] bg-white placeholder:text-gray-400"
                                    />
                                </div>
                            </div>
                            <button className="bg-[#007bff] text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-600 transition-colors w-full md:w-auto">
                                Actualiza tus datos
                            </button>
                        </div>

                        {/* Appointment Info */}
                        <div>
                            <div className="bg-[#e9ecef] px-4 py-2 mb-4">
                                <h3 className="text-gray-600 font-bold text-xs uppercase">Información de citas</h3>
                            </div>

                            {showAvailability ? (
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-gray-500 text-xs mb-1">Profesional</label>
                                        <div className="relative w-full">
                                            <select
                                                className="w-full border border-gray-300 rounded p-2 text-sm text-gray-700 appearance-none bg-[#dbeafe] focus:outline-none focus:border-[#007bff] pr-8 truncate"
                                            >
                                                <option>MOZO MUÑOZ SERGIO ENRIQUE (MEDICO GENERAL) - 2025/12/15</option>
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-4">
                                        {/* Calendar */}
                                        <div className="w-full md:w-64 border border-gray-200 rounded p-2">
                                            <div className="flex justify-between items-center mb-2 bg-[#00aec7] text-white p-1 rounded">
                                                <button><ChevronLeft className="w-4 h-4" /></button>
                                                <span className="text-xs font-bold">Diciembre 2025</span>
                                                <button><ChevronRight className="w-4 h-4" /></button>
                                            </div>
                                            <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 mb-1">
                                                <span>L</span><span>M</span><span>X</span><span>J</span><span>V</span><span>S</span><span>D</span>
                                            </div>
                                            <div className="grid grid-cols-7 gap-1 text-center text-xs">
                                                <span className="text-gray-300">1</span><span className="text-gray-300">2</span><span className="text-gray-300">3</span><span className="text-gray-300">4</span><span className="text-gray-300">5</span><span className="text-gray-300">6</span><span className="text-gray-300">7</span>
                                                <span className="text-gray-300">8</span><span className="text-gray-300">9</span><span className="text-gray-300">10</span><span className="text-gray-300">11</span><span className="text-gray-300">12</span><span className="text-gray-300">13</span><span className="text-gray-300">14</span>
                                                <span className="bg-[#5c6bc0] text-white rounded">15</span><span className="text-gray-300">16</span><span className="text-gray-300">17</span><span className="text-gray-300">18</span><span className="text-gray-300">19</span><span className="text-gray-300">20</span><span className="text-gray-300">21</span>
                                                <span className="text-gray-300">22</span><span className="text-gray-300">23</span><span className="bg-[#00aec7] text-white rounded">24</span><span className="text-gray-300">25</span><span className="bg-[#00aec7] text-white rounded">26</span><span className="bg-[#00aec7] text-white rounded">27</span><span className="text-gray-300">28</span>
                                                <span className="bg-[#00aec7] text-white rounded">29</span><span className="bg-[#00aec7] text-white rounded">30</span><span className="text-gray-300">31</span>
                                            </div>
                                            <div className="flex gap-2 mt-4 text-[10px] justify-center">
                                                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-[#5c6bc0]"></div> Hoy</div>
                                                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-[#00aec7]"></div> Disponible</div>
                                                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-gray-300"></div> No disponible</div>
                                            </div>
                                        </div>

                                        {/* Slots Table */}
                                        <div className="flex-1 border border-gray-200 rounded overflow-hidden">
                                            <div className="bg-[#0033a0] text-white text-xs font-bold flex p-2">
                                                <div className="w-1/3 text-center">HORAS (FORMATO 24 HORAS)</div>
                                                <div className="w-1/3 text-center">LUGAR DE ATENCIÓN</div>
                                                <div className="w-1/3 text-center">LUNES 2025/12/15</div>
                                            </div>
                                            <div className="divide-y divide-gray-200">
                                                <div className="flex text-xs items-center p-2">
                                                    <div className="w-1/3 text-center text-gray-600">13:20</div>
                                                    <div className="w-1/3 text-center text-gray-500">IPS VIVA 1A PORTAL DEL PRADO</div>
                                                    <div className="w-1/3 text-center">
                                                        <button
                                                            onClick={onAssignAppointment}
                                                            className="bg-[#007bff] text-white px-4 py-1 rounded text-[10px] font-bold hover:bg-blue-600"
                                                        >
                                                            ASIGNAR CITA
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex text-xs items-center p-2 bg-gray-50">
                                                    <div className="w-1/3 text-center text-gray-600">16:40</div>
                                                    <div className="w-1/3 text-center text-gray-500">IPS VIVA 1A PORTAL DEL PRADO</div>
                                                    <div className="w-1/3 text-center">
                                                        <button
                                                            onClick={onAssignAppointment}
                                                            className="bg-[#007bff] text-white px-4 py-1 rounded text-[10px] font-bold hover:bg-blue-600"
                                                        >
                                                            ASIGNAR CITA
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                                    <div className="w-full">
                                        <label className="block text-gray-500 text-xs mb-1">Servicio</label>
                                        <div className="relative w-full">
                                            <select
                                                value={service}
                                                onChange={(e) => setService(e.target.value)}
                                                className="w-full border border-gray-300 rounded p-2 text-sm text-gray-700 appearance-none bg-[#e9ecef] focus:outline-none focus:border-[#007bff] pr-8 truncate"
                                            >
                                                <option>CONSULTA MEDICINA GENERAL SALUD CITA PRESI</option>
                                            </select>
                                            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setShowAvailability(true)}
                                        className="bg-[#007bff] text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-600 transition-colors w-full"
                                    >
                                        Consultar disponibilidad
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}