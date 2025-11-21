"use client"

export const dynamic = 'force-dynamic'

import type React from "react"

import { useEffect, useState } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { FormInput } from "@/components/admin/form-input"
import { FormTextarea } from "@/components/admin/form-textarea"
import { DataTable } from "@/components/admin/data-table"
import { Plus, X } from "lucide-react"

export default function AdminProjects() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    period: "",
    description: "",
    technologies: "",
    demo_url: "",
    github_url: "",
    image_url: "",
    video_url: "",
  })
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase.from("projects").select("*").order("order_index")
      if (error) throw error
      setProjects(data || [])
    } catch (error) {
      console.error("Error fetching projects:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const data = {
        ...formData,
        technologies: formData.technologies.split(",").map((t) => t.trim()),
      }

      if (editingId) {
        const { error } = await supabase.from("projects").update(data).eq("id", editingId)
        if (error) throw error
      } else {
        const { error } = await supabase.from("projects").insert([data])
        if (error) throw error
      }

      setFormData({
        title: "",
        company: "",
        period: "",
        description: "",
        technologies: "",
        demo_url: "",
        github_url: "",
        image_url: "",
        video_url: "",
      })
      setEditingId(null)
      setShowForm(false)
      fetchProjects()
    } catch (error) {
      console.error("Error saving project:", error)
    }
  }

  const handleEdit = (project: any) => {
    setFormData({
      ...project,
      technologies: project.technologies?.join(", ") || "",
    })
    setEditingId(project.id)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return
    try {
      const { error } = await supabase.from("projects").delete().eq("id", id)
      if (error) throw error
      fetchProjects()
    } catch (error) {
      console.error("Error deleting project:", error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Manage Projects</h1>
          <p className="text-muted-foreground">Add or edit your work experience</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="gap-2">
          <Plus className="w-4 h-4" />
          Add Project
        </Button>
      </div>

      {showForm && (
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">{editingId ? "Edit Project" : "New Project"}</h2>
            <button
              onClick={() => {
                setShowForm(false)
                setEditingId(null)
                setFormData({
                  title: "",
                  company: "",
                  period: "",
                  description: "",
                  technologies: "",
                  demo_url: "",
                  github_url: "",
                  image_url: "",
                  video_url: "",
                })
              }}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput label="Title" name="title" value={formData.title} onChange={handleChange} required />
            <FormInput label="Company" name="company" value={formData.company} onChange={handleChange} required />
            <FormInput
              label="Period"
              name="period"
              value={formData.period}
              onChange={handleChange}
              placeholder="e.g., April - July 2025"
              required
            />
            <FormTextarea
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Technologies (comma-separated)"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              placeholder="React, Node.js, MongoDB"
            />
            <FormInput label="Demo URL" name="demo_url" value={formData.demo_url} onChange={handleChange} />
            <FormInput label="GitHub URL" name="github_url" value={formData.github_url} onChange={handleChange} />
            <FormInput
              label="Image URL"
              name="image_url"
              value={formData.image_url}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
            <FormInput
              label="Video URL"
              name="video_url"
              value={formData.video_url}
              onChange={handleChange}
              placeholder="https://youtube.com/embed/..."
            />
            <Button type="submit" className="w-full">
              {editingId ? "Update Project" : "Add Project"}
            </Button>
          </form>
        </div>
      )}

      <DataTable
        columns={[
          { key: "company", label: "Company" },
          { key: "title", label: "Title" },
          { key: "period", label: "Period" },
        ]}
        data={projects}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isLoading={loading}
      />
    </div>
  )
}
