interface ProgressBarProps {
    currentStep: number
    totalSteps: number
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
    const progress = (currentStep / totalSteps) * 100

    return (
        <div className="w-full max-w-md mx-auto mb-6">
            <div className="flex justify-between text-xs font-medium text-gray-500 mb-1">
                <span>Progreso</span>
                <span>Paso {currentStep} de {totalSteps}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                    className="bg-[#da0081] h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    )
}
