"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { ProjectModal } from "./project-modal"

const PERSONAL_PROJECTS = [
  {
    id: 1,
    title: "SIGAP",
    description:
      "Développement d'un système intelligent de gestion des absences (SIGAP) basé sur la détection des adresses MAC Bluetooth.",
    technologies: ["Spring Boot", "Elasticsearch", "JWT", "Docker", "GitHub", "MySQL"],
    github_url: "https://github.com/MohamedKARKACHI/SIGAP",
    link_url: "https://sigap-eight.vercel.app/",
    image_url: null,
    order_index: 0,
  },
  {
    id: 2,
    title: "UML Class Diagram",
    description:
      "Conception d'une application web interactive permettant aux utilisateurs de créer visuellement des diagrammes de classes UML via une interface intuitive.",
    technologies: ["Spring Boot", "React JS", "Vite", "HTML/CSS", "MySQL"],
    github_url: "https://github.com/MohamedKARKACHI",
    link_url: null,
    image_url: null,
    order_index: 1,
  },
  {
    id: 3,
    title: "JSON/XML File Converter",
    description:
      "Développement d'une application web permettant la conversion de fichiers entre les formats JSON et XML, avec une interface utilisateur intuitive et un traitement rapide des données.",
    technologies: ["Spring Boot", "React JS", "Vite", "HTML/CSS", "MySQL"],
    github_url: "https://github.com/MohamedKARKACHI",
    link_url: "https://json-xml-amber.vercel.app/",
    image_url: null,
    order_index: 2,
  },
]

export function PersonalProjects() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
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

  return (
    <>
      <section ref={sectionRef} id="personal-projects" className="relative py-24 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl md:text-6xl font-bold text-foreground mb-6 text-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Projets Personnels
          </h2>
          <p
            className={`text-muted-foreground text-lg mb-16 text-center max-w-3xl mx-auto transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Projets académiques et personnels démontrant mes compétences techniques
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PERSONAL_PROJECTS.map((project, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedProject(project)
                  setIsModalOpen(true)
                }}
                className={`group relative p-6 rounded-2xl bg-card border-2 border-accent/20 hover:border-accent/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-accent/0 group-hover:bg-accent/5 transition-all duration-500" />

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm group-hover:text-foreground transition-colors duration-300 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs group-hover:bg-accent group-hover:text-white group-hover:scale-105 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4">
                    {project.link_url && (
                      <a
                        href={project.link_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/80 text-white rounded-lg text-sm transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink size={16} />
                        View Project
                      </a>
                    )}
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-accent text-muted-foreground hover:text-white rounded-lg text-sm transition-all duration-300 hover:scale-105"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectedProject} />
    </>
  )
}
