import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, DM_Serif_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { TranslationProvider } from "@/contexts/translation-context"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "Palma & Marroquín",
  description:
    "Especialistas en venta de propiedades, campos y tasaciones profesionales. Experiencia, confianza y transparencia en cada operación.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${dmSans.variable} ${dmSerifDisplay.variable}`}>
        <TranslationProvider>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </TranslationProvider>
      </body>
    </html>
  )
}
