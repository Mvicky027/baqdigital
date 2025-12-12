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

    try {
      const result = await loginAction(data)
      if (result?.error) {
        setError(result.error)
        setIsLoading(false)
      } else {
        // Redirect handled by server action or middleware, but we can push here too if needed
        // router.push("/dashboard") 
        // Actually, server action redirect: false means we need to handle it or reload
        // But auth-action uses redirect: false. Let's check auth-action again.
        // Wait, auth-action uses redirect: false. So we need to redirect manually.
        router.push("/dashboard")
      }
    } catch (err) {
      setError("Ocurrió un error inesperado")
      setIsLoading(false)
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
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            {...register("password")}
            className="h-12 px-4 border-gray-200 focus:border-[#00b8c4] focus:ring-[#00b8c4] rounded-lg"
          />
          {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
        </div>

        {error && (
          <div className="text-sm text-red-600 bg-red-50 p-3 rounded-lg flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2" />
              <circle cx="12" cy="16" r="1" fill="currentColor" />
            </svg>
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-[#0a2540] hover:bg-[#132f4c] text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="32" strokeDashoffset="12" />
              </svg>
              Iniciando sesión...
            </>
          ) : (
            "Iniciar sesión"
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
    </AuthLayout>
  )
}
