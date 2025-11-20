"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Award } from "lucide-react"
import { CertificationModal } from "./certification-modal"

const CERTIFICATIONS = [
  {
    id: 1,
    title: "Use Canva to Create Desktop and Mobile-friendly Web Pages",
    issuer: "Coursera Project Network",
    date: "Dec 13, 2023",
    credential_url: "https://coursera.org/verify/56ZL87T7BKUS",
    image_url: null,
  },
  {
    id: 2,
    title: "AWS S3 Basics",
    issuer: "Cloud Computing",
    date: "Dec 13, 2023",
    credential_url: "https://coursera.org/verify/5XAPD2S6XGCW",
    image_url: null,
  },
  {
    id: 3,
    title: "Building a Business Presence With Facebook Marketing",
    issuer: "SkillUp",
    date: "Dec 13, 2023",
    credential_url: "https://coursera.org/verify/88NL3KWEK28H",
    image_url: null,
  },
  {
    id: 4,
    title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
    issuer: "IBM",
    date: "Mar 5, 2025",
    credential_url: "https://coursera.org/verify/6WGO2LVQSGE8",
    image_url: null,
  },
  {
    id: 5,
    title: "The Unix Workbench",
    issuer: "Johns Hopkins Bloomberg School of Public Health",
    date: "Apr 19, 2024",
    credential_url: "https://coursera.org/verify/99NUMYVKLS2Q",
    image_url: null,
  },
  {
    id: 6,
    title: "React Basics",
    issuer: "Meta",
    date: "Nov 13, 2024",
    credential_url: "https://coursera.org/verify/32U4KLJGLAG4",
    image_url: null,
  },
  {
    id: 7,
    title: "Virtual Networks in Azure",
    issuer: "Whizlabs",
    date: "Mar 12, 2025",
    credential_url: "https://coursera.org/verify/BMWKVYCSA79F",
    image_url: null,
  },
  {
    id: 8,
    title: "Compute Resources in Azure",
    issuer: "Whizlabs",
    date: "Mar 13, 2025",
    credential_url: "https://coursera.org/verify/7DS4VM7PDZRX",
    image_url: null,
  },
  {
    id: 9,
    title: "Introduction to Basic Game Development using Scratch",
    issuer: "Freedom Learning Group",
    date: "Dec 13, 2023",
    credential_url: "https://coursera.org/verify/3JE9YJ6GHGA5",
    image_url: null,
  },
  {
    id: 10,
    title: "Introduction to Computers and Operating Systems and Security",
    issuer: "Microsoft",
    date: "Dec 13, 2023",
    credential_url: "https://coursera.org/verify/98LMYESU5TJR",
    image_url: null,
  },
  {
    id: 11,
    title: "La recherche documentaire",
    issuer: "École Polytechnique",
    date: "May 7, 2024",
    credential_url: "https://coursera.org/verify/JDZGC52ZVRSF",
    image_url: null,
  },
  {
    id: 12,
    title: "Introduction to Java and Object-Oriented Programming",
    issuer: "University of Pennsylvania",
    date: "Nov 12, 2024",
    credential_url: "https://coursera.org/verify/GQPRQ5X5R3KI",
    image_url: null,
  },
  {
    id: 13,
    title: "Introduction à la programmation orientée objet (en C++)",
    issuer: "École Polytechnique Fédérale de Lausanne",
    date: "Dec 12, 2023",
    credential_url: "https://coursera.org/verify/H5JUWL8KLL3",
    image_url: null,
  },
  {
    id: 14,
    title: "Advanced Styling with Responsive Design",
    issuer: "University of Michigan",
    date: "Nov 24, 2023",
    credential_url: "https://coursera.org/verify/FQAW8PKWRB9K",
    image_url: null,
  },
  {
    id: 15,
    title: "Introduction to Cloud Computing",
    issuer: "IBM",
    date: "Apr 23, 2025",
    credential_url: "https://coursera.org/verify/MBRRN2I6W975",
    image_url: null,
  },
  {
    id: 16,
    title: "Web Design for Everybody Capstone",
    issuer: "University of Michigan",
    date: "Dec 8, 2023",
    credential_url: "https://coursera.org/verify/LBV2EM5R4ZA7",
    image_url: null,
  },
  {
    id: 17,
    title: "Use SurveyMonkey to Create a Survey and Analyze Results",
    issuer: "Freedom Learning Group",
    date: "Dec 13, 2023",
    credential_url: "https://coursera.org/verify/F369FKUELJ6",
    image_url: null,
  },
  {
    id: 18,
    title: "Build Random Forests in R with Azure ML Studio",
    issuer: "Deprecated Guided Projects",
    date: "Dec 13, 2023",
    credential_url: "https://coursera.org/verify/JV9QHLWLFXUY",
    image_url: null,
  },
  {
    id: 19,
    title: "Monitoring and Backup in Azure",
    issuer: "Whizlabs",
    date: "Mar 13, 2025",
    credential_url: "https://coursera.org/verify/QNS1LULNEIV2",
    image_url: null,
  },
  {
    id: 20,
    title: "Getting Started with Power BI Desktop",
    issuer: "Deprecated Guided Projects",
    date: "Dec 13, 2023",
    credential_url: "https://coursera.org/verify/K32LK6B9PY6N",
    image_url: null,
  },
  {
    id: 21,
    title: "Software Engineering: Software Design and Project Management",
    issuer: "The Hong Kong University of Science and Technology",
    date: "May 6, 2024",
    credential_url: "https://coursera.org/verify/V8FYH3EU2GLD",
    image_url: null,
  },
  {
    id: 22,
    title: "Interactivity with JavaScript",
    issuer: "University of Michigan",
    date: "Nov 10, 2023",
    credential_url: "https://coursera.org/verify/R59BMLRNJK3P",
    image_url: null,
  },
  {
    id: 23,
    title: "Azure Synapse SQL Pool - Implement Polybase",
    issuer: "Coursera",
    date: "Dec 13, 2023",
    credential_url: "https://coursera.org/verify/UM558NT36J25",
    image_url: null,
  },
  {
    id: 24,
    title: "Storage in Azure",
    issuer: "Whizlabs",
    date: "Mar 13, 2025",
    credential_url: "https://coursera.org/verify/V9T1UH484L34",
    image_url: null,
  },
  {
    id: 25,
    title: "Manage Identities and Governance in Azure",
    issuer: "Whizlabs",
    date: "Mar 13, 2025",
    credential_url: "https://coursera.org/verify/XQTWT8S0QFCX",
    image_url: null,
  },
  {
    id: 26,
    title: "Certificate of Participation - SIGAP",
    issuer: "AISEC - International Conference on Artificial Intelligence & Cybersecurity",
    date: "May 12-14, 2025",
    credential_url: null,
    image_url: null,
    description:
      "Awarded for exceptional creativity, innovation, and technical excellence demonstrated at the Innovative Project Competition ExpoTech during the 4th edition of AISEC at ENSA, Cadi Ayyad University, Morocco",
  },
]

export function Certifications() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCertification, setSelectedCertification] = useState<any | null>(null)
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
    null
  )
}
