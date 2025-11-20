"use client"

import { useEffect, useRef, useState } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { ProjectModal } from "./project-modal"
import { ExternalLink, Github, Calendar, Building2, ArrowUpRight } from 'lucide-react'

// Fallback projects data from CV
const FALLBACK_PROJECTS = [
  {
    id: 1,
    title: "Stage Développeur Full Stack",
    company: "Z.H mac negos",
    period: "Juillet - Septembre 2024",
    description:
      "Conception, développement et configuration d'une application web pour gérer les fichiers Excel, fournir des tableaux et des statistiques avec des calculs, ainsi que l'exportation des résultats sous format Excel ou Word.",
    technologies: ["React JS", "Mongo DB", "Excel", "MERN Stack"],
    order_index: 1,
  },
  {
    id: 2,
    title: "Stage Développeur Full Stack",
    company: "FIZAZI & ASSOCIES",
    period: "Mars - Mai 2023",
    description:
      "Conception, Développement et Configuration d'une application Desktop pour gérer les réclamations et les réponses des employés.",
    technologies: ["PowerApp", "PowerBI", "Excel", "SQL Server"],
    order_index: 2,
  },
  {
    id: 3,
    title: "Stage Développeur Full Stack",
    company: "Ciment du Maroc",
    period: "Avril - Juillet 2025",
    description:
      "Création de 86 API REST sécurisées et performantes avec authentification, filtres, cache et logging complet. Conception d'une architecture back-end optimisée, scalable et prête pour la production.",
    technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL"],
    order_index: 0,
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
        console.log("[v0] Fetching projects from Supabase")
        const supabase = getSupabaseBrowserClient()

        if (!supabase) {
          console.log("[v0] Supabase not available, using fallback projects")
          setProjects(FALLBACK_PROJECTS.sort((a, b) => a.order_index - b.order_index))
          setLoading(false)
          return
        }

        const { data, error } = await supabase.from("projects").select("*").order("order_index")

        if (error) {
          console.error("[v0] Supabase error:", error.message)
          // Use fallback data on error
          setProjects(FALLBACK_PROJECTS.sort((a, b) => a.order_index - b.order_index))
        } else {
          console.log("[v0] Projects fetched successfully:", data)
          setProjects(data || [])
        }
      } catch (error: any) {
        console.error("[v0] Error fetching projects:", error?.message || error)
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

  return (
    null
  )
}
