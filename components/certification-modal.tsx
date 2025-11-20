"use client"
import Image from "next/image"
import { X } from "lucide-react"

interface CertificationModalProps {
  isOpen: boolean
  certification: {
    id: string
    title: string
    issuer: string
    date: string
    image_url?: string
    credential_url?: string
  } | null
  onClose: () => void
}

export function CertificationModal({ isOpen, certification, onClose }: CertificationModalProps) {
  if (!isOpen || !certification) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-card border border-border rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <div className="sticky top-0 flex items-center justify-between p-4 border-b border-border bg-card/95 backdrop-blur">
            <h2 className="text-xl font-bold text-foreground">{certification.title}</h2>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Certificate Image */}
            {certification.image_url ? (
              <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-border bg-muted">
                <Image
                  src={certification.image_url || "/placeholder.svg"}
                  alt={certification.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            ) : (
              <div className="w-full aspect-square rounded-lg bg-muted border border-border flex items-center justify-center">
                <p className="text-muted-foreground">No image available</p>
              </div>
            )}

            {/* Details */}
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Issuer</p>
                <p className="font-medium text-foreground">{certification.issuer}</p>
              </div>

              {certification.date && (
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium text-foreground">{certification.date}</p>
                </div>
              )}

              {certification.credential_url && (
                <div>
                  <a
                    href={certification.credential_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium"
                  >
                    View Credential →
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
