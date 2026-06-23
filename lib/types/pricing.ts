export type BillingPeriod = "monthly" | "weekly" | "per-session" | "one-time"

export interface PricingDiscount {
  type: "percentage" | "fixed"
  value: number
  label?: string
  validUntil?: string
}

export interface PricingPlan {
  id: string
  slug: string
  name: string
  description: string
  price: number
  currency: string
  billingPeriod: BillingPeriod
  sessionsPerWeek?: number
  discount?: PricingDiscount
  enabled: boolean
  featured: boolean
  courseIds: string[]
  sortOrder: number
  createdAt: string
  updatedAt: string
}

export interface TrialConfig {
  fee: number
  currency: string
  sessions: number
  sessionDurationMinutes: number
  perks: string[]
  enabled: boolean
}
