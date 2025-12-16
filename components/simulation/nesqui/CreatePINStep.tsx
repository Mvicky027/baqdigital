import React, { useState } from 'react'
import { Delete, Info } from "lucide-react"

interface CreatePINStepProps {
    onNext: () => void
}

export function CreatePINStep({ onNext }: CreatePINStepProps) {
    const [pin, setPin] = useState(["", "", "", ""])

    return (
        <div className="flex flex-col h-full bg-white p-6">
            <div className="bg-[#4dd0e1] text-[#130016] p-4 rounded-lg mb-8 flex items-start gap-3">
                <Info className="w-6 h-6 shrink-0 mt-1" />
                <p className="text-sm">
                    ¡Recuerda! La clave de tu Nesqui no debe ser la misma para desbloquear tu cel ;)
                </p>
            </div>

            <h1 className="text-2xl font-bold text-[#130016] mb-8">Crea tu clave</h1>

            <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">13</div>
                <div className="flex gap-4 ml-4">
                    {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center text-2xl font-bold">
                            {pin[i] ? '•' : ''}
                        </div>
                    ))}
                </div>
            </div>

            <p className="text-center text-gray-600 mb-auto">
                Fácil de recordar, pero secreta... No se la dices ni al espejo.
            </p>

            {/* Numeric Keypad */}
            <div className="grid grid-cols-3 gap-y-6 text-3xl font-medium text-[#130016] text-center mb-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <div
                        key={num}
                        className="cursor-pointer active:text-[#059669]"
                        onClick={() => {
                            const index = pin.findIndex(d => d === "")
                            if (index !== -1) {
                                const newPin = [...pin]
                                newPin[index] = num.toString()
                                setPin(newPin)
                                if (index === 3) {
                                    setTimeout(onNext, 500)
                                }
                            }
                        }}
                    >
                        {num}
                    </div>
                ))}
                <div className="col-start-2 cursor-pointer" onClick={() => {
                    const index = pin.findIndex(d => d === "")
                    if (index !== -1) {
                        const newPin = [...pin]
                        newPin[index] = "0"
                        setPin(newPin)
                        if (index === 3) {
                            setTimeout(onNext, 500)
                        }
                    }
                }}>0</div>
                <div
                    className="cursor-pointer flex items-center justify-center"
                    onClick={() => {
                        const index = [...pin].reverse().findIndex(d => d !== "")
                        if (index !== -1) {
                            const realIndex = 3 - index
                            const newPin = [...pin]
                            newPin[realIndex] = ""
                            setPin(newPin)
                        }
                    }}
                >
                    <Delete className="w-8 h-8 bg-[#130016] text-white p-1 rounded" />
                </div>
            </div>
        </div>
    )
}
