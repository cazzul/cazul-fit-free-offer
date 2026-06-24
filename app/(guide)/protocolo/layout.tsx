import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Protocolo de 90 Días · @cazul.fit",
  description:
    "El protocolo de 90 días de Yadiel Casul (@cazul.fit) para llegar a tu mejor versión.",
}

export default function ProtocoloLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
