"use client"

import { useEffect } from "react"

export function CertificateHoverPreview() {
  useEffect(() => {
    const hoverContainer = document.getElementById("certificate-hover-container")
    if (!hoverContainer) {
      console.log("[v0] Hover container not found")
      return
    }

    let mouseX = 0
    let mouseY = 0
    let activeCard: HTMLElement | null = null

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Only update position if preview is visible
      if (hoverContainer.style.display === "block" && activeCard) {
        hoverContainer.style.left = mouseX + "px"
        hoverContainer.style.top = mouseY + "px"
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target || !target.classList) return

      // Check if target or any parent has cert-hover class
      const card = target.closest(".cert-hover") as HTMLElement
      if (!card) return

      const certSrc = card.getAttribute("data-cert-src")
      const certTitle = card.getAttribute("data-cert-title")

      if (!certSrc) {
        console.log("[v0] No cert-src found")
        return
      }

      console.log("[v0] Showing preview for", certTitle)

      activeCard = card
      const previewImg = hoverContainer.querySelector("img") as HTMLImageElement
      if (previewImg) {
        previewImg.src = certSrc
        previewImg.alt = certTitle || "Certificate"
      }

      mouseX = e.clientX
      mouseY = e.clientY
      hoverContainer.style.left = mouseX + "px"
      hoverContainer.style.top = mouseY + "px"
      hoverContainer.style.display = "block"
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target || !target.classList) return

      const card = target.closest(".cert-hover") as HTMLElement
      if (card === activeCard) {
        console.log("[v0] Hiding preview")
        hoverContainer.style.display = "none"
        activeCard = null
      }
    }

    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseout", handleMouseOut)

    return () => {
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseout", handleMouseOut)
    }
  }, [])

  return (
    <div
      id="certificate-hover-container"
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
        display: "none",
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Red border frame around certificate */}
      <div
        style={{
          border: "3px solid #ef4444",
          display: "inline-block",
          position: "relative",
          boxShadow: "0 10px 40px rgba(239, 68, 68, 0.3)",
        }}
      >
        <img
          src="/placeholder.svg"
          alt="Certificate Preview"
          style={{
            display: "block",
            width: "105px",
            height: "132.5px",
            objectFit: "contain",
            backgroundColor: "#ffffff",
          }}
        />

        {/* Red dot marking cursor position */}
        <div
          style={{
            position: "absolute",
            width: "10px",
            height: "10px",
            backgroundColor: "#ef4444",
            borderRadius: "50%",
            border: "2px solid white",
            boxShadow: "0 0 6px rgba(239, 68, 68, 0.6)",
            top: "-5px",
            left: "-5px",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  )
}
