"use client"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { BookOpen, Globe, Mail, ShoppingCart, FileText, CreditCard, Shield } from "lucide-react"
import { useState } from "react"

const courses = [
  {
    id: "nequi",
    title: "Nequi",
    description: "Aprende a usar Nequi para manejar tu dinero de forma fácil y segura",
    icon: CreditCard,
    color: "bg-purple-600",
    simulationUrl: "/simulations/nequi",
  },
  {
    id: "sura",
    title: "Sura",
    description: "Gestiona tus citas médicas, resultados y seguros con Sura",
    icon: Shield,
    color: "bg-blue-600",
    simulationUrl: "/simulations/sura",
  },
]

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [selectedCourse, setSelectedCourse] = useState<(typeof courses)[0] | null>(null)
  const [showDialog, setShowDialog] = useState(false)

  const handleCourseClick = (course: (typeof courses)[0]) => {
    setSelectedCourse(course)
    setShowDialog(true)
  }

  const handleStartSimulation = () => {
    if (selectedCourse) {
      router.push(selectedCourse.simulationUrl)
    }
  }

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" })
  }

  if (status === "loading") {
    return <div className="min-h-screen flex items-center justify-center">Cargando...</div>
  }

  if (!session?.user) {
    // Middleware should handle this, but as a fallback
    return null
  }

  return (

    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-[#0a2540]">BAQ</span>
              <span className="text-[#00b8c4]">+</span>
              <span className="text-[#0a2540]">DIGITAL</span>
            </span>
            <svg className="w-8 h-8 ml-1" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="11" stroke="#00b8c4" strokeWidth="2.5" />
              <circle cx="14" cy="14" r="4" fill="#00b8c4" />
              <line x1="14" y1="3" x2="14" y2="8" stroke="#00b8c4" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="14" y1="20" x2="14" y2="25" stroke="#00b8c4" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="3" y1="14" x2="8" y2="14" stroke="#00b8c4" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="20" y1="14" x2="25" y2="14" stroke="#00b8c4" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:block text-right">
              <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Bienvenido</p>
              <p className="text-sm font-bold text-[#0a2540]">{session.user.name}</p>
            </div>
            <div className="h-8 w-[1px] bg-gray-200 hidden md:block"></div>
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="text-gray-500 hover:text-[#00b8c4] hover:bg-transparent transition-colors"
            >
              Cerrar sesión
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4">
              Mis Cursos de <span className="text-[#00b8c4]">Alfabetización Digital</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Selecciona un módulo para comenzar tu práctica en un entorno seguro y amigable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => {
              const Icon = course.icon
              return (
                <Card
                  key={course.id}
                  className="group hover:shadow-xl transition-all duration-300 border-gray-100 overflow-hidden cursor-pointer bg-white"
                  onClick={() => handleCourseClick(course)}
                >
                  <div className={`h-2 w-full ${course.color.replace('bg-', 'bg-opacity-80 bg-')}`} />
                  <CardHeader className="pb-4">
                    <div
                      className={`w-14 h-14 ${course.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-[#0a2540] group-hover:text-[#00b8c4] transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-gray-500 leading-relaxed">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm font-medium text-[#00b8c4] group-hover:translate-x-1 transition-transform">
                      Comenzar práctica
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </main>

      {/* Simulation Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md border-0 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl text-[#0a2540]">
              Iniciar Simulación
            </DialogTitle>
            <DialogDescription className="text-base pt-2 text-gray-500">
              Estás a punto de entrar al módulo de <span className="font-bold text-[#00b8c4]">{selectedCourse?.title}</span>.
            </DialogDescription>
          </DialogHeader>

          <div className="bg-blue-50/50 p-6 rounded-xl my-4 border border-blue-100">
            <div className="flex gap-3">
              <div className="mt-1">
                <div className="w-5 h-5 rounded-full bg-[#00b8c4] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">i</span>
                </div>
              </div>
              <p className="text-sm text-[#0a2540] leading-relaxed">
                Esta es una <span className="font-semibold">simulación segura</span>. Puedes practicar libremente, cometer errores y aprender a tu propio ritmo sin ningún riesgo real.
              </p>
            </div>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-3 sm:gap-2 mt-2">
            <Button
              variant="outline"
              onClick={() => setShowDialog(false)}
              className="border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 sm:mr-auto"
            >
              Cancelar
            </Button>

            {selectedCourse?.id === 'nequi' ? (
              <div className="flex gap-2 w-full sm:w-auto">
                <Button
                  className="bg-[#da0081] hover:bg-[#b5006b] text-white flex-1 sm:flex-none"
                  onClick={() => router.push('/simulations/nequi')}
                >
                  Registrarse
                </Button>
                <Button
                  className="bg-[#da0081] hover:bg-[#b5006b] text-white flex-1 sm:flex-none"
                  onClick={() => router.push('/simulations/nequi/send')}
                >
                  Enviar Plata
                </Button>
              </div>
            ) : (
              <Button
                className="bg-[#0a2540] hover:bg-[#132f4c] text-white px-8 w-full sm:w-auto"
                onClick={handleStartSimulation}
              >
                Comenzar ahora
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
