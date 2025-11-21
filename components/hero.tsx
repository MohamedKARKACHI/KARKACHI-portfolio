"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Download } from "lucide-react"
import { jsPDF } from "jspdf"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleDownloadCV = () => {
    const doc = new jsPDF()

    // Header
    doc.setFontSize(24)
    doc.text("KARKACHI MOHAMED", 20, 20)

    doc.setFontSize(14)
    doc.setTextColor(100)
    doc.text("Futur Ingénieur Test & Qualité Logicielle", 20, 30)

    // Contact Info
    doc.setFontSize(10)
    doc.setTextColor(0)
    doc.text("Marrakech | +212 619-176173 | karkachimohamed045@gmail.com", 20, 40)
    doc.text("linkedin.com/in/mohamed-karkachi", 20, 45)

    // Profile
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.text("PROFILE", 20, 55)
    doc.line(20, 57, 190, 57)

    doc.setFont("helvetica", "normal")
    doc.setFontSize(10)
    const profileText =
      "Étudiant en dernière année du cycle ingénieur MIAGE à l'EMSI, à la recherche d'un stage de fin d'études (PFE) de 4 à 6 mois. Bonnes connaissances en développement web et mobile (React, Node.js, Spring Boot) avec un intérêt pour les tests logiciels et l'assurance qualité."
    const splitProfile = doc.splitTextToSize(profileText, 170)
    doc.text(splitProfile, 20, 65)

    // Education
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.text("FORMATION ACADÉMIQUE", 20, 85)
    doc.line(20, 87, 190, 87)

    doc.setFontSize(10)
    doc.setFont("helvetica", "bold")
    doc.text("2023 – 2026: EMSI, Marrakech", 20, 95)
    doc.setFont("helvetica", "normal")
    doc.text("Cycle Ingénieur en Informatique et Réseaux", 20, 100)

    doc.setFont("helvetica", "bold")
    doc.text("2021 – 2023: OFPPT, SYBANTIC, Marrakech", 20, 110)
    doc.setFont("helvetica", "normal")
    doc.text("Diplôme Technicien Specialisé Infrastructure Degital Option Cloud Computing", 20, 115)

    // Experience
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.text("EXPÉRIENCES PROFESSIONNELLES", 20, 130)
    doc.line(20, 132, 190, 132)

    doc.setFontSize(10)
    doc.setFont("helvetica", "bold")
    doc.text("Juil. 2025 – Sept. 2025: Z.H MAC Negos, Marrakech", 20, 140)
    doc.setFont("helvetica", "normal")
    doc.text("Stagiaire en Développeur Full Stack", 20, 145)
    doc.text("- Création de 86 API REST sécurisées et performantes", 25, 150)
    doc.text("- Technologies: Java, Spring Boot, Spring Security, JWT, MySQL", 25, 155)

    doc.setFont("helvetica", "bold")
    doc.text("Juil. 2024 – Sept. 2024: FIZAZI & ASSOCIES, Rabat", 20, 165)
    doc.setFont("helvetica", "normal")
    doc.text("Stagiaire en Développeur Full Stack", 20, 170)
    doc.text("- Application web pour gérer les fichiers Excel (MERN Stack)", 25, 175)

    doc.setFont("helvetica", "bold")
    doc.text("Juil. 2023 – Août 2023: Ciment du Maroc, Marrakech", 20, 185)
    doc.setFont("helvetica", "normal")
    doc.text("Stagiaire en Développeur Full Stack", 20, 190)
    doc.text("- Application Desktop pour gérer les réclamations (PowerApp, SQLServer)", 25, 195)

    // Skills
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.text("COMPÉTENCES TECHNIQUE", 20, 210)
    doc.line(20, 212, 190, 212)

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.text("Programmation: C, C++, JAVA, Python, POO, UML", 20, 220)
    doc.text("Frameworks: React js, ReactNative, Laravel, Nest js, Django, Spring Boot", 20, 225)
    doc.text("Web/DB: HTML, CSS, JS, PHP, SQL Server, MongoDB, MySQL", 20, 230)

    doc.save("Karkachi_Mohamed_CV.pdf")
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
          <p className="text-highlight text-base md:text-lg font-mono mb-4">{t.hero.greeting}</p>
        </div>

        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">KARKACHI MOHAMED</h1>
        </div>

        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground leading-tight">
            {t.hero.role}
          </h2>
        </div>

        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-lg md:text-xl text-foreground max-w-2xl leading-relaxed mt-6">{t.hero.description}</p>
        </div>

        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-highlight hover:text-highlight-foreground transition-all duration-300 font-medium flex items-center gap-2 group shadow-lg hover:shadow-xl hover:scale-105"
            >
              {t.hero.contactMe}
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>

            <button
              onClick={handleDownloadCV}
              className="px-8 py-4 bg-background border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium flex items-center gap-2 group shadow-lg hover:shadow-xl hover:scale-105"
            >
              {t.hero.downloadCv}
              <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
