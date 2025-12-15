import type { NextAuthConfig } from "next-auth"

export const authConfig = {
    pages: {
        signIn: "/login",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const isOnDashboard = nextUrl.pathname.startsWith("/dashboard")
            const isOnNequiSimulation = nextUrl.pathname.startsWith("/simulations/nequi")
            const isOnNequiSend = nextUrl.pathname.startsWith("/simulations/nequi/send")
            const isOnSuraSimulation = nextUrl.pathname.startsWith("/simulations/sura")

            if (isOnDashboard || isOnNequiSimulation || isOnNequiSend || isOnSuraSimulation) {
                if (isLoggedIn) return true
                return false // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                // Redirect authenticated users to dashboard if they try to access login/register
                if (nextUrl.pathname === "/login" || nextUrl.pathname === "/register") {
                    return Response.redirect(new URL("/dashboard", nextUrl))
                }
            }
            return true
        },
        async session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
                session.user.accessToken = token.accessToken;
                session.user.refreshToken = token.refreshToken;
                session.user.role = token.role;
                session.user.adultMode = token.adultMode;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.sub = user.id;
                token.accessToken = user.accessToken;
                token.refreshToken = user.refreshToken;
                token.role = user.role;
                token.adultMode = user.adultMode;
            }
            return token;
        }
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig
