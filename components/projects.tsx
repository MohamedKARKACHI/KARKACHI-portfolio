"use client"

import { useEffect, useRef, useState } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"

// Fallback projects data from CV
const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: "Stagiaire en Développeur Full Stack",
    company: "Z.H MAC Negos",
    period: "Juil. 2025 – Sept. 2025",
    description:
      "Création de 86 API REST sécurisées et performantes avec authentification, filtres, cache et logging complet. Conception d’une architecture back-end optimisée, scalable et prête pour la production.",
    technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL"],
    order_index: 1,
  },
  {
    id: 2,
    title: "Stagiaire en Développeur Full Stack",
    company: "FIZAZI & ASSOCIES",
    period: "Juil. 2024 – Sept. 2024",
    description:
      "Conception, développement et configuration d'une application web pour gérer les fichiers Excel, fournir des tableaux et des statistiques avec des calculs, ainsi que l'exportation des résultats sous format Excel ou Word.",
    technologies: ["REACT JS", "MONGO DB", "Excel", "MERN STACK"],
    order_index: 2,
  },
  {
    id: 3,
    title: "Stagiaire en Développeur Full Stack",
    company: "Ciment du Maroc",
    period: "Juil. 2023 – Août 2023",
    description:
      "Conception, Développement et Configuration d'une application Desktop pour gérer les réclamations et les réponses des employés.",
    technologies: ["PowerApp", "PowerBI", "Excel", "SQLserver"],
    order_index: 3,
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
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

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log("Fetching projects from Supabase")
        const supabase = getSupabaseBrowserClient()

        if (!supabase) {
          console.log("Supabase not available, using fallback projects")
          setProjects(FALLBACK_PROJECTS.sort((a, b) => a.order_index - b.order_index))
          setLoading(false)
          return
        }

        const { data, error } = await supabase.from("projects").select("*").order("order_index")

        if (error) {
          console.error("Supabase error:", error.message)
          // Use fallback data on error
          setProjects(FALLBACK_PROJECTS.sort((a, b) => a.order_index - b.order_index))
        } else {
          console.log("Projects fetched successfully:", data)
          setProjects(data || [])
        }
      } catch (error: any) {
        console.error("Error fetching projects:", error?.message || error)
        // Use fallback data on error
        setProjects(FALLBACK_PROJECTS.sort((a, b) => a.order_index - b.order_index))
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const handleProjectClick = (project: any) => {
    console.log("Project clicked:", project)
  }

  return null
}
