import React from "react"
import { Inter } from "next/font/google"

import Navbar from "@/components/navbar"
import ScrollIndicator from "@/components/scroll-indicator"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LNCT - Lakshmi Narain College of Technology",
  description: "Lakshmi Narain College of Technology - Empowering students through quality education",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="pt-20 min-h-screen">{children}</main>
          <ScrollIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
