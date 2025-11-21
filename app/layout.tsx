import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { CertificateHoverPreview } from "@/components/certificate-hover-preview"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mohammed Karkachi - Full Stack Developer",
  description: "Full Stack Developer specializing in Spring Boot and React",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            <CertificateHoverPreview />
          </ThemeProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
