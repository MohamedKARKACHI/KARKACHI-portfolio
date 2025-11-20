"use client"

import { useEffect, useRef, useState } from "react"
import { Cloud, Cpu, Network, Sparkles, Wrench } from 'lucide-react'

export function OtherSkills() {
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
      title: "Networking",
      icon: Network,
      skills: ["Networking"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["Azure DevOps", "Cloud Computing", "OpenStack", "Docker"],
    },
    {
      title: "Virtualization",
      icon: Cpu,
      skills: ["Proxmox", "ESXi", "VMware vSphere", "vCenter", "VirtualBox", "Hyper-V"],
    },
    {
      title: "Specializations",
      icon: Sparkles,
      skills: ["Robotics", "Machine Learning"],
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Qt Creator", "PyQt"],
    },
  ]

  return (
    <section ref={sectionRef} id="other-skills" className="relative py-24 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-3">
            Autres Compétences
          </h2>
          <p className="text-lg text-muted-foreground">
            Advanced cloud, virtualization and specialized skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </section>
  )
}
