"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { registerSchema } from "@/lib/zod"
import { AuthLayout } from "@/components/auth/AuthLayout"
import { registerAction } from "@/action/auth-action"
import type { z } from "zod"

type RegisterFormValues = z.infer<typeof registerSchema>

export default function RegisterPage() {
  const router = useRouter()
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterFormValues) => {
    setError("")
    setIsLoading(true)

    try {
      const result = await registerAction(data)
      if (result?.error) {
        setError(result.error)
        setIsLoading(false)
      } else {
        router.push("/dashboard")
      }
    } catch (err) {
      setError("Ocurrió un error inesperado")
      setIsLoading(false)
    }
  }

  return (
    <AuthLayout
      title="Crear cuenta"
      subtitle="Regístrate para comenzar tu aprendizaje digital"
      imagePosition="left"
      brandingTitle={
        <>
          Únete a la revolución<br /><span className="text-[#00b8c4]">digital</span>
        </>
      }
      brandingText="Comienza tu camino hacia la alfabetización digital. Aprende a usar la tecnología de forma segura y eficiente."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[13px] font-medium text-[#0a2540]">
            Nombre completo
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Juan Pérez"
            {...register("name")}
            className="h-12 px-4 border-gray-200 focus:border-[#00b8c4] focus:ring-[#00b8c4] rounded-lg"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>
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
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="password" className="text-[13px] font-medium text-[#0a2540]">
              Contraseña
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password")}
              className="h-12 px-4 border-gray-200 focus:border-[#00b8c4] focus:ring-[#00b8c4] rounded-lg"
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-[13px] font-medium text-[#0a2540]">
              Confirmar
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              {...register("confirmPassword")}
              className="h-12 px-4 border-gray-200 focus:border-[#00b8c4] focus:ring-[#00b8c4] rounded-lg"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
          </div>
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
              Creando cuenta...
            </>
          ) : (
            "Registrarse"
          )}
        </button>

        {/* Terms */}
        <p className="text-[11px] text-gray-400 text-center leading-relaxed">
          Al registrarte, aceptas nuestros{" "}
          <button type="button" className="text-[#00b8c4] hover:underline">Términos de Servicio</button>
          {" "}y{" "}
          <button type="button" className="text-[#00b8c4] hover:underline">Política de Privacidad</button>
        </p>
      </form>

      {/* Login Link */}
      <div className="mt-6 text-center">
        <span className="text-gray-500 text-[14px]">¿Ya tienes una cuenta? </span>
        <Link href="/login" className="text-[#00b8c4] font-semibold text-[14px] hover:underline">
          Inicia sesión
        </Link>
      </div>
    </AuthLayout>
  )
}
