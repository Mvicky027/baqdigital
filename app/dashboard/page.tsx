"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"
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
import { BookOpen, Globe, Mail, ShoppingCart, FileText, CreditCard, Shield, LogOut } from "lucide-react"

const courses = [
  {
    id: "nequi",
    title: "Nesqui - Billetera",
    description: "Aprende a enviar plata, pedir plata y pagar servicios",
    icon: CreditCard,
    color: "bg-emerald-600",
    simulationUrl: "/simulations/nesqui",
  },
  {
    id: "sura",
    title: "Tura - Citas Médicas",
    description: "Gestiona tus citas médicas, resultados y seguros",
    icon: Shield,
    color: "bg-violet-600",
    simulationUrl: "/simulations/tura",
  },
]

const upcomingCourses = [
  {
    id: "email",
    title: "Correo Electrónico",
    description: "Aprende a usar Gmail para enviar y recibir mensajes",
    icon: Mail,
    color: "bg-gray-400",
  },
  {
    id: "navegacion",
    title: "Navegación Web",
    description: "Descubre cómo usar el navegador y buscar información",
    icon: Globe,
    color: "bg-gray-400",
  },
  {
    id: "compras",
    title: "Compras en Línea",
    description: "Realiza compras seguras por internet",
    icon: ShoppingCart,
    color: "bg-gray-400",
  },
  {
    id: "tramites",
    title: "Trámites en Línea",
    description: "Aprende a realizar trámites gubernamentales",
    icon: FileText,
    color: "bg-gray-400",
  },
  {
    id: "banca",
    title: "Banca en Línea",
    description: "Gestiona tus finanzas de forma segura",
    icon: CreditCard,
    color: "bg-gray-400",
  },
]

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [selectedCourse, setSelectedCourse] = useState<(typeof courses)[0] | null>(null)
  const [showDialog, setShowDialog] = useState(false)
  const [showLogoutDialog, setShowLogoutDialog] = useState(false) // Logout confirmation
  const [debugStatus, setDebugStatus] = useState("Iniciando dashboard...") // Debug state

  useEffect(() => {
    async function loadUserData() {
      try {
        setDebugStatus("Buscando sesión en /api/auth/session...")
        // Fetch session from NextAuth
        const response = await fetch("/api/auth/session")
        setDebugStatus(`Respuesta sesión: ${response.status}`)

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

        const session = await response.json()
        setDebugStatus(session?.user ? "Sesión encontrada" : "Sesión vacía")

        if (!session || !session.user) {
          setDebugStatus("ERROR: No usuario en sesión. Verifica Cookies/AUTH_SECRET.")
          // STOP REDIRECT for debugging
          // setTimeout(() => router.push("/login"), 2000) 
          setLoading(false) // Stop loading spinner so we can see the error
          return
        }

        setUser(session.user)
      } catch (error: any) {
        console.error("Error loading user data:", error)
        setDebugStatus(`Error fatal: ${error.message}`)
        setLoading(false)
        // setTimeout(() => router.push("/login"), 3000)
      } finally {
        setLoading(false)
      }
    }

    loadUserData()
  }, [router])

  const handleCourseClick = (course: (typeof courses)[0]) => {
    setSelectedCourse(course)
    setShowDialog(true)
  }

  const handleStartSimulation = () => {
    if (selectedCourse) {
      router.push(selectedCourse.simulationUrl)
    }
  }

  const handleLogoutClick = () => {
    setShowLogoutDialog(true)
  }

  const confirmLogout = async () => {
    await signOut({ callbackUrl: "/login" })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
          <div className="mt-4 p-2 bg-white/50 rounded text-xs font-mono text-blue-800">
            Debug: {debugStatus}
          </div>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-red-50 flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error de Sesión</h1>
          <p className="text-gray-700 mb-4">No se pudo recuperar la sesión del usuario.</p>
          <div className="bg-white p-4 rounded border border-red-200 text-left font-mono text-xs overflow-auto">
            <strong>Debug Info:</strong>
            <br />
            {debugStatus}
          </div>
          <Button className="mt-6" onClick={() => router.push('/login')}>Volver a Login</Button>
        </div>
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-blue-900">BAQ+DIGITAL</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm">
              <span className="text-gray-600">Bienvenido,</span>{" "}
              <span className="font-semibold text-gray-900">{user.name}</span>
            </div>
            <Button variant="outline" onClick={handleLogoutClick} className="gap-2">
              <LogOut className="w-4 h-4" />
              Cerrar sesión
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mis Cursos de Alfabetización Digital</h1>
          <p className="text-gray-600">Selecciona un curso para comenzar tu práctica en un entorno seguro</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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

        {/* Upcoming Courses */}
        <div className="mb-8 border-t pt-8">
          <h2 className="text-2xl font-bold text-gray-400 mb-6">Muy pronto...</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {upcomingCourses.map((course) => {
              const Icon = course.icon
              return (
                <Card key={course.id} className="border-gray-100 bg-gray-50">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-gray-500" />
                    </div>
                    <CardTitle className="text-lg text-gray-600">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </main>

      {/* Simulation Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Iniciar Simulación</DialogTitle>
            <DialogDescription className="text-base pt-2">
              Estás a punto de comenzar la práctica de{" "}
              <span className="font-semibold text-gray-900">{selectedCourse?.title}</span>. Esta es una simulación
              segura donde puedes practicar sin riesgo.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-blue-50 p-4 rounded-lg my-4">
            <p className="text-sm text-blue-900">
              <span className="font-semibold">Recuerda:</span> Esta es una práctica. Puedes explorar libremente y
              cometer errores sin consecuencias reales.
            </p>
          </div>
          <DialogFooter className="flex gap-4 items-center justify-end flex-wrap">
            <Button variant="outline" onClick={() => setShowDialog(false)} className="w-full sm:w-auto">
              Cancelar
            </Button>

            {selectedCourse?.id === 'nequi' ? (
              <div className="flex gap-4 w-full sm:w-auto mt-2 sm:mt-0">
                <Button
                  className="bg-emerald-600 hover:bg-emerald-700 text-white flex-1"
                  onClick={() => router.push('/simulations/nesqui')}
                >
                  Registrarse
                </Button>
                <Button
                  className="bg-emerald-600 hover:bg-emerald-700 text-white flex-1"
                  onClick={() => router.push('/simulations/nesqui/send')}
                >
                  Enviar Plata
                </Button>
              </div>
            ) : (
              <Button className="bg-violet-600 hover:bg-violet-700 w-full sm:w-auto mt-2 sm:mt-0" onClick={handleStartSimulation}>
                Iniciar simulación
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Logout Confirmation Dialog */}
      <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl text-blue-900">¿Cerrar sesión?</DialogTitle>
            <DialogDescription className="text-gray-600">
              ¿Estás seguro que deseas salir de BAQ+DIGITAL? Tendrás que ingresar tus datos nuevamente para entrar.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex sm:justify-end gap-4">
            <Button className="bg-gray-100 text-gray-700 hover:bg-gray-200" onClick={() => setShowLogoutDialog(false)}>
              Cancelar
            </Button>
            <Button className="bg-[#0a2540] text-white hover:bg-blue-900" onClick={confirmLogout}>
              Sí, cerrar sesión
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
