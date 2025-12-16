"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { loginSchema } from "@/lib/zod"
import { AuthLayout } from "@/components/auth/AuthLayout"
import { loginAction } from "@/action/auth-action"
import type { z } from "zod"

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isSlowConnection, setIsSlowConnection] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormValues) => {
    setError("")
    setIsLoading(true)
    setIsSlowConnection(false)

    // Show "Connecting..." message if request takes > 3s
    const slowTimer = setTimeout(() => {
      setIsSlowConnection(true)
    }, 3000)

    try {
      // Race between server action and a 25s client-side timeout
      const timeoutPromise = new Promise<{ error: string }>((_, reject) => {
        setTimeout(() => reject(new Error("REQUEST_TIMEOUT")), 25000)
      })

      const result = await Promise.race([
        loginAction(data),
        timeoutPromise
      ]) as Awaited<ReturnType<typeof loginAction>>

      clearTimeout(slowTimer)

      if (result?.error) {
        setError(result.error)
        setIsLoading(false)
      } else {
        router.push("/dashboard")
      }
    } catch (err: any) {
      clearTimeout(slowTimer)
      setIsLoading(false)

      if (err.message === "REQUEST_TIMEOUT") {
        setError("El servidor está tardando demasiado en responder. Posiblemente se está reiniciando. Por favor intenta de nuevo en 30 segundos.")
      } else {
        setError("Ocurrió un error inesperado al intentar conectar.")
      }
    }
  }

  return (
    <AuthLayout
      title="¡Bienvenido de nuevo!"
      subtitle="Ingresa tus credenciales para continuar tu aprendizaje digital"
      imagePosition="right"
      brandingTitle={
        <>
          Conecta Barranquilla<br />con el <span className="text-[#00b8c4]">Futuro</span>
        </>
      }
      brandingText="Alfabetización Digital Híbrida para adultos y adultos mayores. Fortalece tus habilidades tecnológicas."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[13px] font-medium text-[#0a2540]">
            Correo electrónico
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="correo@ejemplo.com"
            {...register("email")}
            className="h-12 px-4 border-gray-200 focus:border-[#00b8c4] focus:ring-[#00b8c4] rounded-lg"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-[13px] font-medium text-[#0a2540]">
              Contraseña
            </Label>
            <button type="button" className="text-[12px] text-[#00b8c4] hover:underline">
              ¿Olvidaste tu contraseña?
            </button>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              {...register("password")}
              className="h-12 px-4 border-gray-200 focus:border-[#00b8c4] focus:ring-[#00b8c4] rounded-lg pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
        </div>

        {error && (
          <div className="text-sm text-red-600 bg-red-50 p-4 rounded-lg flex flex-col gap-2 border border-red-100 animate-in slide-in-from-top-2 duration-300">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="16" r="1" fill="currentColor" />
              </svg>
              <span className="font-medium">{error}</span>
            </div>
            {/* Debug info for user */}
            <p className="text-xs text-red-400 pl-8">
              Si el problema persiste, por favor recarga la página e intenta de nuevo.
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-[#0a2540] hover:bg-[#132f4c] text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="32"
                  strokeDashoffset="12"
                  className="opacity-25"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="32"
                  strokeDashoffset="12"
                />
              </svg>
              {isSlowConnection ? "Conectando con el servidor..." : "Iniciando sesión..."}
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Iniciar sesión
            </>
          )}
        </button>
      </form>

      {/* Register Link */}
      <div className="mt-8 text-center">
        <span className="text-gray-500 text-[14px]">¿No tienes una cuenta? </span>
        <Link href="/register" className="text-[#00b8c4] font-semibold text-[14px] hover:underline">
          Regístrate aquí
        </Link>
      </div>
    </AuthLayout >
  )
}
