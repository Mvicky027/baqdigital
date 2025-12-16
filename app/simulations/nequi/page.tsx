"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ProgressBar } from "@/components/simulation/ProgressBar"
import { saveProgress } from "@/action/simulation-actions"
import { WelcomeStep } from "@/components/simulation/nequi/WelcomeStep"
import { PhoneStep } from "@/components/simulation/nequi/PhoneStep"
import { OTPStep } from "@/components/simulation/nequi/OTPStep"
import { DocumentStep } from "@/components/simulation/nequi/DocumentStep"
import { InfoStep } from "@/components/simulation/nequi/InfoStep"
import { EmailEntryStep } from "@/components/simulation/nequi/EmailEntryStep"
import { EmailOTPStep } from "@/components/simulation/nequi/EmailOTPStep"
import { IDDetailsStep } from "@/components/simulation/nequi/IDDetailsStep"
import { IDValidationStep } from "@/components/simulation/nequi/IDValidationStep"
import { FaceValidationStep } from "@/components/simulation/nequi/FaceValidationStep"
import { TermsStep } from "@/components/simulation/nequi/TermsStep"
import { CreatePINStep } from "@/components/simulation/nequi/CreatePINStep"
import { SuccessStep } from "@/components/simulation/nequi/SuccessStep"

export default function NesquiSimulationPage() {
    const router = useRouter()
    const [step, setStep] = useState(1)
    const [loading, setLoading] = useState(false)

    // State for data collection
    const [phoneNumber, setPhoneNumber] = useState("")
    const [otp, setOtp] = useState(["", "", "", ""])
    const [selectedDocument, setSelectedDocument] = useState("")
    const [email, setEmail] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")
    const [emailOtp, setEmailOtp] = useState(["", "", "", "", "", ""])
    const [idNumber, setIdNumber] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [expDate, setExpDate] = useState("")

    // Total steps including new ones
    const totalSteps = 13

    const handleNext = async (data: any = {}) => {
        setLoading(true)
        try {
            await saveProgress("nequi", step, data)
            if (step < totalSteps) {
                setStep(step + 1)
            } else {
                // Final step finished
                router.push("/dashboard")
            }
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

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white h-[800px] rounded-3xl overflow-hidden shadow-2xl relative flex flex-col">
                {step > 1 && step < 13 && (
                    <div className="pt-6 px-6 bg-white">
                        <ProgressBar currentStep={step} totalSteps={totalSteps} />
                    </div>
                )}

                <div className="flex-1 overflow-y-auto">
                    {step === 1 && <WelcomeStep onNext={() => handleNext()} />}
                    {step === 2 && (
                        <PhoneStep
                            phoneNumber={phoneNumber}
                            setPhoneNumber={setPhoneNumber}
                            onNext={() => handleNext({ phoneNumber })}
                            onBack={handleBack}
                        />
                    )}
                    {step === 3 && (
                        <OTPStep
                            otp={otp}
                            setOtp={setOtp}
                            phoneNumber={phoneNumber}
                            onNext={() => handleNext({ otp: otp.join("") })}
                            onBack={handleBack}
                        />
                    )}
                    {step === 4 && (
                        <DocumentStep
                            setSelectedDocument={setSelectedDocument}
                            onNext={() => handleNext({ selectedDocument })}
                            onBack={handleBack}
                        />
                    )}
                    {step === 5 && (
                        <InfoStep
                            onNext={() => handleNext()}
                            onBack={handleBack}
                        />
                    )}
                    {step === 6 && (
                        <EmailEntryStep
                            email={email}
                            setEmail={setEmail}
                            confirmEmail={confirmEmail}
                            setConfirmEmail={setConfirmEmail}
                            onNext={() => handleNext({ email })}
                            onBack={handleBack}
                        />
                    )}
                    {step === 7 && (
                        <EmailOTPStep
                            emailOtp={emailOtp}
                            setEmailOtp={setEmailOtp}
                            email={email}
                            onNext={() => handleNext({ emailOtp: emailOtp.join("") })}
                            onBack={handleBack}
                        />
                    )}
                    {step === 8 && (
                        <IDDetailsStep
                            idNumber={idNumber}
                            setIdNumber={setIdNumber}
                            birthDate={birthDate}
                            setBirthDate={setBirthDate}
                            expDate={expDate}
                            setExpDate={setExpDate}
                            onNext={() => handleNext({ idNumber, birthDate, expDate })}
                            onBack={handleBack}
                        />
                    )}
                    {step === 9 && (
                        <IDValidationStep
                            onNext={() => handleNext()}
                            onBack={handleBack}
                        />
                    )}
                    {step === 10 && (
                        <FaceValidationStep
                            onNext={() => handleNext()}
                        />
                    )}
                    {step === 11 && (
                        <TermsStep
                            onNext={() => handleNext()}
                            onBack={handleBack}
                        />
                    )}
                    {step === 12 && (
                        <CreatePINStep
                            onNext={() => handleNext()}
                        />
                    )}
                    {step === 13 && (
                        <SuccessStep />
                    )}
                </div>
            </div>
        </div>
    )
}
