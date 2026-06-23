import { courses as coursesData } from "@/data/courses"
import type { Course, CourseCategory } from "@/lib/types/course"

function sortByOrder<T extends { sortOrder: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.sortOrder - b.sortOrder)
}

export function getAllCourses(): Course[] {
  return sortByOrder(coursesData)
}

export function getActiveCourses(): Course[] {
  return sortByOrder(coursesData.filter((c) => c.enabled))
}

export function getFeaturedCourses(): Course[] {
  return sortByOrder(coursesData.filter((c) => c.enabled && c.featured))
}

export function getCoursesByCategory(category: CourseCategory): Course[] {
  return sortByOrder(
    coursesData.filter((c) => c.enabled && c.category === category)
  )
}

export function getCourseBySlug(slug: string): Course | undefined {
  return coursesData.find((c) => c.slug === slug)
}

export function getCourseById(id: string): Course | undefined {
  return coursesData.find((c) => c.id === id)
}
