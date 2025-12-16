"use server"

import { signIn } from "@/auth"
import { loginSchema, registerSchema } from "@/lib/zod"
import { AuthError } from "next-auth"
import type { z } from "zod"

type LoginInput = z.infer<typeof loginSchema>
type RegisterInput = z.infer<typeof registerSchema>

interface ActionResponse {
    error?: string
    success?: boolean
}

/**
 * Server action for user login
 * Uses NextAuth with credentials provider
 */
export async function loginAction(credentials: LoginInput): Promise<ActionResponse> {
    try {
        // Validate input
        const validatedFields = loginSchema.safeParse(credentials)

        if (!validatedFields.success) {
            return { error: "Datos inválidos. Por favor verifica tu información." }
        }

        // Attempt to sign in with NextAuth
        await signIn("credentials", {
            email: validatedFields.data.email,
            password: validatedFields.data.password,
            redirect: false,
        })

        return { success: true }
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Credenciales inválidas. Verifica tu email y contraseña." }
                default:
                    return { error: "Ocurrió un error al iniciar sesión. Intenta nuevamente." }
            }
        }

        // For any other errors
        console.error("Login error:", error)
        return { error: "Error inesperado. Por favor intenta más tarde." }
    }
}

/**
 * Server action for user registration
 * Integrates with BAQ+DIGITAL backend API
 */
export async function registerAction(data: RegisterInput): Promise<ActionResponse> {
    try {
        // Validate input
        const validatedFields = registerSchema.safeParse(data)

        if (!validatedFields.success) {
            return { error: "Datos inválidos. Por favor verifica tu información." }
        }

        const { name, email, password } = validatedFields.data

        // Call backend API to register user
        const { apiClient } = await import("@/lib/api-client")
        const { data: registerData, error: registerError } = await apiClient.register({
            name,
            email,
            password,
        })

        if (registerError || !registerData) {
            // Handle specific error messages from backend
            if (registerError?.statusCode === 409 || registerError?.message.includes("already exists")) {
                return { error: "Este correo electrónico ya está registrado." }
            }
            return { error: registerError?.message || "Error al crear la cuenta. Por favor intenta más tarde." }
        }

        console.log("User registered successfully:", registerData.email)

        // After successful registration, automatically sign in the user
        try {
            await signIn("credentials", {
                email,
                password,
                redirect: false,
            })

            return { success: true }
        } catch (signInError) {
            // If auto sign-in fails, still consider registration successful
            console.error("Auto sign-in after registration failed:", signInError)
            return {
                success: true,
                error: "Registro exitoso. Por favor inicia sesión manualmente."
            }
        }
    } catch (error) {
        console.error("Registration error:", error)
        return { error: "Error al crear la cuenta. Por favor intenta más tarde." }
    }
}
