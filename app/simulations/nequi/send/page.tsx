"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { saveProgress } from "@/action/simulation-actions"
import { LoginStep } from "@/components/simulation/nequi/send/LoginStep"
import { DashboardStep } from "@/components/simulation/nequi/send/DashboardStep"
import { SendOptionsStep } from "@/components/simulation/nequi/send/SendOptionsStep"
import { SendFormStep } from "@/components/simulation/nequi/send/SendFormStep"
import { ConfirmStep } from "@/components/simulation/nequi/send/ConfirmStep"

import { ProgressBar } from "@/components/simulation/ProgressBar"
import { SendSuccessStep } from "@/components/simulation/nequi/send/SendSuccessStep"

export default function NesquiSendMoneyPage() {
    const router = useRouter()
    const [step, setStep] = useState(1)
    const [loading, setLoading] = useState(false)

    // State for data
    const [phoneNumber, setPhoneNumber] = useState("")
    const [recipient, setRecipient] = useState("")
    const [amount, setAmount] = useState("")

    // Total steps for progress bar (Login and Dashboard don't count for the bar usually, but let's count the flow steps)
    // Flow: Options -> Form -> Confirm -> Success
    const totalSteps = 4
    // We'll map internal step 3 (Options) to progress step 1, etc.

    const handleNext = async (nextStep: number, data: any = {}) => {
        setLoading(true)
        try {
            await saveProgress("nequi-send", step, data)
            setStep(nextStep)
        } catch (error) {
            console.error("Error saving progress:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1)
        } else {
            router.push("/dashboard")
        }
    }

    const handleConfirm = async () => {
        await saveProgress("nequi-send", step, { status: "completed", recipient, amount })
        setStep(6) // Move to Success Step
    }

    const handleFinish = () => {
        router.push("/dashboard")
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white h-[800px] rounded-3xl overflow-hidden shadow-2xl relative flex flex-col">
                {/* Progress Bar for steps 3, 4, 5 */}
                {step >= 3 && step < 6 && (
                    <div className="pt-6 px-6 bg-white">
                        <ProgressBar currentStep={step - 2} totalSteps={totalSteps} />
                    </div>
                )}

                <div className="flex-1 overflow-y-auto h-full">
                    {step === 1 && (
                        <LoginStep
                            phoneNumber={phoneNumber}
                            setPhoneNumber={setPhoneNumber}
                            onNext={() => handleNext(2, { phoneNumber })}
                            onBack={handleBack}
                        />
                    )}
                    {step === 2 && (
                        <DashboardStep
                            onSend={() => handleNext(3)}
                        />
                    )}
                    {step === 3 && (
                        <SendOptionsStep
                            onSelectOption={(option) => handleNext(4, { option })}
                            onBack={handleBack}
                        />
                    )}
                    {step === 4 && (
                        <SendFormStep
                            recipient={recipient}
                            setRecipient={setRecipient}
                            amount={amount}
                            setAmount={setAmount}
                            onNext={() => handleNext(5, { recipient, amount })}
                            onBack={handleBack}
                        />
                    )}
                    {step === 5 && (
                        <ConfirmStep
                            recipient={recipient}
                            amount={amount}
                            onConfirm={handleConfirm}
                            onBack={handleBack}
                        />
                    )}
                    {step === 6 && (
                        <SendSuccessStep
                            recipient={recipient}
                            amount={amount}
                            onFinish={handleFinish}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

