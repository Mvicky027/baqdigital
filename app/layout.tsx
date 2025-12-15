import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BAQ+DIGITAL - Alfabetización Digital para Barranquilla",
  description: "Plataforma de simulación para aprender a usar servicios digitales de forma segura",
  generator: "v0.app",

}

import { Providers } from "@/components/providers"
import { auth } from "@/auth"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <Providers session={session}>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
