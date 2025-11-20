"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface ImagePreviewProps {
  imageUrl?: string
  onRemove?: () => void
  alt?: string
}

export function ImagePreview({ imageUrl, onRemove, alt = "Preview" }: ImagePreviewProps) {
  const [isHovering, setIsHovering] = useState(false)

  if (!imageUrl) {
    return null
  }

  return (
    <div className="relative inline-block">
      {/* Thumbnail */}
      <div
        className="relative w-24 h-24 rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 cursor-pointer"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Image src={imageUrl || "/placeholder.svg"} alt={alt} fill className="object-cover" sizes="96px" />
      </div>

      {/* Hover Preview */}
      {isHovering && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 pointer-events-none">
          <div className="relative w-80 h-80 rounded-lg overflow-hidden shadow-2xl">
            <Image src={imageUrl || "/placeholder.svg"} alt={alt} fill className="object-cover" sizes="320px" />
          </div>
        </div>
      )}

      {/* Remove Button */}
      {onRemove && (
        <button
          onClick={onRemove}
          className="absolute -top-2 -right-2 bg-destructive text-white rounded-full p-1 hover:bg-destructive/90 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
