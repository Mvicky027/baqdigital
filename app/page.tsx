import { Header } from "@/components/landing/Header"
import { HeroSection } from "@/components/landing/HeroSection"
import { InfoBanner } from "@/components/landing/InfoBanner"
import { AllianceSection } from "@/components/landing/AllianceSection"
import { Footer } from "@/components/landing/Footer"

import { useEffect } from "react"
import { apiClient } from "@/lib/api-client"

export default function LandingPage() {
  useEffect(() => {
    // Warm up the backend server (Render free tier)
    apiClient.warmUp()
  }, [])
  return (
    <div className="min-h-screen bg-white">
      {/* 1. HEADER - Logo, navegación y logo RIWI */}
      <Header />

      {/* 2. HERO SECTION - Título, texto, botones, imágenes de ancianos y aliados */}
      <HeroSection />

      {/* 3. INFO BANNER - Banner azul con horarios y WhatsApp */}
      <InfoBanner />

      {/* 4. ALLIANCE SECTION - Sección "Acerca de nosotros" con logos grandes */}
      <AllianceSection />

      {/* 5. FOOTER - Información de contacto y enlaces */}
      <Footer />
    </div>
  )
}
