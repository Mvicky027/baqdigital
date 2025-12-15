import React, { useState, useEffect } from 'react'
import { Calendar } from "lucide-react"

interface SuraAppointmentsListStepProps {
    onTabChange: (tab: 'assign' | 'list') => void
    onCancel: () => void
}

export function SuraAppointmentsListStep({ onTabChange, onCancel }: SuraAppointmentsListStepProps) {
    const [idNumber, setIdNumber] = useState("")
    const [name, setName] = useState("")
    const [showResults, setShowResults] = useState(false)
    const [apiData, setApiData] = useState({
        idInfo: "",
        name: ""
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

    const handleSearch = () => {
        setShowResults(true)
    }

    return (
        <div className="min-h-screen bg-white font-sans">
            <div className="container mx-auto px-4 py-8 max-w-5xl">
                {/* Tabs */}
                <div className="flex gap-4 mb-8">
                    <button
                        onClick={() => onTabChange('assign')}
                        className="text-[#007bff] px-4 py-2 rounded text-sm font-medium hover:bg-blue-50"
                    >
                        Asignación de citas
                    </button>
                    <button
                        onClick={() => onTabChange('list')}
                        className="bg-[#007bff] text-white px-4 py-2 rounded text-sm font-medium"
                    >
                        Consulta, pago y cancelación
                    </button>
                </div>

                <div className="border border-gray-200 rounded-lg shadow-sm bg-white">
                    {/* Card Header */}
                    <div className="flex justify-between items-center p-4 border-b border-gray-200">
                        <h2 className="text-[#0033a0] font-bold text-sm uppercase">CONSULTA, PAGO Y CANCELACIÓN DE CITAS</h2>
                        <button className="bg-[#dc3545] text-white px-3 py-1 rounded text-xs font-medium">
                            Cerrar sesión
                        </button>
                    </div>

                    <div className="p-6 space-y-8">
                        {/* Search Filter */}
                        <div className="bg-[#e9ecef] p-4 rounded">
                            <div className="mb-2">
                                <h3 className="text-gray-600 font-bold text-xs uppercase">FILTRO DE BÚSQUEDA</h3>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 items-end">
                                <div className="flex-1">
                                    <label className="block text-gray-500 text-xs mb-1">Tipo y número de identificación</label>
                                    <input
                                        type="text"
                                        value={idNumber}
                                        onChange={(e) => setIdNumber(e.target.value)}
                                        placeholder={apiData.idInfo}
                                        className="w-full border border-gray-300 rounded p-2 text-sm text-gray-600 bg-white placeholder:text-gray-400"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-gray-500 text-xs mb-1">Nombre</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder={apiData.name}
                                        className="w-full border border-gray-300 rounded p-2 text-sm text-gray-600 bg-white placeholder:text-gray-400"
                                    />
                                </div>
                                <button
                                    onClick={handleSearch}
                                    className="bg-[#007bff] text-white px-8 py-2 rounded text-sm font-medium hover:bg-blue-600"
                                >
                                    Buscar
                                </button>
                            </div>
                        </div>

                        {/* Important Notice */}
                        <div className="bg-[#fff3cd] border border-[#ffeeba] text-[#856404] p-4 text-xs rounded">
                            <p className="font-bold mb-1">IMPORTANTE</p>
                            <p>
                                SEÑOR USUARIO, RECUERDE QUE A TRAVES DE ESTE MEDIO SOLO PODRA CANCELAR LAS CITAS DE MEDICINA GENERAL, ODONTOLOGIA, SALUD VISUAL Y MEDICO ESPECIALISTA. SI USTED TIENE CITAS ASIGNADAS QUE NO SE VISUALIZAN POR ESTA OPCION, PARA SU CANCELACION COMUNIQUESE CON LA CENTRAL DE CITAS DE SU IPS.
                            </p>
                        </div>

                        {/* Results Table */}
                        {showResults && (
                            <div>
                                <div className="bg-[#e9ecef] px-4 py-2 mb-2">
                                    <h3 className="text-gray-600 font-bold text-xs uppercase">RESULTADO LISTA DE CITAS</h3>
                                </div>

                                <div className="border border-gray-200 rounded overflow-hidden">
                                    <div className="bg-[#0033a0] text-white text-[10px] font-bold grid grid-cols-7 text-center p-2">
                                        <div className="col-span-1">FECHA - HORA</div>
                                        <div className="col-span-1">IPS</div>
                                        <div className="col-span-1">SERVICIO</div>
                                        <div className="col-span-1">PROFESIONAL</div>
                                        <div className="col-span-1">ORDEN - VALOR</div>
                                        <div className="col-span-1">PAGAR</div>
                                        <div className="col-span-1">REPROGRAMAR</div>
                                        <div className="col-span-1">CANCELAR</div>
                                    </div>

                                    <div className="grid grid-cols-7 text-center text-[10px] border-t border-gray-200 items-center p-2">
                                        <div className="col-span-1 text-gray-600">2025/12/27 11:00</div>
                                        <div className="col-span-1 text-gray-600">IPS VIVA 1A PORTAL DEL PRADO</div>
                                        <div className="col-span-1 text-gray-600">CONSULTA MEDICINA GENERAL SALUD CITA PRESENCIAL</div>
                                        <div className="col-span-1 text-gray-600">MOZO MUÑOZ SERGIO ENRIQUE</div>
                                        <div className="col-span-1 text-gray-600">
                                            <div>ORDEN: 2808-115558702</div>
                                            <div>VALOR: 19200.0</div>
                                        </div>
                                        <div className="col-span-1 flex justify-center">
                                            <button className="bg-[#007bff] text-white px-3 py-1 rounded text-[10px] font-bold">
                                                PAGAR
                                            </button>
                                        </div>
                                        <div className="col-span-1 flex justify-center">
                                            <button className="bg-[#ffc107] text-white p-1.5 rounded">
                                                <Calendar className="w-4 h-4 text-black" />
                                            </button>
                                        </div>
                                        <div className="col-span-1 flex justify-center">
                                            <button
                                                onClick={onCancel}
                                                className="bg-[#007bff] text-white px-3 py-1 rounded text-[10px] font-bold"
                                            >
                                                CANCELAR
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
