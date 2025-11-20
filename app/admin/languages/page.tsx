"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { FormInput } from "@/components/admin/form-input"
import { DataTable } from "@/components/admin/data-table"
import { Plus, X } from "lucide-react"

const PROFICIENCY_LEVELS = ["Débutant", "Intermédiaire", "Avancé", "Langue maternelle"]

export default function AdminLanguages() {
  const [languages, setLanguages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    proficiency: "Intermédiaire",
  })
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    fetchLanguages()
  }, [])

  const fetchLanguages = async () => {
    try {
      const { data, error } = await supabase.from("languages").select("*").order("order_index")
      if (error) throw error
      setLanguages(data || [])
    } catch (error) {
      console.error("Error fetching languages:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingId) {
        const { error } = await supabase.from("languages").update(formData).eq("id", editingId)
        if (error) throw error
      } else {
        const { error } = await supabase.from("languages").insert([formData])
        if (error) throw error
      }

      setFormData({ name: "", proficiency: "Intermédiaire" })
      setEditingId(null)
      setShowForm(false)
      fetchLanguages()
    } catch (error) {
      console.error("Error saving language:", error)
    }
  }

  const handleEdit = (lang: any) => {
    setFormData(lang)
    setEditingId(lang.id)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return
    try {
      const { error } = await supabase.from("languages").delete().eq("id", id)
      if (error) throw error
      fetchLanguages()
    } catch (error) {
      console.error("Error deleting language:", error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Manage Languages</h1>
          <p className="text-muted-foreground">Add or edit your languages</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="gap-2">
          <Plus className="w-4 h-4" />
          Add Language
        </Button>
      </div>

      {showForm && (
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">{editingId ? "Edit Language" : "New Language"}</h2>
            <button
              onClick={() => {
                setShowForm(false)
                setEditingId(null)
                setFormData({ name: "", proficiency: "Intermédiaire" })
              }}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput label="Language Name" name="name" value={formData.name} onChange={handleChange} required />
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Proficiency Level</label>
              <select
                name="proficiency"
                value={formData.proficiency}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground"
              >
                {PROFICIENCY_LEVELS.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
            <Button type="submit" className="w-full">
              {editingId ? "Update Language" : "Add Language"}
            </Button>
          </form>
        </div>
      )}

      <DataTable
        columns={[
          { key: "name", label: "Language" },
          { key: "proficiency", label: "Proficiency" },
        ]}
        data={languages}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isLoading={loading}
      />
    </div>
  )
}
