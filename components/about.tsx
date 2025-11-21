"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"
import { CertificationHoverCard } from "./certification-hover-card"
import { ProjectHoverCard } from "./project-hover-card"
import { useLanguage } from "@/components/language-provider"

export function About() {
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.01 },
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

  const downloadCV = () => {
    const cvContent = `
    KARKACHI MOHAMED
    Futur Ingénieur Test & Qualité Logicielle
    
    CONTACT
    Email: karkachimohamed045@gmail.com
    Phone: +212 619-176173
    Location: Marrakech
    LinkedIn: https://linkedin.com/in/mohamed-karkachi
    
    PROFILE
    Étudiant en dernière année du cycle ingénieur MIAGE à l'EMSI, à la recherche d'un stage de fin d'études (PFE) de 4 à 6 mois. Bonnes connaissances en développement web et mobile (React, Node.js, Spring Boot) avec un intérêt pour les tests logiciels et l'assurance qualité.
    
    FORMATION ACADÉMIQUE
    2023 – 2026: EMSI, Marrakech - Cycle Ingénieur en Informatique et Réseaux
    2021 – 2023: OFPPT, SYBANTIC, Marrakech - Diplôme Technicien Specialisé Infrastructure Degital Option Cloud Computing
    
    EXPÉRIENCES PROFESSIONNELLES
    Juil. 2025 – Sept. 2025: Z.H MAC Negos - Stagiaire en Développeur Full Stack
    Juil. 2024 – Sept. 2024: FIZAZI & ASSOCIES - Stagiaire en Développeur Full Stack
    Juil. 2023 – Août 2023: Ciment du Maroc - Stagiaire en Développeur Full Stack
    
    COMPÉTENCES TECHNIQUE
    Programmation: C, C++, JAVA, Python, POO, UML
    Frameworks: React js, ReactNative, Laravel, Nest js, Django
    Web/DB: HTML, CSS, JAVASCRIPT, PHP, SQL Server, Maria db, Mongo DB
    `
    const element = document.createElement("a")
    const file = new Blob([cvContent], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = "Karkachi_Mohamed_CV.txt"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const certifications = [
    {
      title: "Java SE 17 Developer (1Z0-829)",
      provider: "Oracle",
      date: "2024",
      type: "CERTIFICATION",
      verifyUrl: "#",
      previewUrl: "/oracle-certificate.jpg",
    },
    {
      title: "COCIA",
      provider: "Conference",
      date: "Avril 2025",
      type: "CONFERENCE",
      verifyUrl: "#",
      previewUrl: "/business-conference.png",
    },
    {
      title: "EMSISTE INNOV",
      provider: "Conference",
      date: "Mai 2025",
      type: "CONFERENCE",
      verifyUrl: "#",
      previewUrl: "/business-conference.png",
    },
    {
      title: "AISEC",
      provider: "Conference",
      date: "Mai 2025",
      type: "CONFERENCE",
      verifyUrl: "#",
      previewUrl: "/business-conference.png",
    },
  ]

  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "JavaScript", "Python", "C++", "PHP", "UML"],
    },
    {
      category: "Frontend",
      skills: ["React", "React Native", "CSS", "HTML", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["Spring Boot", "Nest.js", "Laravel", "Django"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB", "MariaDB", "SQL Server", "Elasticsearch"],
    },
    {
      category: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "Azure", "GitHub", "AWS"],
    },
    {
      category: "Tools",
      skills: ["VS Code", "GitHub", "Photoshop", "Illustrator"],
    },
  ]

  return (
    <section ref={sectionRef} id="about" className="relative py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 items-start">
          <div className="flex flex-col gap-12">
            {/* Sidebar navigation */}
            <nav
              className={`flex flex-col gap-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="space-y-3">
                <a
                  href="#experience"
                  className="block text-lg font-semibold text-accent hover:text-highlight transition-colors"
                >
                  {t.nav.experience}
                </a>
                <a
                  href="#projects"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.nav.projects}
                </a>
                <a
                  href="#skills"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.nav.skills}
                </a>
                <a
                  href="#certifications"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.about.certificationsTitle}
                </a>
                <a
                  href="#coursera"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.about.courseraTitle}
                </a>
              </div>
            </nav>

            {/* Profile image - desktop only */}
            <div
              className={`hidden md:block relative w-48 h-48 rounded-xl overflow-hidden bg-card border-2 border-border transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <Image
                src="/images/design-mode/profile_image.png"
                alt="Mohammed Karkachi"
                width={200}
                height={200}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Social links */}
            <div
              className={`flex flex-col gap-3 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <a
                href="https://github.com/MohamedKARKACHI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/mohamed-karkachi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-12">
            {/* Hero section */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Mohamed Karkachi</h2>
              <p className="text-lg text-accent font-medium mb-4">{t.about.role}</p>
            </div>

            {/* Bio paragraphs */}
            <div
              className={`space-y-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="text-lg leading-relaxed text-foreground/90">{t.about.description}</p>
            </div>

            {/* Experience section */}
            <div
              id="experience"
              className={`space-y-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <h3 className="text-2xl font-bold text-foreground">{t.about.experienceTitle}</h3>
              <div className="space-y-4">
                {t.about.experience.map((exp, index) => (
                  <div key={index} className="pb-4 border-b border-border last:border-b-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{exp.title}</h4>
                        <p className="text-sm text-accent">{exp.company}</p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{exp.period}</span>
                    </div>
                    <p className="text-sm text-foreground/80">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Projects section */}
            <div
              id="projects"
              className={`space-y-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <h3 className="text-2xl font-bold text-foreground">{t.about.projectsTitle}</h3>
              <div className="space-y-4">
                {t.about.personalProjects.map((project, index) => (
                  <ProjectHoverCard
                    key={index}
                    previewUrl={project.previewUrl}
                    title={project.title}
                    imageWidth={140}
                    imageHeight={160}
                  >
                    <div className="p-5 bg-card border border-border rounded-xl hover:border-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h4 className="font-semibold text-foreground hover:text-accent transition-colors">
                              {project.title}
                            </h4>
                            <p className="text-sm text-foreground/80 mt-2">{project.description}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.technologies.map((tech, i) => {
                            const colors = [
                              "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
                              "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
                              "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
                              "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
                              "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
                              "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
                            ]
                            const colorClass = colors[i % colors.length]

                            return (
                              <span key={tech} className={`px-3 py-1 rounded-full text-xs font-medium ${colorClass}`}>
                                {tech}
                              </span>
                            )
                          })}
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium bg-accent/10 text-accent hover:bg-accent hover:text-card rounded-lg mt-3 transition-all duration-300"
                          >
                            <span>{t.about.viewLiveProject}</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </ProjectHoverCard>
                ))}
              </div>
            </div>

            {/* Skills section */}
            <div
              id="skills"
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">{t.about.skillsTitle}</h3>
                <p className="text-muted-foreground">{t.about.skillsSubtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillCategories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="group relative p-5 bg-card border border-border rounded-xl hover:border-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                      {cat.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, i) => {
                        const colors = [
                          "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
                          "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
                          "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
                          "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
                          "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
                          "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
                        ]
                        const colorClass = colors[i % colors.length]

                        return (
                          <span key={skill} className={`px-3 py-1 rounded-full text-xs font-medium ${colorClass}`}>
                            {skill}
                          </span>
                        )
                      })}
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Conferences Section */}
            <div
              id="certifications"
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">{t.about.certificationsTitle}</h3>
                <p className="text-muted-foreground">{t.about.certificationsSubtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <CertificationHoverCard
                    key={index}
                    previewUrl={cert.previewUrl}
                    title={cert.title}
                    imageWidth={140}
                    imageHeight={160}
                  >
                    <div className="p-5 bg-card border border-border rounded-xl hover:border-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <h4 className="font-semibold text-foreground hover:text-accent transition-colors">
                              {cert.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">{cert.provider}</p>
                          </div>
                          <span className="px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium whitespace-nowrap">
                            {cert.type}
                          </span>
                        </div>
                        <p className="text-sm text-foreground/80 mt-2">
                          {cert.type === "CONFERENCE"
                            ? `Attended ${cert.title} conference in ${cert.date}`
                            : `Earned ${cert.title} certification from ${cert.provider}`}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{cert.date}</span>
                        <span className="text-xs font-medium text-accent group-hover:underline">View Certificate</span>
                      </div>
                    </div>
                  </CertificationHoverCard>
                ))}
              </div>
            </div>

            {/* Coursera Certifications Section */}
            <div
              id="coursera"
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">{t.about.courseraTitle}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "React Basics",
                    provider: "Meta",
                    date: "Nov 13, 2024",
                    link: "https://coursera.org/verify/32U4KLJGLAG4",
                  },
                  {
                    title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
                    provider: "IBM",
                    date: "Mar 5, 2025",
                    link: "https://coursera.org/verify/6WGO2LVQSGE8",
                  },
                  {
                    title: "Introduction to Cloud Computing",
                    provider: "IBM",
                    date: "Apr 23, 2025",
                    link: "https://coursera.org/verify/MBRRN2I6W975",
                  },
                  {
                    title: "The Unix Workbench",
                    provider: "Johns Hopkins University",
                    date: "Apr 19, 2024",
                    link: "https://coursera.org/verify/99NUMYVKLS2Q",
                  },
                  {
                    title: "Introduction to Java and Object-Oriented Programming",
                    provider: "University of Pennsylvania",
                    date: "Nov 12, 2024",
                    link: "https://coursera.org/verify/GQPRQ5X5R3KI",
                  },
                  {
                    title: "Introduction à la programmation orientée objet (en C++)",
                    provider: "École Polytechnique Fédérale de Lausanne",
                    date: "Dec 12, 2023",
                    link: "https://coursera.org/verify/H5JUWL8KLL3",
                  },
                  {
                    title: "Advanced Styling with Responsive Design",
                    provider: "University of Michigan",
                    date: "Nov 24, 2023",
                    link: "https://coursera.org/verify/FQAW8PKWRB9K",
                  },
                  {
                    title: "Web Design for Everybody Capstone",
                    provider: "University of Michigan",
                    date: "Dec 8, 2023",
                    link: "https://coursera.org/verify/LBV2EM5R4ZA7",
                  },
                  {
                    title: "Interactivity with JavaScript",
                    provider: "University of Michigan",
                    date: "Nov 10, 2023",
                    link: "https://coursera.org/verify/R59BMLRNJK3P",
                  },
                  {
                    title: "Software Engineering: Software Design and Project Management",
                    provider: "The Hong Kong University of Science and Technology",
                    date: "May 6, 2024",
                    link: "https://coursera.org/verify/V8FYH3EU2GLD",
                  },
                ].map((cert, index) => (
                  <a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-5 bg-card border border-border rounded-xl hover:border-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                            {cert.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{cert.provider}</p>
                        </div>
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-medium whitespace-nowrap">
                          Coursera
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{cert.date}</span>
                      <span className="text-xs font-medium text-accent group-hover:underline flex items-center gap-1">
                        Verify
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Oracle Java Certification Section */}
            <div
              id="oracle-java-cert"
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "900ms" }}
            >
              <div></div>

              <div className="flex flex-col items-center gap-8 bg-card border border-border rounded-xl p-8">
                {/* Certificate Image */}
                <div className="w-full max-w-3xl">
                  <div className="rounded-xl overflow-hidden shadow-2xl border border-muted hover:shadow-lg transition-shadow">
                    <img
                      src="/images/screenshot-202025-11-21-20at-2004.png"
                      alt="Oracle Certified Professional: Java SE 17 Developer Certificate"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="text-center space-y-4 w-full">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Oracle Certified Professional</h2>
                  <p className="text-xl font-semibold text-accent">Java SE 17 Developer</p>

                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 pt-4">
                    <div>
                      <span className="text-muted-foreground font-semibold">Credential ID:</span>
                      <p className="text-foreground font-mono text-lg tracking-wide">103114613OCPJSE17</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground font-semibold">Date Earned:</span>
                      <p className="text-foreground">November 07, 2025</p>
                    </div>
                  </div>

                  <a
                    href="https://www.oracle.com/certificate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors mt-4"
                  >
                    Verify Certificate
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Button */}
          </div>
        </div>
      </div>
    </section>
  )
}
