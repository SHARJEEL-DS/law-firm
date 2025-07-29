import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wachtell, Lipton, Rosen & Katz",
  description: "Leading law firm specializing in mergers and acquisitions, corporate law, and litigation.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        
        <main>{children}</main>
      
        <Footer />
      </body>
    </html>
  )
}
