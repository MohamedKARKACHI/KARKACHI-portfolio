"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface ProjectHoverCardProps {
  children: React.ReactNode
  previewUrl: string
  title: string
  imageWidth?: number
  imageHeight?: number
}

export function ProjectHoverCard({ 
  children, 
  previewUrl, 
  title,
  imageWidth = 140,
  imageHeight = 160
}: ProjectHoverCardProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isMobile) return

    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    
    let x = e.clientX + 4
    let y = e.clientY - imageHeight - 6

    // Keep preview card within viewport bounds
    if (x + imageWidth + 20 > viewportWidth) {
      x = e.clientX - imageWidth - 4
    }
    if (y < 10) {
      y = e.clientY + 6
    }

    setPosition({ x, y })
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      className="relative h-full cursor-pointer transition-opacity duration-200"
    >
      {children}

      {isHovering && !isMobile && (
        <div
          className="fixed pointer-events-none z-50 animate-in fade-in duration-200"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          <div className="bg-card border border-border/50 rounded-lg shadow-lg overflow-hidden backdrop-blur-sm hover:shadow-xl transition-shadow">
            <div className="relative bg-muted rounded-t-lg overflow-hidden flex items-center justify-center" style={{ width: imageWidth, height: imageHeight }}>
              <Image
                src={previewUrl || "/placeholder.svg"}
                alt={title}
                width={imageWidth}
                height={imageHeight}
                className="w-full h-full object-cover"
                priority={false}
              />
            </div>
            <div className="p-2 bg-card/50">
              <p className="text-xs text-muted-foreground text-center font-medium line-clamp-2 leading-tight">
                {title}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
