import { getSupabaseServerClient } from "@/lib/supabase/server"
import { Briefcase, GraduationCap, Code, User } from "lucide-react"

export default async function AdminDashboard() {
  const supabase = await getSupabaseServerClient()

  const fetchWithFallback = async (table: string) => {
    try {
      return await supabase.from(table).select("*", { count: "exact", head: true })
    } catch (error) {
      return { count: 0, error }
    }
  }

  let profileName = "Admin"
  try {
    const { data } = await supabase.from("profiles").select("*").single()
    if (data?.full_name) {
      profileName = data.full_name
    }
  } catch (error) {
    // Silently fail - profile might not exist yet
  }

  const [projectsCount, educationCount, skillsCount, certificationsCount, personalProjectsCount, otherSkillsCount] =
    await Promise.all([
      fetchWithFallback("projects"),
      fetchWithFallback("education"),
      fetchWithFallback("skills"),
      fetchWithFallback("certifications"),
      fetchWithFallback("personal_projects"),
      fetchWithFallback("other_skills"),
    ])

  const stats = [
    {
      name: "Total Projects",
      value: projectsCount.count || 0,
      icon: Briefcase,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      name: "Education",
      value: educationCount.count || 0,
      icon: GraduationCap,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      name: "Skills",
      value: skillsCount.count || 0,
      icon: Code,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      name: "Certifications",
      value: certificationsCount.count || 0,
      icon: Code,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      name: "Personal Projects",
      value: personalProjectsCount.count || 0,
      icon: Briefcase,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      name: "Other Skills",
      value: otherSkillsCount.count || 0,
      icon: Code,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, {profileName}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
            <p className="text-sm text-muted-foreground">{stat.name}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="/admin/profile" className="p-4 rounded-lg border border-border hover:bg-accent transition-colors">
            <User className="w-8 h-8 text-primary mb-2" />
            <h3 className="font-semibold text-foreground mb-1">Edit Profile</h3>
            <p className="text-sm text-muted-foreground">Update your personal information</p>
          </a>
          <a href="/admin/projects" className="p-4 rounded-lg border border-border hover:bg-accent transition-colors">
            <Briefcase className="w-8 h-8 text-primary mb-2" />
            <h3 className="font-semibold text-foreground mb-1">Manage Projects</h3>
            <p className="text-sm text-muted-foreground">Add or edit your work experience</p>
          </a>
          <a href="/admin/skills" className="p-4 rounded-lg border border-border hover:bg-accent transition-colors">
            <Code className="w-8 h-8 text-primary mb-2" />
            <h3 className="font-semibold text-foreground mb-1">Update Skills</h3>
            <p className="text-sm text-muted-foreground">Manage your technical skills</p>
          </a>
          <a href="/admin/education" className="p-4 rounded-lg border border-border hover:bg-accent transition-colors">
            <GraduationCap className="w-8 h-8 text-primary mb-2" />
            <h3 className="font-semibold text-foreground mb-1">Manage Education</h3>
            <p className="text-sm text-muted-foreground">Add or edit your education</p>
          </a>
          <a
            href="/admin/certifications"
            className="p-4 rounded-lg border border-border hover:bg-accent transition-colors"
          >
            <Code className="w-8 h-8 text-primary mb-2" />
            <h3 className="font-semibold text-foreground mb-1">Certifications</h3>
            <p className="text-sm text-muted-foreground">Manage your certifications</p>
          </a>
          <a
            href="/admin/personal-projects"
            className="p-4 rounded-lg border border-border hover:bg-accent transition-colors"
          >
            <Briefcase className="w-8 h-8 text-primary mb-2" />
            <h3 className="font-semibold text-foreground mb-1">Personal Projects</h3>
            <p className="text-sm text-muted-foreground">Manage your personal projects</p>
          </a>
        </div>
      </div>
    </div>
  )
}
