"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { TuraLoginStep } from "@/components/simulation/sura/TuraLoginStep"
import { TuraDashboardStep } from "@/components/simulation/sura/TuraDashboardStep"
import { TuraPatientDataStep } from "@/components/simulation/sura/TuraPatientDataStep"
import { TuraRedirectModal } from "@/components/simulation/sura/TuraRedirectModal"
import { TuraAppointmentStep } from "@/components/simulation/sura/TuraAppointmentStep"
import { TuraAppointmentConfirmationModal } from "@/components/simulation/sura/TuraAppointmentConfirmationModal"
import { TuraAppointmentsListStep } from "@/components/simulation/sura/TuraAppointmentsListStep"
import { TuraMessageModal } from "@/components/simulation/sura/TuraMessageModal"

export default function TuraSimulationPage() {
    const router = useRouter()
    const [step, setStep] = useState(1)
    const [activeTab, setActiveTab] = useState<'assign' | 'list'>('assign')
    const [showConfirmationModal, setShowConfirmationModal] = useState(false)
    const [showMessageModal, setShowMessageModal] = useState(false)

    const handleLogin = () => {
        setStep(2)
    }

    const handleNavigate = (path: string) => {
        if (path === 'general') {
            setStep(3)
        }
    }

    const handlePatientDataSubmit = () => {
        setStep(4)
    }

    const handleRedirectClose = () => {
        setStep(5)
    }

    const handleAssignAppointment = () => {
        setShowConfirmationModal(true)
    }

    const handleCancelAppointment = () => {
        setShowMessageModal(true)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {step === 1 && (
                <TuraLoginStep onLogin={handleLogin} />
            )}
            {step === 2 && (
                <TuraDashboardStep onNavigate={handleNavigate} />
            )}
            {step === 3 && (
                <TuraPatientDataStep onNext={handlePatientDataSubmit} />
            )}
            {step === 4 && (
                <TuraRedirectModal onClose={handleRedirectClose} />
            )}
            {step === 5 && (
                <>
                    {activeTab === 'assign' ? (
                        <TuraAppointmentStep
                            onAssignAppointment={handleAssignAppointment}
                            onTabChange={setActiveTab}
                        />
                    ) : (
                        <TuraAppointmentsListStep
                            onTabChange={setActiveTab}
                            onCancel={handleCancelAppointment}
                        />
                    )}

                    {showConfirmationModal && (
                        <TuraAppointmentConfirmationModal onClose={() => setShowConfirmationModal(false)} />
                    )}

                    {showMessageModal && (
                        <TuraMessageModal onClose={() => setShowMessageModal(false)} />
                    )}
                </>
            )}
        </div>
    )
}
