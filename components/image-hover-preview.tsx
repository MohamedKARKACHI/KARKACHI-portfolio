"use client"

import { useEffect, useRef, useState } from "react"

interface HoverPosition {
  x: number
  y: number
  visible: boolean
}

interface ImageDimensions {
  width: number
  height: number
  borderRadius: string
  boxShadow: string
}

export function ImageHoverPreview() {
  const [hoverPosition, setHoverPosition] = useState<HoverPosition>({
    x: 0,
    y: 0,
    visible: false,
  })
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions | null>(null)
  const [imageUrl, setImageUrl] = useState<string>("")
  const [previewScale] = useState(2.5)
  const currentImageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!currentImageRef.current) return

      const rect = currentImageRef.current.getBoundingClientRect()
      const style = window.getComputedStyle(currentImageRef.current)

      setImageDimensions({
        width: rect.width,
        height: rect.height,
        borderRadius: style.borderRadius,
        boxShadow: style.boxShadow,
      })
      setImageUrl(currentImageRef.current.src)

      let x = e.clientX
      let y = e.clientY

      const previewWidth = rect.width * previewScale
      if (x + previewWidth > window.innerWidth - 10) {
        x = e.clientX - previewWidth
      }

      const previewHeight = rect.height * previewScale
      if (y + previewHeight > window.innerHeight - 10) {
        y = e.clientY - previewHeight
      }

      setHoverPosition({ x, y, visible: true })
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (target && target.classList && target.classList.contains("hover-preview")) {
        currentImageRef.current = target as HTMLImageElement
      }
    }

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement
      if (target && target.classList && target.classList.contains("hover-preview")) {
        currentImageRef.current = null
        setHoverPosition((prev) => ({ ...prev, visible: false }))
      }
    }

    const delegatedMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (target && target.classList && target.classList.contains("hover-preview")) {
        currentImageRef.current = target as HTMLImageElement
      }
    }

    const delegatedMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement
      if (target && target.classList && target.classList.contains("hover-preview")) {
        currentImageRef.current = null
        setHoverPosition((prev) => ({ ...prev, visible: false }))
      }
    }

    document.addEventListener("mouseenter", delegatedMouseEnter, true)
    document.addEventListener("mouseleave", delegatedMouseLeave, true)
    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mouseenter", delegatedMouseEnter, true)
      document.removeEventListener("mouseleave", delegatedMouseLeave, true)
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [previewScale])

  if (!hoverPosition.visible || !imageDimensions || !imageUrl) {
    return null
  }

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: `${hoverPosition.x}px`,
        top: `${hoverPosition.y}px`,
        opacity: hoverPosition.visible ? 1 : 0,
        transition: "opacity 0.15s ease-out",
      }}
    >
      <div
        className="bg-card border border-border shadow-2xl"
        style={{
          width: `${imageDimensions.width * previewScale}px`,
          height: `${imageDimensions.height * previewScale}px`,
          borderRadius: imageDimensions.borderRadius,
          boxShadow: imageDimensions.boxShadow,
          overflow: "hidden",
        }}
      >
        <img
          src={imageUrl || "/placeholder.svg"}
          alt="Preview"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
    </div>
  )
}
