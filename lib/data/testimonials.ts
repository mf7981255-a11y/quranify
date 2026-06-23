import { testimonials as testimonialsData } from "@/data/testimonials"
import type { Testimonial } from "@/lib/types/testimonial"

function sortByOrder<T extends { sortOrder: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.sortOrder - b.sortOrder)
}

export function getAllTestimonials(): Testimonial[] {
  return sortByOrder(testimonialsData)
}

export function getActiveTestimonials(): Testimonial[] {
  return sortByOrder(testimonialsData.filter((t) => t.enabled))
}

export function getFeaturedTestimonials(): Testimonial[] {
  return sortByOrder(
    testimonialsData.filter((t) => t.enabled && t.featured)
  )
}
