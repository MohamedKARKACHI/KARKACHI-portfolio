"use client"

export const dynamic = 'force-dynamic'

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FormInput } from "@/components/admin/form-input"
import { DataTable } from "@/components/admin/data-table"
import { Plus, X } from 'lucide-react'

const OTHER_SKILL_CATEGORIES = ["Networking", "Cloud & DevOps", "Virtualization", "Specializations", "Tools"]

const DEFAULT_OTHER_SKILLS = [
  { id: "1", category: "Networking", name: "CCNA1" },
  { id: "2", category: "Networking", name: "CCNA2" },
  { id: "3", category: "Networking", name: "CCNA3" },
  { id: "4", category: "Cloud & DevOps", name: "AZ104" },
  { id: "5", category: "Cloud & DevOps", name: "AZ500" },
  { id: "6", category: "Cloud & DevOps", name: "AZ900" },
  { id: "7", category: "Cloud & DevOps", name: "Docker" },
  { id: "8", category: "Cloud & DevOps", name: "Kubernetes" },
  { id: "9", category: "Virtualization", name: "Proxmox" },
  { id: "10", category: "Virtualization", name: "ESXi" },
  { id: "11", category: "Virtualization", name: "VMware vSphere" },
  { id: "12", category: "Virtualization", name: "VirtualBox" },
  { id: "13", category: "Specializations", name: "REST API Design" },
  { id: "14", category: "Specializations", name: "Database Optimization" },
  { id: "15", category: "Tools", name: "Photoshop" },
  { id: "16", category: "Tools", name: "Illustrator" }
]

export default function AdminOtherSkills() {
  const [skills, setSkills] = useState<any[]>(DEFAULT_OTHER_SKILLS)
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    category: "Networking",
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

    setFormData({ category: "Networking", name: "" })
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Manage Other Skills</h1>
          <p className="text-muted-foreground">Add or edit specialized skills</p>
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
                setFormData({ category: "Networking", name: "" })
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
                {OTHER_SKILL_CATEGORIES.map((cat) => (
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
