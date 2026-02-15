import type React from "react"
import type { Metadata } from "next"
import { Libre_Baskerville } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Le Billig | Crêperie Bretonne à Québec",
  description:
    "Crêpes et galettes bretonnes authentiques au cœur du Vieux-Québec. Cidre, convivialité et saveurs de Bretagne au 481 rue Saint-Jean.",
  keywords: ["crêperie", "bretonne", "québec", "galettes", "cidre", "restaurant"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
