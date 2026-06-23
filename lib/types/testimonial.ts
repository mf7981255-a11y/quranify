export interface Testimonial {
  id: string
  name: string
  role: string
  location?: string
  quote: string
  rating: number
  enabled: boolean
  featured: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
}
