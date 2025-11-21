"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import {
  LayoutDashboard,
  Briefcase,
  GraduationCap,
  Code,
  Languages,
  User,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Profile", href: "/admin/profile", icon: User },
  { name: "Projects", href: "/admin/projects", icon: Briefcase },
  { name: "Education", href: "/admin/education", icon: GraduationCap },
  { name: "Skills", href: "/admin/skills", icon: Code },
  { name: "Certifications", href: "/admin/certifications", icon: Code },
  { name: "Personal Projects", href: "/admin/personal-projects", icon: Briefcase },
  { name: "Other Skills", href: "/admin/other-skills", icon: Code },
  { name: "Languages", href: "/admin/languages", icon: Languages },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [sidebarExpanded, setSidebarExpanded] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn")
    document.cookie = "isAdminLoggedIn=; path=/; max-age=0"
    router.push("/login")
  }

  const sidebarWidth = sidebarExpanded ? "w-64" : "w-20"
  const contentPadding = isMobile ? "" : sidebarExpanded ? "lg:pl-64" : "lg:pl-20"

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && isMobile && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full bg-card border-r border-border transform transition-all duration-300 ease-in-out ${
          isMobile ? (sidebarOpen ? "translate-x-0 w-64" : "-translate-x-full w-64") : `${sidebarWidth} translate-x-0`
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            {sidebarExpanded && !isMobile && <h2 className="text-lg font-bold text-foreground">Admin</h2>}
            <button
              onClick={() => {
                if (isMobile) {
                  setSidebarOpen(false)
                } else {
                  setSidebarExpanded(!sidebarExpanded)
                }
              }}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              title={isMobile ? "Close sidebar" : sidebarExpanded ? "Collapse sidebar" : "Expand sidebar"}
            >
              {isMobile ? (
                <X className="w-5 h-5" />
              ) : sidebarExpanded ? (
                <ChevronLeft className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => isMobile && setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                  title={!sidebarExpanded && !isMobile ? item.name : ""}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {(sidebarExpanded || isMobile) && <span className="text-sm font-medium">{item.name}</span>}
                </Link>
              )
            })}
          </nav>

          {/* User info & logout */}
          <div className="p-2 border-t border-border space-y-2">
            {(sidebarExpanded || isMobile) && (
              <div className="flex items-center gap-2 px-3 py-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-foreground truncate">{user?.email || "Admin"}</p>
                  <p className="text-xs text-muted-foreground">Admin</p>
                </div>
              </div>
            )}
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="w-full justify-center gap-2 bg-transparent"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
              {(sidebarExpanded || isMobile) && <span className="text-xs">Logout</span>}
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className={`transition-all duration-300 ${contentPadding}`}>
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-card border-b border-border">
          <div className="flex items-center justify-between px-4 py-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-muted-foreground hover:text-foreground transition-colors"
              title={sidebarOpen ? "Hide sidebar" : "Show sidebar"}
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="flex-1 lg:flex-none" />
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="/" target="_blank">
                <Button variant="outline" size="sm">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
