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

export default function AdminEducation() {
  const [education, setEducation] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    institution: "",
    degree: "",
    field: "",
    location: "",
    start_date: "",
    end_date: "",
    description: "",
  })
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    fetchEducation()
  }, [])

  const fetchEducation = async () => {
    try {
      const { data, error } = await supabase.from("education").select("*").order("order_index")
      if (error) throw error
      setEducation(data || [])
    } catch (error) {
      console.error("Error fetching education:", error)
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
      if (editingId) {
        const { error } = await supabase.from("education").update(formData).eq("id", editingId)
        if (error) throw error
      } else {
        const { error } = await supabase.from("education").insert([formData])
        if (error) throw error
      }

      setFormData({
        institution: "",
        degree: "",
        field: "",
        location: "",
        start_date: "",
        end_date: "",
        description: "",
      })
      setEditingId(null)
      setShowForm(false)
      fetchEducation()
    } catch (error) {
      console.error("Error saving education:", error)
    }
  }

  const handleEdit = (item: any) => {
    setFormData(item)
    setEditingId(item.id)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return
    try {
      const { error } = await supabase.from("education").delete().eq("id", id)
      if (error) throw error
      fetchEducation()
    } catch (error) {
      console.error("Error deleting education:", error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Manage Education</h1>
          <p className="text-muted-foreground">Add or edit your education history</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="gap-2">
          <Plus className="w-4 h-4" />
          Add Education
        </Button>
      </div>

      {showForm && (
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">{editingId ? "Edit Education" : "New Education"}</h2>
            <button
              onClick={() => {
                setShowForm(false)
                setEditingId(null)
                setFormData({
                  institution: "",
                  degree: "",
                  field: "",
                  location: "",
                  start_date: "",
                  end_date: "",
                  description: "",
                })
              }}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput
              label="Institution"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              required
            />
            <FormInput label="Degree" name="degree" value={formData.degree} onChange={handleChange} required />
            <FormInput label="Field of Study" name="field" value={formData.field} onChange={handleChange} required />
            <FormInput label="Location" name="location" value={formData.location} onChange={handleChange} />
            <FormInput
              label="Start Date"
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
              placeholder="2023"
              required
            />
            <FormInput
              label="End Date"
              name="end_date"
              value={formData.end_date}
              onChange={handleChange}
              placeholder="2026"
              required
            />
            <FormTextarea label="Description" name="description" value={formData.description} onChange={handleChange} />
            <Button type="submit" className="w-full">
              {editingId ? "Update Education" : "Add Education"}
            </Button>
          </form>
        </div>
      )}

      <DataTable
        columns={[
          { key: "institution", label: "Institution" },
          { key: "degree", label: "Degree" },
          { key: "field", label: "Field" },
          { key: "start_date", label: "Start Date" },
        ]}
        data={education}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isLoading={loading}
      />
    </div>
  )
}
