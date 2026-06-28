import Link from "next/link"
import { Mail, MessageCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contactInfo } from "@/data/contact"

export function ContactOptions() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            Multiple Ways To Connect
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Choose your preferred contact method and we'll get back to you quickly.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.6rem] border border-slate-900/8 bg-white p-8 shadow-[0_20px_55px_-30px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-28px_rgba(15,23,42,0.4)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fef7e6] to-[#f3e6c2] text-primary shadow-sm">
              <MessageCircle className="size-6" />
            </div>
            <h3 className="mt-6 font-heading text-xl font-semibold text-slate-950">WhatsApp</h3>
            <p className="mt-2 text-base font-semibold text-primary">{contactInfo.whatsapp.displayNumber}</p>
            <p className="mt-3 text-sm text-slate-600">Chat directly with our support team</p>
            <Button asChild className="mt-6 w-full rounded-full bg-primary py-2 text-sm font-semibold" size="sm">
              <Link href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </Link>
            </Button>
          </div>

          <div className="rounded-[1.6rem] border border-slate-900/8 bg-white p-8 shadow-[0_20px_55px_-30px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-28px_rgba(15,23,42,0.4)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fef7e6] to-[#f3e6c2] text-primary shadow-sm">
              <Mail className="size-6" />
            </div>
            <h3 className="mt-6 font-heading text-xl font-semibold text-slate-950">Email</h3>
            <p className="mt-2 text-base font-semibold text-primary break-all">{contactInfo.email}</p>
            <p className="mt-3 text-sm text-slate-600">Send us a detailed message</p>
            <Button asChild className="mt-6 w-full rounded-full bg-primary py-2 text-sm font-semibold" size="sm">
              <Link href={`mailto:${contactInfo.email}`}>Send Email</Link>
            </Button>
          </div>

          <div className="rounded-[1.6rem] border border-slate-900/8 bg-white p-8 shadow-[0_20px_55px_-30px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-28px_rgba(15,23,42,0.4)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fef7e6] to-[#f3e6c2] text-primary shadow-sm">
              <Clock className="size-6" />
            </div>
            <h3 className="mt-6 font-heading text-xl font-semibold text-slate-950">Support Hours</h3>
            <p className="mt-2 text-base font-semibold text-primary">24/7 Available</p>
            <p className="mt-3 text-sm text-slate-600">Response within 24 hours worldwide</p>
            <div className="mt-6 rounded-full bg-gold/10 px-4 py-2 text-center text-sm font-medium text-gold">
              Always Online
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
