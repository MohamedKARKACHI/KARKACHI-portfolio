"use client"

import type React from "react"

import { useRef, useEffect } from "react"

interface CertificationHoverCardProps {
  children: React.ReactNode
  previewUrl: string
  title: string
}

export function CertificationHoverCard({ children, previewUrl, title }: CertificationHoverCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Ensure image is properly set up for global hover handler
    const link = containerRef.current?.querySelector("a.cert-hover") as HTMLElement
    if (link) {
      link.setAttribute("data-cert-src", previewUrl)
      link.setAttribute("data-cert-title", title)
    }
  }, [previewUrl, title])

  return (
    <div ref={containerRef} className="relative h-full">
      {children}
    </div>
  )
}
