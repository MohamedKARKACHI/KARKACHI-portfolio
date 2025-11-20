"use client"

import { useEffect, useRef, useState } from "react"
import { Download, Github, Linkedin } from "lucide-react"
import Image from "next/image"
import { CertificationHoverCard } from "./certification-hover-card"
import { ProjectHoverCard } from "./project-hover-card"

export function About() {
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

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
    MOHAMMED KARKACHI
    Full Stack Developer
    
    CONTACT
    Email: karkachimohamed045@gmail.com
    Phone: +212 619-176173
    Location: Marrakech
    LinkedIn: https://www.linkedin.com/in/mohamed-karkachi-894678253/
    GitHub: https://github.com/MohamedKARKACHI
    Portfolio: www.karkachiphone.com
    
    PROFILE
    5th year engineering student in Computer Science at EMSI, seeking a 4-month PFE internship. Passionate about back-end development with experience in REST API design and database management using Spring Boot, MySQL, and Elasticsearch. Curious, rigorous, and eager to contribute to innovative projects.
    
    EDUCATION
    5ème Année Ingénierie (2023-2026)
    Ingénierie Informatique et Réseaux
    École Marocaine des Sciences de L'ingénieur (EMSI), Marrakech, Maroc
    
    Diplôme Technician Spécialisé (2021-2023)
    Infrastructure Digitale Option Cloud Computing
    OFPPT, SYBANTIC, Marrakech, Maroc
    
    PROFESSIONAL EXPERIENCE
    Full Stack Developer Intern - Z.H mac negos (April - July 2025)
    - Created 86 secure and performant REST APIs with authentication, filters, cache, and complete logging
    - Designed optimized, scalable, production-ready back-end architecture
    - Technologies: Java, Spring Boot, Spring Security, JWT, JPA, OAuth2, RBAC, MySQL, Ehcache
    
    Full Stack Developer Intern - FIZAZI & ASSOCIES (July - September 2024)
    - Designed and developed web application for Excel file management with statistics and calculations
    - Created dashboards for result visualization with Excel/Word export functionality
    - Technologies: React.js, MongoDB, Excel, MERN Stack
    
    Full Stack Developer Intern - Ciment du Maroc (March - May 2023)
    - Designed and developed Desktop application for employee complaint and response management
    - Technologies: PowerApp, Power BI, Excel, SQL Server
    
    TECHNICAL SKILLS
    Languages: HTML, CSS, JavaScript, PHP, C, C++, Java, Python, UML
    Frameworks: React.js, React Native, Laravel, Nest.js, Django
    Databases: SQL Server, MariaDB, MongoDB
    Tools: Visual Studio Code, QT Creator, XAMPP, StarUML, Photoshop, Illustrator
    Cloud: Azure (AZ104, AZ500, AZ900), Cloud Computing
    DevOps: Docker, GitHub, OpenStack, DevStack, Packstack, Kolla Ansible
    Virtualization: Proxmox, ESXi, VMware vSphere, vCenter, VirtualBox, Hyper-V
    
    SOFT SKILLS
    Problem Solving
    Critical Thinking and Ethics
    Adaptability
    Flexibility
    
    LANGUAGES
    Arabic: Native
    French: Intermediate
    English: Intermediate
    Spanish: Beginner
    
    ACADEMIC PROJECTS
    SIGAP - Intelligent Absence Management System
    Description: Development of intelligent absence management system based on Bluetooth MAC address detection
    Technologies: Spring Boot, Elasticsearch, JWT, Docker, GitHub, MySQL
    Link: https://sigap-eight.vercel.app/
    
    UML Class Diagram Tool
    Description: Interactive web application for creating UML class diagrams visually with intuitive interface
    Technologies: Spring Boot, React.js, Vite, HTML/CSS, MySQL
    
    JSON/XML File Conversion Application
    Description: Web application for file conversion between JSON and XML formats with intuitive UI
    Technologies: Spring Boot, React.js, Vite, HTML/CSS, MySQL
    Link: https://json-xml-amber.vercel.app/
    
    CERTIFICATIONS
    Data Visualization - Coursera
    Software Engineering - Coursera
    The Unix Workbench - Johns Hopkins University
    Interactivity with JavaScript - Coursera
    Introduction to OOP (C++) - Coursera
    Advanced Styling with Responsive Design - Coursera
    CCNA1, CCNA2, CCNA3 - OFPPT Cisco Academy
    AZ104, AZ500, AZ900 - OFPPT Microsoft
    React Basics - Meta
    AWS S3 Basics - Coursera
    Introduction to Basic Game Development using Scratch - Coursera
    Building a Business Presence With Facebook Marketing - Coursera
    Use Canva to Create Desktop and Mobile-friendly Web Pages - Coursera
    Compute Resources in Azure - Whizlabs
    Virtual Networks in Azure - Whizlabs
    Containers w/ Docker, Kubernetes & OpenShift - IBM
    Introduction to Machine Learning - Duke University
    AI For All - AI CERTs
    Introduction to Java and Object-Oriented Programming - University of Pennsylvania
    Advanced Styling with Responsive Design - University of Michigan
    Use SurveyMonkey to Create a Survey and Analyze Results - Coursera
    Getting Started with Power BI Desktop - Deprecated Guided Projects
    La recherche documentaire - École Polytechnique
    Azure Synapse SQL Pool - Implement Polybase - Coursera
    Build Random Forests in R with Azure ML Studio - Deprecated Guided Projects
    Introduction to Cloud Computing - IBM
    Software Engineering: Software Design and Project Management - The Hong Kong University of Science and Technology
    Storage in Azure - Whizlabs
    Web Design for Everybody Capstone - University of Michigan
    Interactivity with JavaScript - University of Michigan
    Introduction à la programmation orientée objet (en C++) - EPFL
    `
    const element = document.createElement("a")
    const file = new Blob([cvContent], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = "Mohammed_Karkachi_CV.txt"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const certifications = [
    {
      title: "Introduction to Basic Game Development using Scratch",
      provider: "Coursera",
      date: "Dec 13, 2023",
      type: "PROJECT",
      verifyUrl: "https://coursera.org/verify/3JE9YJ6GHGA5",
      previewUrl: "/coursera-scratch-game-development-certificate.png",
    },
    {
      title: "Building a Business Presence With Facebook Marketing",
      provider: "Coursera",
      date: "Dec 13, 2023",
      type: "PROJECT",
      verifyUrl: "https://coursera.org/verify/88NL3KWEK28H",
      previewUrl: "/coursera-facebook-marketing-certificate.png",
    },
    {
      title: "Introduction to Computers and Operating Systems and Security",
      provider: "Microsoft",
      date: "Dec 13, 2023",
      type: "COURSE",
      verifyUrl: "https://coursera.org/verify/98LMYESU5TJR",
      previewUrl: "/microsoft-operating-systems-security-certificate.png",
    },
    {
      title: "React Basics",
      provider: "Meta",
      date: "Nov 13, 2024",
      type: "COURSE",
      verifyUrl: "https://coursera.org/verify/32U4KLJGLAG4",
      previewUrl: "/meta-react-basics-certificate.png",
    },
    {
      title: "Use Canva to Create Desktop and Mobile-friendly Web Pages",
      provider: "Coursera",
      date: "Dec 13, 2023",
      type: "PROJECT",
      verifyUrl: "https://coursera.org/verify/56ZL87T7BKUS",
      previewUrl: "/coursera-canva-web-design-certificate.png",
    },
    {
      title: "Compute Resources in Azure",
      provider: "Whizlabs",
      date: "Mar 13, 2025",
      type: "COURSE",
      verifyUrl: "https://coursera.org/verify/7DS4VM7PDZRX",
      previewUrl: "/whizlabs-compute-resources-azure-certificate.png",
    },
    {
      title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
      provider: "IBM",
      date: "Mar 5, 2025",
      type: "COURSE",
      verifyUrl: "https://coursera.org/verify/6WGO2LVQ8GE8",
      previewUrl: "/ibm-containers-kubernetes-certificate.png",
    },
    {
      title: "AWS S3 Basics",
      provider: "Coursera",
      date: "Dec 13, 2023",
      type: "PROJECT",
      verifyUrl: "https://coursera.org/verify/5XAPD2S6XGCW",
      previewUrl: "/coursera-aws-s3-basics-certificate.png",
    },
    {
      title: "Virtual Networks in Azure",
      provider: "Whizlabs",
      date: "Mar 12, 2025",
      type: "COURSE",
      verifyUrl: "https://coursera.org/verify/BMWKVYCSA79F",
      previewUrl: "/whizlabs-virtual-networks-azure-certificate.png",
    },
    {
      title: "The Unix Workbench",
      provider: "Johns Hopkins University",
      date: "Apr 19, 2024",
      type: "COURSE",
      verifyUrl: "https://coursera.org/verify/99NUMYVKLS2Q",
      previewUrl: "/johns-hopkins-unix-workbench-certificate.png",
    },
    {
      title: "Introduction to Machine Learning",
      provider: "Duke University",
      date: "Nov 12, 2025",
      type: "COURSE",
      verifyUrl: "https://coursera.org/verify/Q66XQL85J9WX",
      previewUrl: "/duke-machine-learning-certificate.png",
    },
    {
      title: "AI For All",
      provider: "AI CERTs",
      date: "Nov 12, 2025",
      type: "COURSE",
      verifyUrl: "https://coursera.org/verify/5SACF2EF6Z5P",
      previewUrl: "/aicerts-ai-for-all-certificate.png",
    },
    {
      title: "Introduction to Java and Object-Oriented Programming",
      provider: "University of Pennsylvania",
      date: "Nov 12, 2024",
      type: "COURSE",
      verifyUrl: "https://coursera.org/verify/GQPRQ5X5R3KI",
      previewUrl: "/penn-java-oop-certificate.png",
    },
    {
      title: "Advanced Styling with Responsive Design",
      provider: "University of Michigan",
      date: "Nov 24, 2023",
      type: "COURSE",
      verifyUrl: "https://coursera.org/verify/FQAW8PKWRB9K",
      previewUrl: "/michigan-responsive-design-certificate.png",
    },
    {
      title: "Use SurveyMonkey to Create a Survey and Analyze Results",
      provider: "Coursera",
      date: "Dec 13, 2023",
      type: "PROJECT",
      verifyUrl: "https://coursera.org/verify/F369FKWUELJ6",
      previewUrl: "/coursera-surveymonkey-certificate.png",
    },
    {
      title: "Getting Started with Power BI Desktop",
      provider: "Deprecated Guided Projects",
      date: "Dec 13, 2023",
      type: "PROJECT",
      verifyUrl: "https://coursera.org/verify/K32LK6B9PY6N",
      previewUrl: "/powerbi-desktop-certificate.png",
    },
    {
      title: "La recherche documentaire",
      provider: "École Polytechnique",
      date: "May 7, 2024",
      type: "COURSE",
      verifyUrl: "https://coursera.org/verify/IDZ6C52ZVRSE",
      previewUrl: "/ecole-polytechnique-recherche-documentaire-certificate.png",
    },
    {
      title: "Azure Synapse SQL Pool - Implement Polybase",
      provider: "Coursera",
      date: "Dec 13, 2023",
      type: "PROJECT",
      verifyUrl: "https://coursera.org/verify/UM558NT36J25",
      previewUrl: "/azure-synapse-sql-pool-certificate.png",
    },
    {
      title: "Build Random Forests in R with Azure ML Studio",
      provider: "Deprecated Guided Projects",
      date: "Dec 13, 2023",
      type: "PROJECT",
      verifyUrl: "https://coursera.org/verify/IV9QHLWLFXUY",
      previewUrl: "/random-forests-r-certificate.png",
    },
    {
      title: "Introduction to Cloud Computing",
      provider: "IBM",
      date: "Apr 23, 2025",
      type: "COURSE",
      verifyUrl: "https://coursera.org/verify/MBRRN2I6W975",
      previewUrl: "/ibm-cloud-computing-certificate.png",
    },
    {
      title: "Software Engineering: Software Design and Project Management",
      provider: "The Hong Kong University of Science and Technology",
      date: "May 6, 2024",
      type: "COURSE",
      verifyUrl: "https://coursera.org/verify/V8FYH3EU2GLD",
      previewUrl: "/hkust-software-engineering-certificate.png",
    },
    {
      title: "Storage in Azure",
      provider: "Whizlabs",
      date: "Mar 13, 2025",
      type: "COURSE",
      verifyUrl: "https://coursera.org/verify/V9T1UH484L34",
      previewUrl: "/whizlabs-storage-azure-certificate.png",
    },
    {
      title: "Web Design for Everybody Capstone",
      provider: "University of Michigan",
      date: "Dec 8, 2023",
      type: "COURSE",
      verifyUrl: "https://coursera.org/verify/LBV2EM5R4ZA7",
      previewUrl: "/michigan-web-design-capstone-certificate.png",
    },
    {
      title: "Interactivity with JavaScript",
      provider: "University of Michigan",
      date: "Nov 10, 2023",
      type: "COURSE",
      verifyUrl: "https://coursera.org/verify/R59BMLRNJK3P",
      previewUrl: "/michigan-javascript-interactivity-certificate.png",
    },
    {
      title: "Introduction à la programmation orientée objet (en C++)",
      provider: "EPFL",
      date: "Dec 12, 2023",
      type: "COURSE",
      verifyUrl: "https://coursera.org/verify/H5JUW8LKLLV3",
      previewUrl: "/epfl-cpp-programming-certificate.png",
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

  const experience = [
    {
      period: "2025",
      title: "Full Stack Developer Intern",
      company: "Z.H mac negos",
      description: "Created 86 secure REST APIs with authentication, filters, cache, and complete logging",
    },
    {
      period: "2024",
      title: "Full Stack Developer Intern",
      company: "FIZAZI & ASSOCIES",
      description: "Designed web application for Excel file management with dashboards and export functionality",
    },
    {
      period: "2023",
      title: "Full Stack Developer Intern",
      company: "Ciment du Maroc",
      description: "Developed Desktop application for employee complaint and response management",
    },
  ]

  const personalProjects = [
    {
      title: "SIGAP - Intelligent Absence Management System",
      description: "Development of intelligent absence management system based on Bluetooth MAC address detection",
      technologies: ["Spring Boot", "Elasticsearch", "JWT", "Docker", "MySQL"],
      link: "https://sigap-eight.vercel.app/",
      previewUrl: "/sigap-project-preview.jpg",
    },
    {
      title: "UML Class Diagram Tool",
      description: "Interactive web application for creating UML class diagrams visually with intuitive interface",
      technologies: ["Spring Boot", "React.js", "Vite", "MySQL"],
      previewUrl: "/uml-diagram-tool-preview.jpg",
    },
    {
      title: "JSON/XML File Conversion Application",
      description: "Web application for file conversion between JSON and XML formats with intuitive UI",
      technologies: ["Spring Boot", "React.js", "Vite", "MySQL"],
      link: "https://json-xml-amber.vercel.app/",
      previewUrl: "/json-xml-converter-preview.jpg",
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
                  Experience
                </a>
                <a
                  href="#projects"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Skills
                </a>
                <a
                  href="#certifications"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Certifications
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
                src="/images/design-mode/v0_image.png"
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
                href="https://www.linkedin.com/in/mohamed-karkachi-894678253/"
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
              <p className="text-lg text-accent font-medium mb-4">Full Stack Developer & Computer Science Engineer</p>
            </div>

            {/* Bio paragraphs */}
            <div
              className={`space-y-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="text-lg leading-relaxed text-foreground/90">
                I&#39;m a engineer in Computer Science , specializing in Computer Engineering and Networks. Passionate
                about back-end development, I have hands-on experience in REST API design and database management using
                Spring Boot, MySQL, and Elasticsearch.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                With a rigorous approach to problem-solving and critical thinking, I'm eager to contribute to innovative
                projects that push the boundaries of what's possible. My expertise spans from cloud infrastructure and
                DevOps to full-stack development across multiple frameworks and technologies.
              </p>
            </div>

            {/* Experience section */}
            <div
              id="experience"
              className={`space-y-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <h3 className="text-2xl font-bold text-foreground">Experience</h3>
              <div className="space-y-4">
                {experience.map((exp, index) => (
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
              <h3 className="text-2xl font-bold text-foreground">Personal Projects</h3>
              <div className="space-y-4">
                {personalProjects.map((project, index) => (
                  <ProjectHoverCard
                    key={index}
                    previewUrl={project.previewUrl}
                    title={project.title}
                    imageWidth={140}
                    imageHeight={160}
                  >
                    <div className="p-5 bg-card border border-border rounded-xl hover:border-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground hover:text-accent transition-colors">
                            {project.title}
                          </h4>
                          <p className="text-sm text-foreground/80 mt-2">{project.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs text-highlight hover:text-accent mt-3 transition-colors"
                        >
                          <span>View Project</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      )}
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
                <h3 className="text-3xl font-bold text-foreground mb-2">Compétences</h3>
                <p className="text-muted-foreground">Technical expertise and tools</p>
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
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Courses Section */}
            <div
              id="certifications"
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">Certifications & Courses</h3>
                <p className="text-muted-foreground">Professional credentials and continuous learning</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <CertificationHoverCard key={idx} previewUrl={cert.previewUrl} title={cert.title}>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-6 bg-card border border-border rounded-xl hover:border-highlight hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden block h-full flex flex-col cert-hover"
                    >
                      {/* Background gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-highlight/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Badge */}
                      <div className="relative flex items-start justify-between gap-4 mb-4">
                        <span
                          className={`px-2.5 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
                            cert.type === "PROJECT" ? "bg-accent/20 text-accent" : "bg-highlight/20 text-highlight"
                          }`}
                        >
                          {cert.type}
                        </span>
                        <span className="text-xs text-muted-foreground">{cert.date}</span>
                      </div>

                      {/* Title */}
                      <h4 className="relative font-semibold text-foreground mb-3 line-clamp-3 group-hover:text-highlight transition-colors flex-grow">
                        {cert.title}
                      </h4>

                      {/* Provider */}
                      <p className="relative text-sm text-accent font-medium mb-4">{cert.provider}</p>

                      {/* Verify link */}
                      <div className="relative flex items-center gap-2 text-xs text-muted-foreground group-hover:text-foreground transition-colors mt-auto">
                        <span>Verify credential</span>
                        <svg
                          className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                  </CertificationHoverCard>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div
              className={`pt-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <button
                onClick={downloadCV}
                className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-highlight hover:text-highlight-foreground transition-all duration-300 font-medium flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
