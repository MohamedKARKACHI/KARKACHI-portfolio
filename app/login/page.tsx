"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock, Mail, AlertCircle, Eye, EyeOff, Home, Sparkles } from "lucide-react"
import Link from "next/link"

// Static admin credentials
const ADMIN_EMAIL = "admin@portfolio.com"
const ADMIN_PASSWORD = "admin123"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500))

    try {
      // Check against static credentials
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        // Store login state in localStorage and cookie
        localStorage.setItem("isAdminLoggedIn", "true")
        document.cookie = "isAdminLoggedIn=true; path=/; max-age=86400" // 24 hours
        router.push("/admin")
        router.refresh()
      } else {
        throw new Error("Invalid email or password")
      }
    } catch (err: any) {
      setError(err.message || "Failed to login. Please check your credentials.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/5 to-primary/10 p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Back to Home Button */}
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300 group z-10"
      >
        <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
        <span className="text-sm font-medium">Back to Home</span>
      </Link>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-card/80 backdrop-blur-xl border-2 border-accent/30 rounded-3xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-primary mb-4 shadow-lg">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
              Admin Login
              <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            </h1>
            <p className="text-muted-foreground">Sign in to manage your portfolio</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="flex items-center gap-3 p-4 rounded-xl bg-destructive/10 border-2 border-destructive/30 animate-shake">
                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                <p className="text-sm text-destructive font-medium">{error}</p>
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-accent transition-colors" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@portfolio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-12 border-2 focus:border-accent rounded-xl bg-background/50"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Lock className="w-4 h-4 text-accent" />
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-accent transition-colors" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 pr-12 h-12 border-2 focus:border-accent rounded-xl bg-background/50"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-accent transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="mt-6 text-center p-4 rounded-xl bg-accent/10 border border-accent/20">
            <p className="text-sm text-muted-foreground mb-1">Default credentials:</p>
            <p className="text-sm font-mono font-semibold text-accent">admin@portfolio.com / admin123</p>
          </div>
        </div>
      </div>
    </div>
  )
}
