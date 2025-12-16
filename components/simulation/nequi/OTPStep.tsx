import React from 'react'
import { ArrowLeft, Delete } from "lucide-react"

interface OTPStepProps {
    otp: string[]
    setOtp: (value: string[]) => void
    phoneNumber: string
    onNext: () => void
    onBack: () => void
}

export function OTPStep({ otp, setOtp, phoneNumber, onNext, onBack }: OTPStepProps) {
    return (
        <div className="flex flex-col h-full bg-white p-6">
            <div className="mb-6">
                <ArrowLeft className="w-6 h-6 text-gray-800 cursor-pointer" onClick={onBack} />
            </div>

            <h1 className="text-2xl font-bold text-[#130016] mb-2">Escribe el código</h1>
            <p className="text-gray-500 mb-8">
                Te lo enviamos en un mensaje de texto al <span className="text-[#da0081] font-bold">{phoneNumber || "300..."}</span>
            </p>

            <div className="flex justify-between gap-4 mb-8">
                {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="h-16 w-14 bg-gray-100 rounded-lg flex items-center justify-center text-2xl font-bold text-[#130016]">
                        {otp[i]}
                    </div>
                ))}
                <div className="h-16 w-14 flex items-center justify-center">
                    <div className="p-2 border border-[#da0081] rounded-lg">
                        <div className="w-4 h-4 bg-emerald-600 rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 text-[#da0081] font-medium mb-auto">
                <div className="w-5 h-5 rounded-full border-2 border-[#da0081] flex items-center justify-center">
                    <span className="text-xs">↻</span>
                </div>
                <span>¿No te llegó? ¡Podemos llamarte!</span>
            </div>

            <button className="w-full border border-pink-200 text-pink-300 py-3 rounded-lg mb-8">
                Pídelo aquí
            </button>

            {/* Numeric Keypad Simulation */}
            <div className="grid grid-cols-3 gap-y-6 text-3xl font-medium text-[#130016] text-center">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <div
                        key={num}
                        className="cursor-pointer active:text-[#da0081]"
                        onClick={() => {
                            const index = otp.findIndex(d => d === "")
                            if (index !== -1) {
                                const newOtp = [...otp]
                                newOtp[index] = num.toString()
                                setOtp(newOtp)
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
                    const index = otp.findIndex(d => d === "")
                    if (index !== -1) {
                        const newOtp = [...otp]
                        newOtp[index] = "0"
                        setOtp(newOtp)
                        if (index === 3) {
                            setTimeout(onNext, 500)
                        }
                    }
                }}>0</div>
                <div
                    className="cursor-pointer flex items-center justify-center"
                    onClick={() => {
                        const index = [...otp].reverse().findIndex(d => d !== "")
                        if (index !== -1) {
                            const realIndex = 3 - index
                            const newOtp = [...otp]
                            newOtp[realIndex] = ""
                            setOtp(newOtp)
                        }
                    }}
                >
                    <Delete className="w-8 h-8 text-[#130016]" />
                </div>
            </div>
        </div>
    )
}
