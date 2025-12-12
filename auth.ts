import NextAuth from "next-auth"
import { authConfig } from "./auth.config"
import Credentials from "next-auth/providers/credentials"
import { z } from "zod"
import { loginSchema } from "@/lib/zod"

// Placeholder for external backend validation
async function validateWithBackend(credentials: z.infer<typeof loginSchema>) {
    // TODO: Implement actual API call to external backend here
    // Example:
    // const res = await fetch("https://api.external.com/auth/login", {
    //   method: "POST",
    //   body: JSON.stringify(credentials),
    //   headers: { "Content-Type": "application/json" }
    // })
    // const user = await res.json()
    // if (res.ok && user) return user

    console.log("Validating with backend:", credentials)

    // Mock success for now
    if (credentials.password === "password" || credentials.password.length >= 6) {
        return {
            id: "1",
            name: "Test User",
            email: credentials.email,
        }
    }

    return null
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = loginSchema.safeParse(credentials)

                if (parsedCredentials.success) {
                    const user = await validateWithBackend(parsedCredentials.data)
                    if (user) return user
                }

                console.log("Invalid credentials")
                return null
            },
        }),
    ],
})
