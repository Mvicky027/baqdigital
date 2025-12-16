"use client"

import { useEffect } from "react"

interface VideoModalProps {
    isOpen: boolean
    onClose: () => void
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
    // Close modal on ESC key press
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener("keydown", handleEscape)
            // Prevent body scroll when modal is open
            document.body.style.overflow = "hidden"
        }

        return () => {
            document.removeEventListener("keydown", handleEscape)
            document.body.style.overflow = "unset"
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                    aria-label="Cerrar video"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Video Container */}
                <div className="relative aspect-video bg-gray-900">
                    {/* TODO: Replace with actual video URL when available */}
                    {/* For now, showing a placeholder */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                        <div className="w-20 h-20 mb-6 rounded-full bg-[#00b8c4] flex items-center justify-center">
                            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Video de Presentación</h3>
                        <p className="text-gray-300 text-center max-w-md">
                            Próximamente: Conoce más sobre BAQ+DIGITAL y cómo estamos transformando la alfabetización digital en Barranquilla.
                        </p>
                        <div className="mt-8 text-sm text-gray-400">
                            <p>Para agregar tu video, reemplaza este contenido con:</p>
                            <code className="block mt-2 px-4 py-2 bg-black/30 rounded text-[#00b8c4]">
                                &lt;iframe src="URL_DEL_VIDEO" ...&gt;&lt;/iframe&gt;
                            </code>
                        </div>
                    </div>

                    {/* Uncomment and use when you have a video URL (YouTube, Vimeo, etc.) */}
                    {/* 
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                        title="BAQ+DIGITAL Presentación"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    */}
                </div>

                {/* Modal Footer */}
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-bold tracking-tight">
                                <span className="text-[#0a2540]">BAQ</span>
                                <span className="text-[#00b8c4]">+</span>
                                <span className="text-[#0a2540]">DIGITAL</span>
                            </span>
                        </div>
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
