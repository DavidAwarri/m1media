import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "M1 Media - Trusted Technology Solutions",
  description: "Digital systems, software development, and technology consulting for modern organizations.",
  icons: {
    icon: "/fav.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-white text-black`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
