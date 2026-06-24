import type { Metadata } from "next"
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
})

const jetbrainsMono = JetBrains_Mono({
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
      className={`theme-guide ${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans`}
    >
      {children}
    </div>
  )
}
