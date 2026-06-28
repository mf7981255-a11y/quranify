import Link from "next/link"
import { BookOpen, Mail, MessageCircleMore, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contactInfo } from "@/data/contact"

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#why" },
  { label: "Courses", href: "#courses" },
  { label: "Teachers", href: "#teachers" },
  { label: "Contact", href: "#contact" },
]

const programs = [
  "Noorani Qaida",
  "Nazra Quran",
  "Tajweed",
  "Hifz-ul-Quran",
  "Basic Islamic Studies",
]

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-900/10 bg-[linear-gradient(135deg,#ffffff_0%,#fffdf8_60%,#ffffff_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-gold/20 text-primary shadow-sm">
                <BookOpen className="size-4.5" />
              </span>
              <span className="font-heading text-xl font-semibold text-slate-950">
                Quran<span className="text-gold">ify</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              Learn the Quran with clarity, confidence & care.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Quranify is a modern online Quran academy dedicated to providing high-quality Quran education through personalized live classes for students around the world.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-950">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-950">
              Our Programs
            </h4>
            <ul className="mt-4 space-y-2.5">
              {programs.map((program) => (
                <li key={program}>
                  <span className="text-sm text-slate-600">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-950">
              Contact
            </h4>
            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <div>
                <p className="font-medium text-slate-800">WhatsApp</p>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block transition-colors hover:text-primary"
                >
                  {contactInfo.whatsapp.displayNumber}
                </a>
              </div>
              <div>
                <p className="font-medium text-slate-800">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="mt-1 block transition-colors hover:text-primary"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <p className="font-medium text-slate-800">Support</p>
                <p className="mt-1">Worldwide Online Classes</p>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button
                asChild
                size="sm"
                className="h-10 rounded-full bg-slate-950 px-4 text-sm font-medium text-white shadow-[0_14px_40px_-24px_rgba(15,23,42,0.45)]"
              >
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircleMore className="mr-2 size-4" />
                  WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="h-10 rounded-full border-slate-900/15 bg-white/80 px-4 text-sm font-medium text-slate-700 shadow-sm"
              >
                <a href={`mailto:${contactInfo.email}`}>
                  <Mail className="mr-2 size-4" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-900/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Quranify. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm text-slate-500 transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-3 py-1 text-sm text-slate-600 shadow-sm">
              <Sparkles className="size-3.5 text-primary" />
              Guided by care
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
