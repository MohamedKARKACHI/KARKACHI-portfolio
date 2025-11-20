"use client"

import type React from "react"

import { Trash2, Edit2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Column {
  key: string
  label: string
  render?: (value: any) => React.ReactNode
}

interface DataTableProps {
  columns: Column[]
  data: any[]
  onEdit: (item: any) => void
  onDelete: (id: string) => void
  isLoading?: boolean
}

export function DataTable({ columns, data, onEdit, onDelete, isLoading }: DataTableProps) {
  if (isLoading) {
    return <div className="text-center py-8 text-muted-foreground">Loading...</div>
  }

  if (data.length === 0) {
    return <div className="text-center py-8 text-muted-foreground">No data found</div>
  }

  return (
    <div className="overflow-x-auto border border-border rounded-lg">
      <table className="w-full">
        <thead className="bg-accent/5 border-b border-border">
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                {column.label}
              </th>
            ))}
            <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id || index} className="border-b border-border hover:bg-accent/5 transition-colors">
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 text-sm text-foreground">
                  {column.render ? column.render(item[column.key]) : item[column.key]}
                </td>
              ))}
              <td className="px-6 py-4 text-sm">
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => onEdit(item)} className="gap-2">
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => onDelete(item.id)}
                    className="gap-2 text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
