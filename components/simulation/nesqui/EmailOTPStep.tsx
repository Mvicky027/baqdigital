import React from 'react'
import { ArrowLeft, Pencil, Delete } from "lucide-react"

interface EmailOTPStepProps {
    emailOtp: string[]
    setEmailOtp: (value: string[]) => void
    email: string
    onNext: () => void
    onBack: () => void
}

export function EmailOTPStep({ emailOtp, setEmailOtp, email, onNext, onBack }: EmailOTPStepProps) {
    return (
        <div className="flex flex-col h-full bg-white p-6">
            <div className="mb-6">
                <ArrowLeft className="w-6 h-6 text-gray-800 cursor-pointer" onClick={onBack} />
            </div>

            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-[#130016]">Ingresa el código</h1>
                <Pencil className="w-6 h-6 text-[#da0081]" />
            </div>

            <div className="flex justify-between gap-2 mb-4">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-14 w-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl font-bold text-[#130016]">
                        {emailOtp[i]}
                    </div>
                ))}
            </div>

            <p className="text-gray-500 text-center text-sm mb-2">
                Escribe los 6 números del código de confirmación que enviamos a tu correo:
            </p>
            <p className="text-[#da0081] text-center font-medium mb-8">{email}</p>

            <div className="flex items-center justify-center gap-2 text-[#da0081] font-medium mb-auto">
                <div className="w-5 h-5 rounded-full border-2 border-[#da0081] flex items-center justify-center">
                    <span className="text-xs">↻</span>
                </div>
                <span>¿No te llegó? ¡Pídelo otra vez!</span>
            </div>

            <button className="w-full border border-pink-200 text-pink-300 py-3 rounded-lg mb-8">
                Pídelo aquí
            </button>

            {/* Numeric Keypad for Email OTP */}
            <div className="grid grid-cols-3 gap-y-6 text-3xl font-medium text-[#130016] text-center">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <div
                        key={num}
                        className="cursor-pointer active:text-[#da0081]"
                        onClick={() => {
                            const index = emailOtp.findIndex(d => d === "")
                            if (index !== -1) {
                                const newOtp = [...emailOtp]
                                newOtp[index] = num.toString()
                                setEmailOtp(newOtp)
                                if (index === 5) {
                                    setTimeout(onNext, 500)
                                }
                            }
                        }}
                    >
                        {num}
                    </div>
                ))}
                <div className="col-start-2 cursor-pointer" onClick={() => {
                    const index = emailOtp.findIndex(d => d === "")
                    if (index !== -1) {
                        const newOtp = [...emailOtp]
                        newOtp[index] = "0"
                        setEmailOtp(newOtp)
                        if (index === 5) {
                            setTimeout(onNext, 500)
                        }
                    }
                }}>0</div>
                <div
                    className="cursor-pointer flex items-center justify-center"
                    onClick={() => {
                        const index = [...emailOtp].reverse().findIndex(d => d !== "")
                        if (index !== -1) {
                            const realIndex = 5 - index
                            const newOtp = [...emailOtp]
                            newOtp[realIndex] = ""
                            setEmailOtp(newOtp)
                        }
                    }}
                >
                    <Delete className="w-8 h-8 text-[#130016]" />
                </div>
            </div>
        </div>
    )
}
