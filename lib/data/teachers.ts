import { teachers as teachersData } from "@/data/teachers"
import type { Teacher } from "@/lib/types/teacher"

function sortByOrder<T extends { sortOrder: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.sortOrder - b.sortOrder)
}

export function getAllTeachers(): Teacher[] {
  return sortByOrder(teachersData)
}

export function getActiveTeachers(): Teacher[] {
  return sortByOrder(
    teachersData.filter((t) => t.enabled && t.applicationStatus === "active")
  )
}

export function getFeaturedTeachers(): Teacher[] {
  return sortByOrder(
    teachersData.filter(
      (t) => t.enabled && t.featured && t.applicationStatus === "active"
    )
  )
}

export function getTeacherBySlug(slug: string): Teacher | undefined {
  return teachersData.find((t) => t.slug === slug)
}

export function getTeacherById(id: string): Teacher | undefined {
  return teachersData.find((t) => t.id === id)
}
