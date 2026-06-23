import type { TeacherSchedule } from "@/lib/types/schedule"

export type TeacherApplicationStatus =
  | "active"
  | "inactive"
  | "pending"
  | "interview"

export interface Teacher {
  id: string
  slug: string
  name: string
  title: string
  qualifications: string[]
  specialties: string[]
  bio?: string
  photoUrl: string | null
  enabled: boolean
  featured: boolean
  rating?: number
  studentCount?: number
  schedule: TeacherSchedule
  applicationStatus: TeacherApplicationStatus
  sortOrder: number
  createdAt: string
  updatedAt: string
}
