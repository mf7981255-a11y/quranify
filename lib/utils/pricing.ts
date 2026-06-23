import type { PricingDiscount, PricingPlan } from "@/lib/types/pricing"

export function getEffectivePrice(plan: PricingPlan): number {
  if (!plan.discount) return plan.price

  if (plan.discount.type === "percentage") {
    return plan.price * (1 - plan.discount.value / 100)
  }

  return Math.max(0, plan.price - plan.discount.value)
}

export function formatPrice(amount: number, currency: string): string {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatDiscountLabel(discount: PricingDiscount): string {
  if (discount.label) return discount.label
  if (discount.type === "percentage") return `${discount.value}% off`
  return `Save ${discount.value}`
}
