import React from 'react'
import { ArrowLeft, Users, Send, Key, Wallet, Smartphone, ChevronRight } from "lucide-react"

interface SendOptionsStepProps {
    onSelectOption: (option: string) => void
    onBack: () => void
}

export function SendOptionsStep({ onSelectOption, onBack }: SendOptionsStepProps) {
    return (
        <div className="flex flex-col h-full bg-gray-50 p-6">
            <div className="mb-6 flex items-center gap-4">
                <ArrowLeft className="w-6 h-6 text-gray-800 cursor-pointer" onClick={onBack} />
            </div>

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-[#130016]">Opciones para enviar</h1>
                <div className="w-8 h-8 bg-[#da0081] rounded-full flex items-center justify-center text-white font-bold">3</div>
            </div>

            <div className="space-y-4">
                <div
                    onClick={() => onSelectOption('nequi')}
                    className="bg-white p-4 rounded-xl flex items-center justify-between shadow-sm cursor-pointer border border-transparent hover:border-[#da0081] relative overflow-hidden"
                >
                    <div className="flex items-center gap-4">
                        <Users className="w-6 h-6 text-gray-700" />
                        <div>
                            <h3 className="font-bold text-[#130016]">Nequi</h3>
                            <p className="text-gray-500 text-sm">A otro número de Nequi</p>
                        </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />

                    {/* Finger tap simulation */}
                    <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
                        <div className="text-[#da0081] text-2xl animate-pulse">👆</div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-xl flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-4">
                        <Send className="w-6 h-6 text-gray-700" />
                        <div>
                            <h3 className="font-bold text-[#130016]">Bancolombia</h3>
                            <p className="text-gray-500 text-sm">Cuenta ahorro o corriente</p>
                        </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                <div className="bg-white p-4 rounded-xl flex items-center justify-between shadow-sm relative">
                    <div className="flex items-center gap-4">
                        <Key className="w-6 h-6 text-gray-700" />
                        <div>
                            <h3 className="font-bold text-[#130016]">Bre-B</h3>
                            <p className="text-gray-500 text-sm">Envía a llaves de otros bancos</p>
                        </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                    <div className="absolute top-2 right-2 bg-[#130016] text-white text-[10px] px-2 py-0.5 rounded-full">
                        Nuevo
                    </div>
                </div>

                <div className="bg-white p-4 rounded-xl flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-4">
                        <Wallet className="w-6 h-6 text-gray-700" />
                        <div>
                            <h3 className="font-bold text-[#130016]">Otros bancos</h3>
                            <p className="text-gray-500 text-sm">Envía más de tres millones</p>
                        </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                <div className="bg-white p-4 rounded-xl flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-4">
                        <Smartphone className="w-6 h-6 text-gray-700" />
                        <div>
                            <h3 className="font-bold text-[#130016]">Transfiya</h3>
                            <p className="text-gray-500 text-sm">Evoluciona a Bre-B</p>
                        </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
            </div>
        </div>
    )
}
