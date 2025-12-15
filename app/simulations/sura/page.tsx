"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { SuraLoginStep } from "@/components/simulation/sura/SuraLoginStep"
import { SuraDashboardStep } from "@/components/simulation/sura/SuraDashboardStep"
import { SuraPatientDataStep } from "@/components/simulation/sura/SuraPatientDataStep"
import { SuraRedirectModal } from "@/components/simulation/sura/SuraRedirectModal"
import { SuraAppointmentStep } from "@/components/simulation/sura/SuraAppointmentStep"
import { SuraAppointmentConfirmationModal } from "@/components/simulation/sura/SuraAppointmentConfirmationModal"
import { SuraAppointmentsListStep } from "@/components/simulation/sura/SuraAppointmentsListStep"
import { SuraMessageModal } from "@/components/simulation/sura/SuraMessageModal"

export default function SuraSimulationPage() {
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
                <SuraLoginStep onLogin={handleLogin} />
            )}
            {step === 2 && (
                <SuraDashboardStep onNavigate={handleNavigate} />
            )}
            {step === 3 && (
                <SuraPatientDataStep onNext={handlePatientDataSubmit} />
            )}
            {step === 4 && (
                <SuraRedirectModal onClose={handleRedirectClose} />
            )}
            {step === 5 && (
                <>
                    {activeTab === 'assign' ? (
                        <SuraAppointmentStep
                            onAssignAppointment={handleAssignAppointment}
                            onTabChange={setActiveTab}
                        />
                    ) : (
                        <SuraAppointmentsListStep
                            onTabChange={setActiveTab}
                            onCancel={handleCancelAppointment}
                        />
                    )}

                    {showConfirmationModal && (
                        <SuraAppointmentConfirmationModal onClose={() => setShowConfirmationModal(false)} />
                    )}

                    {showMessageModal && (
                        <SuraMessageModal onClose={() => setShowMessageModal(false)} />
                    )}
                </>
            )}
        </div>
    )
}
