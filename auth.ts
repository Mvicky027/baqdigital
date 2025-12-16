import NextAuth from "next-auth"
import { authConfig } from "./auth.config"
import Credentials from "next-auth/providers/credentials"
import { z } from "zod"
import { loginSchema } from "@/lib/zod"
import { apiClient } from "@/lib/api-client"

// Validate credentials with backend API
async function validateWithBackend(credentials: z.infer<typeof loginSchema>) {
    try {
        const { data, error } = await apiClient.login(credentials)

        if (error || !data) {
            console.error("Backend validation failed:", error)
            return null
        }

        // Return user with tokens for session
        // LoginData includes: accessToken, refreshToken, id, name, email, role, adultMode
        return {
            id: data.id.toString(),
            name: data.name,
            email: data.email,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
        }
    } catch (error) {
        console.error("Error validating with backend:", error)
        return null
    }
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
    callbacks: {
        async jwt({ token, user }) {
            // Initial sign in
            if (user) {
                token.id = user.id
                token.accessToken = user.accessToken || ""
                token.refreshToken = user.refreshToken || ""
            }
            return token
        },
        async session({ session, token }) {
            // Add user info and tokens to session
            if (token) {
                session.user.id = token.id as string
                session.accessToken = token.accessToken as string
                session.refreshToken = token.refreshToken as string
            }
            return session
        },
    },
})
