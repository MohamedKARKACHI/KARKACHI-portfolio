"use client"

import type React from "react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X, Globe } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="text-foreground text-xl font-semibold hover:text-accent transition-colors">
          Mohamed Karkachi
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#about"
            onClick={(e) => handleClick(e, "#about")}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium relative group"
          >
            {t.nav.about}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
          </Link>

          <Link
            href="#education"
            onClick={(e) => handleClick(e, "#education")}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium relative group"
          >
            {t.nav.education}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
          </Link>

          <Link
            href="#skills"
            onClick={(e) => handleClick(e, "#skills")}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium relative group"
          >
            {t.nav.skills}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
          </Link>

          <Link
            href="#project"
            onClick={(e) => handleClick(e, "#project")}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium relative group"
          >
            {t.nav.experience}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
          </Link>

          <Link
            href="#personal-projects"
            onClick={(e) => handleClick(e, "#personal-projects")}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium relative group"
          >
            {t.nav.projects}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
          </Link>

          <Link
            href="#certifications"
            onClick={(e) => handleClick(e, "#certifications")}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium relative group"
          >
            {t.nav.certifications}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium relative group"
          >
            {t.nav.contact}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="w-9 px-0">
                <Globe className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("fr")}>Français</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="w-9 px-0">
                <Globe className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("fr")}>Français</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-6 px-6 py-8">
          <Link
            href="#about"
            onClick={(e) => handleClick(e, "#about")}
            className="text-muted-foreground hover:text-foreground transition-all duration-300 text-base font-medium hover:translate-x-2"
          >
            {t.nav.about}
          </Link>
          <Link
            href="#education"
            onClick={(e) => handleClick(e, "#education")}
            className="text-muted-foreground hover:text-foreground transition-all duration-300 text-base font-medium hover:translate-x-2"
          >
            {t.nav.education}
          </Link>
          <Link
            href="#skills"
            onClick={(e) => handleClick(e, "#skills")}
            className="text-muted-foreground hover:text-foreground transition-all duration-300 text-base font-medium hover:translate-x-2"
          >
            {t.nav.skills}
          </Link>
          <Link
            href="#project"
            onClick={(e) => handleClick(e, "#project")}
            className="text-muted-foreground hover:text-foreground transition-all duration-300 text-base font-medium hover:translate-x-2"
          >
            {t.nav.experience}
          </Link>
          <Link
            href="#personal-projects"
            onClick={(e) => handleClick(e, "#personal-projects")}
            className="text-muted-foreground hover:text-foreground transition-all duration-300 text-base font-medium hover:translate-x-2"
          >
            {t.nav.projects}
          </Link>
          <Link
            href="#certifications"
            onClick={(e) => handleClick(e, "#certifications")}
            className="text-muted-foreground hover:text-foreground transition-all duration-300 text-base font-medium hover:translate-x-2"
          >
            {t.nav.certifications}
          </Link>
          <Link
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="text-muted-foreground hover:text-foreground transition-all duration-300 text-base font-medium hover:translate-x-2"
          >
            {t.nav.contact}
          </Link>
        </div>
      </div>
    </nav>
  )
}
