"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Globe, Layers, MessageSquare } from "lucide-react"

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const skillCategories = [
    {
      title: "Programmation",
      icon: Code2,
      skills: ["C", "C++", "JAVA", "Python", "POO", "UML"],
    },
    {
      title: "Frameworks/Logiciels",
      icon: Layers,
      skills: [
        "React js",
        "ReactNative",
        "Laravel",
        "Nest js",
        "Django",
        "Spring Boot",
        "Photoshop",
        "Illustrator",
        "VS Code",
        "Figma",
      ],
    },
    {
      title: "Web/DB",
      icon: Globe,
      skills: ["HTML", "CSS", "JAVASCRIPT", "PHP", "SQL Server", "Maria db", "Mongo DB"],
    },
    {
      title: "Langues",
      icon: MessageSquare,
      skills: ["Arabe (Maternelle)", "Français (Intermédiaire)", "Anglais (Intermédiaire)", "Español (Débutant)"],
    },
  ]

  const softSkills = ["Résolution de problèmes", "Esprit critique et éthique", "Capacité d’adaptation", "Flexibilité"]

  return (
    <section ref={sectionRef} id="skills" className="relative py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-3">Compétences</h2>
          <p className="text-lg text-muted-foreground">Technical expertise and tools</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative p-6 bg-card border border-border rounded-xl hover:border-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  {/* Icon and title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-200 cursor-pointer"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Hover background effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            )
          })}
        </div>

        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Compétences Transversales</h3>
            <p className="text-muted-foreground">Professional soft skills and competencies</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${700 + index * 80}ms` }}
              >
                <div className="relative p-5 bg-card border border-border rounded-lg hover:border-highlight hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <span className="text-foreground font-medium text-sm">{skill}</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-highlight/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
