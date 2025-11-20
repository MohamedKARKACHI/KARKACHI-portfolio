"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const githubUrl = "https://github.com/mohammedkarkachi"
  const linkedinUrl = "https://linkedin.com/in/mohamed-karkachi"

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-6xl font-bold text-foreground mb-8 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          Get In Touch
        </h2>
        <p
          className={`text-muted-foreground text-lg mb-12 leading-relaxed text-center max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          I'm currently seeking a 4-month PFE internship. Let's discuss how I can contribute to your innovative
          projects.
        </p>

        <div
          className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="p-6 bg-card rounded-xl border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105">
            <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-muted-foreground text-sm mb-2">Email</p>
            <a
              href="mailto:karkachimohamed045@gmail.com"
              className="text-foreground text-sm hover:text-accent transition-colors break-all"
            >
              karkachimohamed045@gmail.com
            </a>
          </div>
          <div className="p-6 bg-card rounded-xl border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105">
            <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-muted-foreground text-sm mb-2">Phone</p>
            <a href="tel:+212619176173" className="text-foreground text-sm hover:text-accent transition-colors">
              +212 619-176173
            </a>
          </div>
          <div className="p-6 bg-card rounded-xl border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105">
            <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-muted-foreground text-sm mb-2">Location</p>
            <p className="text-foreground text-sm"> Marrakech</p>
          </div>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex flex-col items-center p-8 bg-card rounded-2xl border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105">
            <div className="p-4 bg-white dark:bg-gray-100 rounded-xl mb-4">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(linkedinUrl)}`}
                alt="LinkedIn QR Code"
                className="w-32 h-32"
              />
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Linkedin className="w-5 h-5 text-accent" />
              <span className="font-medium">LinkedIn Profile</span>
            </div>
            <p className="text-muted-foreground text-sm mt-2">Scan to connect</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-card rounded-2xl border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105">
            <div className="p-4 bg-white dark:bg-gray-100 rounded-xl mb-4">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(githubUrl)}`}
                alt="GitHub QR Code"
                className="w-32 h-32"
              />
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Github className="w-5 h-5 text-accent" />
              <span className="font-medium">GitHub Profile</span>
            </div>
            <p className="text-muted-foreground text-sm mt-2">Scan to view code</p>
          </div>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <a
            href="mailto:karkachimohamed045@gmail.com"
            className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium hover:scale-110 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Send Email</span>
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-border text-foreground rounded-full font-medium hover:bg-muted hover:border-accent hover:scale-110 transition-all duration-300"
          >
            View LinkedIn
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-border text-foreground rounded-full font-medium hover:bg-muted hover:border-accent hover:scale-110 transition-all duration-300"
          >
            View GitHub
          </a>
        </div>

        <div
          className={`mt-16 flex justify-center gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent hover:scale-125 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent hover:scale-125 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
