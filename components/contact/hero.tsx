import Link from "next/link"
import { Mail, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contactInfo } from "@/data/contact"

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-8 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-8 h-56 w-56 rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-gold/30 bg-[#fffaf0] px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <Phone className="mr-2 size-4 fill-gold text-gold" />
            We're Here To Help
          </div>

          <h1 className="font-heading text-4xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-5xl lg:text-[3.6rem]">
            Get In Touch With Quranify
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-base leading-8 text-slate-600 sm:text-lg">
            Have questions about our courses or want to book your complimentary trial class? Our team is ready to help you begin your Quran learning journey.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="h-12 rounded-full bg-primary px-6 text-sm font-semibold shadow-[0_18px_40px_-18px_rgba(15,23,42,0.35)]">
              <Link href="#trial-form">Book Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 rounded-full border-slate-900/15 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm">
              <Link href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
