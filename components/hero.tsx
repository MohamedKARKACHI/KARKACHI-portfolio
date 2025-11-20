"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-start justify-center py-20 md:py-32">
      <div className="space-y-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <p className="text-highlight text-base md:text-lg font-mono mb-4">Hi, my name is</p>
        </div>

        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Mohamed Karkachi
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground leading-tight">
            Full Stack Developer
          </h2>
        </div>

        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-lg md:text-xl text-foreground max-w-2xl leading-relaxed mt-6">
            I'm a engineer specializing in{" "}
            <span className="text-accent font-semibold">Spring Boot</span> and{" "}
            <span className="text-accent font-semibold">React</span>. I build accessible, pixel-perfect digital
            experiences for the web.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <button
            onClick={scrollToAbout}
            className="mt-8 px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-highlight hover:text-highlight-foreground transition-all duration-300 font-medium flex items-center gap-2 group shadow-lg hover:shadow-xl hover:scale-105"
          >
            Learn More
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
