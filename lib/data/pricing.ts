import { pricingPlans, trialConfig } from "@/data/pricing"
import type { PricingPlan, TrialConfig } from "@/lib/types/pricing"

function sortByOrder<T extends { sortOrder: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.sortOrder - b.sortOrder)
}

export function getAllPricingPlans(): PricingPlan[] {
  return sortByOrder(pricingPlans)
}

export function getActivePricingPlans(): PricingPlan[] {
  return sortByOrder(pricingPlans.filter((p) => p.enabled))
}

export function getFeaturedPricingPlan(): PricingPlan | undefined {
  return pricingPlans.find((p) => p.enabled && p.featured)
}

export function getPricingPlanBySlug(slug: string): PricingPlan | undefined {
  return pricingPlans.find((p) => p.slug === slug)
}

export function getPricingPlansForCourse(courseId: string): PricingPlan[] {
  return sortByOrder(
    pricingPlans.filter((p) => p.enabled && p.courseIds.includes(courseId))
  )
}

export function getTrialConfig(): TrialConfig {
  return trialConfig
}
