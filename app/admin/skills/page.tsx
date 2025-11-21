"use client"

export const dynamic = 'force-dynamic'

import type React from "react"

import { useEffect, useState } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { FormInput } from "@/components/admin/form-input"
import { DataTable } from "@/components/admin/data-table"
import { Plus, X } from 'lucide-react'

const SKILL_CATEGORIES = ["Programming", "Web Development", "Frameworks", "Databases"]

const DEFAULT_SKILLS = [
  { id: "1", category: "Programming", name: "C" },
  { id: "2", category: "Programming", name: "C++" },
  { id: "3", category: "Programming", name: "Java" },
  { id: "4", category: "Programming", name: "Python" },
  { id: "5", category: "Programming", name: "POO" },
  { id: "6", category: "Programming", name: "UML" },
  { id: "7", category: "Web Development", name: "HTML" },
  { id: "8", category: "Web Development", name: "CSS" },
  { id: "9", category: "Web Development", name: "JavaScript" },
  { id: "10", category: "Web Development", name: "PHP" },
  { id: "11", category: "Frameworks", name: "React.js" },
  { id: "12", category: "Frameworks", name: "React Native" },
  { id: "13", category: "Frameworks", name: "Laravel" },
  { id: "14", category: "Frameworks", name: "Express.js" },
  { id: "15", category: "Frameworks", name: "Django" },
  { id: "16", category: "Frameworks", name: "Spring Boot" },
  { id: "17", category: "Databases", name: "SQL" },
  { id: "18", category: "Databases", name: "phpMyAdmin" },
  { id: "19", category: "Databases", name: "NoSQL" },
  { id: "20", category: "Databases", name: "MongoDB" },
  { id: "21", category: "Databases", name: "MySQL" },
  { id: "22", category: "Databases", name: "Elasticsearch" }
]

export default function AdminSkills() {
  const [skills, setSkills] = useState<any[]>(DEFAULT_SKILLS)
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    category: "Programming",
    name: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingId) {
      setSkills(prev =>
        prev.map(s => s.id === editingId ? { ...s, ...formData } : s)
      )
      setEditingId(null)
    } else {
      const newSkill = {
        id: Date.now().toString(),
        ...formData
      }
      setSkills(prev => [...prev, newSkill].sort((a, b) => a.category.localeCompare(b.category)))
    }

    setFormData({ category: "Programming", name: "" })
    setShowForm(false)
  }

  const handleEdit = (skill: any) => {
    setFormData(skill)
    setEditingId(skill.id)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return
    setSkills(prev => prev.filter(s => s.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Manage Skills</h1>
          <p className="text-muted-foreground">Add or edit your technical skills</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="gap-2">
          <Plus className="w-4 h-4" />
          Add Skill
        </Button>
      </div>

      {showForm && (
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">{editingId ? "Edit Skill" : "New Skill"}</h2>
            <button
              onClick={() => {
                setShowForm(false)
                setEditingId(null)
                setFormData({ category: "Programming", name: "" })
              }}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground"
              >
                {SKILL_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <FormInput label="Skill Name" name="name" value={formData.name} onChange={handleChange} required />
            <Button type="submit" className="w-full">
              {editingId ? "Update Skill" : "Add Skill"}
            </Button>
          </form>
        </div>
      )}

      <DataTable
        columns={[
          { key: "category", label: "Category" },
          { key: "name", label: "Skill" },
        ]}
        data={skills}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isLoading={loading}
      />
    </div>
  )
}
