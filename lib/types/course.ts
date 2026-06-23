import type { LucideIconName } from "@/lib/icons"

export type CourseLevel =
  | "beginner"
  | "intermediate"
  | "advanced"
  | "all-levels"

export type CourseCategory = "quran" | "islamic-studies" | "format"

export type CourseFormat = "one-to-one" | "group"

export interface CourseDuration {
  minMonths?: number
  maxMonths?: number
  label: string
}

export interface Course {
  id: string
  slug: string
  title: string
  description: string
  shortDescription?: string
  level: CourseLevel
  category: CourseCategory
  formats: CourseFormat[]
  duration: CourseDuration
  icon: LucideIconName
  enabled: boolean
  featured: boolean
  sortOrder: number
  pricingPlanIds: string[]
  createdAt: string
  updatedAt: string
}
