import { paymentMethods as paymentMethodsData } from "@/data/payment-methods"
import type { PaymentMethod } from "@/lib/types/payment-method"

function sortByOrder<T extends { sortOrder: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.sortOrder - b.sortOrder)
}

export function getAllPaymentMethods(): PaymentMethod[] {
  return sortByOrder(paymentMethodsData)
}

export function getActivePaymentMethods(): PaymentMethod[] {
  return sortByOrder(paymentMethodsData.filter((p) => p.enabled))
}

export function getPaymentMethodBySlug(slug: string): PaymentMethod | undefined {
  return paymentMethodsData.find((p) => p.slug === slug)
}
