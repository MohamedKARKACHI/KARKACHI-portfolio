"use client"

import { useEffect, useRef, useState } from "react"

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current)
      }
    }
  }, [])

  return (
    <footer ref={footerRef} className="relative py-8 px-6 md:px-12 bg-muted/30 border-t border-border">
      <div
        className={`max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
          © 2025 Mohammed Karkachi. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
