import NextAuth from "next-auth"
import { authConfig } from "./auth.config"
import Credentials from "next-auth/providers/credentials"
import { z } from "zod"
import { loginSchema } from "@/lib/zod"
import { authService } from "@/lib/auth-service"

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = loginSchema.safeParse(credentials)

                if (parsedCredentials.success) {
                    try {
                        const user = await authService.login(parsedCredentials.data)
                        console.log("User response from service:", user);

                        if (user) {
                            if (!user.id) {
                                console.error("User ID is missing in response:", user);
                                return null;
                            }
                            return {
                                ...user,
                                id: user.id.toString(), // Ensure ID is a string for NextAuth
                            }
                        }
                    } catch (error) {
                        console.error("Login error:", error)
                        return null
                    }
                }

                console.log("Invalid credentials")
                return null
            },
        }),
    ],
})
