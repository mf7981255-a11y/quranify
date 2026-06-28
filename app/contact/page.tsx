import { Navbar } from "@/components/home/navbar"
import { Footer } from "@/components/home/footer"
import { ContactHero } from "@/components/contact/hero"
import { ContactOptions } from "@/components/contact/contact-options"
import { ContactForm } from "@/components/contact/contact-form"
import { TrialBookingForm } from "@/components/contact/trial-booking-form"
import { FAQSection } from "@/components/contact/faq-section"
import { BusinessInfo } from "@/components/contact/business-info"
import { PrivacyTrust } from "@/components/contact/privacy-trust"
import { FinalContactCTA } from "@/components/contact/final-cta"

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactOptions />
        <ContactForm />
        <TrialBookingForm />
        <FAQSection />
        <BusinessInfo />
        <PrivacyTrust />
        <FinalContactCTA />
      </main>
      <Footer />
    </>
  )
}
