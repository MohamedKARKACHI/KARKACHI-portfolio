"use client"

import { X } from "lucide-react"
import { useState } from "react"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    image_url?: string
    video_url?: string
    technologies?: string[]
    demo_url?: string
    github_url?: string
    project_url?: string
    company?: string
    period?: string
  } | null
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"image" | "video">("image")

  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-card">
          <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Media Tabs */}
          {(project.image_url || project.video_url) && (
            <div className="space-y-4">
              <div className="flex gap-2 border-b border-border">
                {project.image_url && (
                  <button
                    onClick={() => setActiveTab("image")}
                    className={`px-4 py-2 font-medium transition-colors ${
                      activeTab === "image"
                        ? "text-accent border-b-2 border-accent"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Image
                  </button>
                )}
                {project.video_url && (
                  <button
                    onClick={() => setActiveTab("video")}
                    className={`px-4 py-2 font-medium transition-colors ${
                      activeTab === "video"
                        ? "text-accent border-b-2 border-accent"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Video
                  </button>
                )}
              </div>

              {/* Image Tab */}
              {activeTab === "image" && project.image_url && (
                <div className="rounded-lg overflow-hidden bg-muted">
                  <img
                    src={project.image_url || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-auto object-cover max-h-96"
                  />
                </div>
              )}

              {/* Video Tab */}
              {activeTab === "video" && project.video_url && (
                <div className="rounded-lg overflow-hidden bg-muted aspect-video">
                  <iframe src={project.video_url} title={project.title} className="w-full h-full" allowFullScreen />
                </div>
              )}
            </div>
          )}

          {/* Project Info */}
          {project.company && (
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-1">Company</h3>
              <p className="text-foreground">{project.company}</p>
            </div>
          )}

          {project.period && (
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-1">Period</h3>
              <p className="text-foreground">{project.period}</p>
            </div>
          )}

          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-2">Description</h3>
            <p className="text-foreground leading-relaxed">{project.description}</p>
          </div>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          <div className="flex gap-3 pt-4">
            {(project.demo_url || project.project_url) && (
              <a
                href={project.demo_url || project.project_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-accent hover:bg-accent/80 text-white rounded-lg font-medium transition-colors"
              >
                View Demo
              </a>
            )}
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-muted hover:bg-accent text-muted-foreground hover:text-white rounded-lg font-medium transition-colors"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
