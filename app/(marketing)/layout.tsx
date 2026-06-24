import { Cormorant_Garamond, Geist_Mono, Inter } from "next/font/google"
import type { Metadata } from "next"
import { Header } from "@/components/landing/header"
import "./landing-globals.css"

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Cazul Fit | Coaching Online con Yadiel Casul",
  description:
    "Coaching personalizado de entrenamiento, nutrición y accountability con Yadiel Casul (@cazul.fit). Construye tu mejor físico y eleva tu vida.",
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

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div
      className={`theme-marketing ${cormorant.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <Header />
      {children}
    </div>
  )
}
