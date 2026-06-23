import type { Testimonial } from "@/lib/types/testimonial"

const now = "2026-06-22T00:00:00.000Z"

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Ahmed",
    role: "Parent",
    location: "London, UK",
    quote:
      "My 8-year-old daughter went from struggling with letters to reciting Surah Al-Fatiha beautifully in just three months. The teachers are patient, kind, and truly gifted.",
    rating: 5,
    enabled: true,
    featured: true,
    sortOrder: 1,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "testimonial-2",
    name: "Omar Hassan",
    role: "Adult Learner",
    location: "Toronto, CA",
    quote:
      "As a busy professional, I needed flexibility. Quranify matched me with an excellent Tajweed teacher who works around my schedule. My recitation has improved dramatically.",
    rating: 5,
    enabled: true,
    featured: true,
    sortOrder: 2,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "testimonial-3",
    name: "Aisha Malik",
    role: "Hifz Student",
    location: "Dubai, UAE",
    quote:
      "The structured Hifz program with daily revision tracking kept me accountable. I've memorized 5 juz so far and feel confident in my retention thanks to my teacher's method.",
    rating: 5,
    enabled: true,
    featured: true,
    sortOrder: 3,
    createdAt: now,
    updatedAt: now,
  },
]
