export type PaymentMethodType = "mobile-wallet" | "bank-transfer"

export interface PaymentMethod {
  id: string
  slug: string
  name: string
  type: PaymentMethodType
  accountTitle?: string
  accountNumber?: string
  iban?: string
  instructions?: string
  enabled: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
}
