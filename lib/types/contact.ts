export interface ContactInfo {
  email: string
  phone?: string
  whatsapp: {
    number: string
    displayNumber: string
    message: string
  }
  office: string
}
