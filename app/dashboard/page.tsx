"use client"

import { useEffect, useState } from "react"
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
import { BookOpen, Globe, Mail, ShoppingCart, FileText, CreditCard } from "lucide-react"

const courses = [
  {
    id: "email",
    title: "Correo Electrónico",
    description: "Aprende a usar Gmail para enviar y recibir mensajes",
    icon: Mail,
    color: "bg-red-500",
    simulationUrl: "/simulations/email",
  },
  {
    id: "navegacion",
    title: "Navegación Web",
    description: "Descubre cómo usar el navegador y buscar información",
    icon: Globe,
    color: "bg-blue-500",
    simulationUrl: "/simulations/browser",
  },
  {
    id: "compras",
    title: "Compras en Línea",
    description: "Realiza compras seguras por internet",
    icon: ShoppingCart,
    color: "bg-green-500",
    simulationUrl: "/simulations/shopping",
  },
  {
    id: "tramites",
    title: "Trámites en Línea",
    description: "Aprende a realizar trámites gubernamentales",
    icon: FileText,
    color: "bg-purple-500",
    simulationUrl: "/simulations/government",
  },
  {
    id: "banca",
    title: "Banca en Línea",
    description: "Gestiona tus finanzas de forma segura",
    icon: CreditCard,
    color: "bg-orange-500",
    simulationUrl: "/simulations/banking",
  },
]

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [selectedCourse, setSelectedCourse] = useState<(typeof courses)[0] | null>(null)
  const [showDialog, setShowDialog] = useState(false)

  useEffect(() => {
    async function loadUserData() {
      try {
        // Fetch session from NextAuth
        const response = await fetch("/api/auth/session")
        const session = await response.json()

        if (!session || !session.user) {
          router.push("/login")
          return
        }

        setUser(session.user)
      } catch (error) {
        console.error("Error loading user data:", error)
        router.push("/login")
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

  const handleLogout = async () => {
    await fetch("/api/auth/signout", { method: "POST" })
    router.push("/")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
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
            <Button variant="outline" onClick={handleLogout}>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const Icon = course.icon
            return (
              <Card
                key={course.id}
                className="hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => handleCourseClick(course)}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-900 hover:bg-blue-800">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Comenzar práctica
                  </Button>
                </CardContent>
              </Card>
            )
          })}
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
          <DialogFooter className="flex gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setShowDialog(false)}>
              Cancelar
            </Button>
            <Button className="bg-blue-900 hover:bg-blue-800" onClick={handleStartSimulation}>
              Iniciar simulación
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
