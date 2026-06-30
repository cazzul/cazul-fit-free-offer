import type { Metadata } from "next"
import { Cormorant_Garamond, Geist_Mono, IBM_Plex_Serif } from "next/font/google"

// Cuerpo = IBM Plex Serif (serif). Display = Cormorant Garamond. Mono = Geist Mono.
// Se conservan los nombres de variables CSS para no tocar globals.css.
const inter = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument-serif",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Guía de Entrenamiento y Nutrición · @cazul.fit",
  description:
    "Guía de entrenamiento y nutrición de Yadiel Casul (@cazul.fit). Hecha para ayudarte a ti.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function GuideLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div
      className={`theme-guide ${inter.variable} ${cormorant.variable} ${geistMono.variable} font-sans`}
    >
      {children}
    </div>
  )
}
