"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { FormInput } from "@/components/admin/form-input"
import { DataTable } from "@/components/admin/data-table"
import { ImagePreview } from "@/components/admin/image-preview"
import { Plus, X, Upload } from "lucide-react"

export default function AdminCertifications() {
  const [certifications, setCertifications] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    issuer: "",
    date: "",
    credential_url: "",
    image_url: "",
  })
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    fetchCertifications()
  }, [])

  const fetchCertifications = async () => {
    try {
      const { data, error } = await supabase.from("certifications").select("*").order("order_index")
      if (error) throw error
      setCertifications(data || [])
    } catch (error) {
      console.error("Error fetching certifications:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    try {
      const fileExt = file.name.split(".").pop()
      const fileName = `${Date.now()}.${fileExt}`
      const filePath = `certifications/${fileName}`

      const { error: uploadError } = await supabase.storage.from("portfolio").upload(filePath, file)

      if (uploadError) throw uploadError

      const { data } = supabase.storage.from("portfolio").getPublicUrl(filePath)

      setFormData((prev) => ({ ...prev, image_url: data.publicUrl }))
    } catch (error) {
      console.error("Error uploading image:", error)
      alert("Failed to upload image")
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingId) {
        const { error } = await supabase.from("certifications").update(formData).eq("id", editingId)
        if (error) throw error
      } else {
        const { error } = await supabase.from("certifications").insert([formData])
        if (error) throw error
      }

      setFormData({ title: "", issuer: "", date: "", credential_url: "", image_url: "" })
      setEditingId(null)
      setShowForm(false)
      fetchCertifications()
    } catch (error) {
      console.error("Error saving certification:", error)
    }
  }

  const handleEdit = (cert: any) => {
    setFormData(cert)
    setEditingId(cert.id)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return
    try {
      const { error } = await supabase.from("certifications").delete().eq("id", id)
      if (error) throw error
      fetchCertifications()
    } catch (error) {
      console.error("Error deleting certification:", error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Manage Certifications</h1>
          <p className="text-muted-foreground">Add or edit your certifications</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="gap-2">
          <Plus className="w-4 h-4" />
          Add Certification
        </Button>
      </div>

      {showForm && (
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">
              {editingId ? "Edit Certification" : "New Certification"}
            </h2>
            <button
              onClick={() => {
                setShowForm(false)
                setEditingId(null)
                setFormData({ title: "", issuer: "", date: "", credential_url: "", image_url: "" })
              }}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput label="Title" name="title" value={formData.title} onChange={handleChange} required />
            <FormInput label="Issuer" name="issuer" value={formData.issuer} onChange={handleChange} required />
            <FormInput label="Date" name="date" value={formData.date} onChange={handleChange} placeholder="2025" />
            <FormInput
              label="Credential URL"
              name="credential_url"
              value={formData.credential_url}
              onChange={handleChange}
            />

            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">Certificate Image</label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg cursor-pointer hover:bg-accent/90 transition-colors">
                  <Upload className="w-4 h-4" />
                  {uploading ? "Uploading..." : "Upload Image"}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploading}
                    className="hidden"
                  />
                </label>
                {formData.image_url && (
                  <ImagePreview
                    imageUrl={formData.image_url}
                    onRemove={() => setFormData((prev) => ({ ...prev, image_url: "" }))}
                    alt={formData.title}
                  />
                )}
              </div>
            </div>

            <Button type="submit" className="w-full">
              {editingId ? "Update Certification" : "Add Certification"}
            </Button>
          </form>
        </div>
      )}

      <DataTable
        columns={[
          { key: "title", label: "Title" },
          { key: "issuer", label: "Issuer" },
          { key: "date", label: "Date" },
        ]}
        data={certifications}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isLoading={loading}
      />
    </div>
  )
}
