"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Education() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
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

  return (
    <section ref={sectionRef} id="education" className="relative py-24 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-3">{t.education.title}</h2>
          <p className="text-lg text-muted-foreground">{t.education.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.education.items.map((edu, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full p-6 bg-card border border-border rounded-xl hover:border-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* Degree and field header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-accent font-medium">{edu.field}</p>
                  </div>
                </div>

                {/* Information section */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <BookOpen className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{edu.school}</span>
                  </div>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-medium">{edu.period}</span>
                  </div>
                </div>

                {/* Hover background effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
