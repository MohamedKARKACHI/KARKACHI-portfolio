"use client"

import { useState, useEffect } from "react"
import { AlertCircle, CheckCircle, X } from "lucide-react"

interface ToastProps {
  message: string
  type: "success" | "error"
  duration?: number
  onClose?: () => void
}

export function Toast({ message, type, duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose?.()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!isVisible) return null

  return (
    <div
      className={`fixed bottom-6 right-6 flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg border-2 animate-in slide-in-from-bottom-5 ${
        type === "success"
          ? "bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400"
          : "bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-400"
      }`}
    >
      {type === "success" ? (
        <CheckCircle className="w-5 h-5 flex-shrink-0" />
      ) : (
        <AlertCircle className="w-5 h-5 flex-shrink-0" />
      )}
      <p className="text-sm font-medium">{message}</p>
      <button onClick={() => setIsVisible(false)} className="ml-2 text-current hover:opacity-70 transition-opacity">
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
