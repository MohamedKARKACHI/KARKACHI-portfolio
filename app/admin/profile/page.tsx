"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { FormInput } from "@/components/admin/form-input"
import { FormTextarea } from "@/components/admin/form-textarea"
import { Toast } from "@/components/admin/toast"

export default function AdminProfile() {
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase.from("profiles").select("*").single()
      if (error) throw error
      setProfile(data)
    } catch (error) {
      setToast({ message: "Failed to load profile", type: "error" })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile((prev: any) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    if (!profile.full_name?.trim()) {
      setToast({ message: "Full name is required", type: "error" })
      return false
    }
    if (!profile.title?.trim()) {
      setToast({ message: "Title is required", type: "error" })
      return false
    }
    if (!profile.bio?.trim()) {
      setToast({ message: "Bio is required", type: "error" })
      return false
    }
    return true
  }

  const handleSave = async () => {
    if (!profile || !validateForm()) return
    setSaving(true)
    try {
      const { error } = await supabase.from("profiles").update(profile).eq("id", profile.id)
      if (error) throw error
      setToast({ message: "Profile updated successfully", type: "success" })
    } catch (error: any) {
      setToast({ message: error.message || "Failed to save profile", type: "error" })
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="text-center py-8 text-muted-foreground">Loading...</div>
  if (!profile) return <div className="text-center py-8 text-muted-foreground">No profile found</div>

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Edit Profile</h1>
        <p className="text-muted-foreground">Update your personal information</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 space-y-4">
        <FormInput label="Full Name" name="full_name" value={profile.full_name} onChange={handleChange} required />
        <FormInput label="Title" name="title" value={profile.title} onChange={handleChange} required />
        <FormTextarea label="Bio" name="bio" value={profile.bio} onChange={handleChange} required rows={5} />
        <FormInput label="Location" name="location" value={profile.location || ""} onChange={handleChange} />
        <FormInput label="Email" name="email" type="email" value={profile.email || ""} onChange={handleChange} />
        <FormInput label="Phone" name="phone" value={profile.phone || ""} onChange={handleChange} />
        <FormInput
          label="LinkedIn URL"
          name="linkedin_url"
          value={profile.linkedin_url || ""}
          onChange={handleChange}
        />
        <FormInput label="GitHub URL" name="github_url" value={profile.github_url || ""} onChange={handleChange} />
      </div>

      <Button onClick={handleSave} disabled={saving} className="w-full">
        {saving ? "Saving..." : "Save Changes"}
      </Button>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  )
}
