"use client"

import {
  Clock3,
  Globe2,
  Mail,
  MessageCircleMore,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeader } from "@/components/home/section-header"
import { contactInfo } from "@/data/contact"

const contactCards = [
  {
    icon: MessageCircleMore,
    label: "WhatsApp",
    value: contactInfo.whatsapp.displayNumber,
    href: `https://wa.me/${contactInfo.whatsapp.number}?text=${encodeURIComponent(contactInfo.whatsapp.message)}`,
    helper: "Fast replies for course questions",
  },
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    helper: "Ideal for detailed inquiries",
  },
  {
    icon: Clock3,
    label: "Support Hours",
    value: "Mon–Sat · 8:00 AM – 10:00 PM GMT",
    href: null,
    helper: "We respond promptly across time zones",
  },
  {
    icon: Globe2,
    label: "Worldwide Online Classes",
    value: "Available in 20+ countries",
    href: null,
    helper: "International students are warmly welcome",
  },
]

const trustBadges = [
  {
    title: "Secure Communication",
    description: "Your information is handled with care and discretion.",
  },
  {
    title: "Fast Response",
    description: "We aim to respond quickly to every inquiry and plan request.",
  },
  {
    title: "International Students Welcome",
    description: "Flexible online learning designed for families worldwide.",
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#fffdf8_45%,#ffffff_100%)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Contact"
          title="Get in Touch"
          description="Have questions? We're here to help you begin your Quran learning journey."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.75rem] border border-slate-900/10 bg-white/80 p-6 shadow-[0_30px_90px_-35px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-7 lg:p-8">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-gold/20 text-primary">
                <Sparkles className="size-5" />
              </div>
              <div>
                <p className="font-heading text-lg font-semibold text-slate-950">
                  Start your journey with confidence
                </p>
                <p className="text-sm text-slate-600">
                  Choose a contact option that suits you best.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-4">
              {contactCards.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    className="rounded-[1.25rem] border border-slate-900/10 bg-[#fcfbf7] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_45px_-24px_rgba(15,23,42,0.25)]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                        <Icon className="size-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-slate-950">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                            className="mt-1 block text-sm text-slate-600 transition-colors hover:text-primary"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm text-slate-600">{item.value}</p>
                        )}
                        <p className="mt-2 text-sm text-slate-500">{item.helper}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-900/10 bg-white/80 p-6 shadow-[0_30px_90px_-35px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-7 lg:p-8">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-800">
                    Full Name
                  </label>
                  <Input id="name" placeholder="Your full name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-800">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="text-sm font-medium text-slate-800">
                    WhatsApp Number
                  </label>
                  <Input id="whatsapp" placeholder="+1 234 567 890" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="country" className="text-sm font-medium text-slate-800">
                    Country
                  </label>
                  <Input id="country" placeholder="Your country" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-800">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your goals, preferred schedule, or questions about our programs."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="h-11 w-full rounded-full bg-slate-950 px-6 text-sm font-medium text-white shadow-[0_16px_45px_-25px_rgba(15,23,42,0.5)] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto">
                Send Message
                <Send className="ml-2 size-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {trustBadges.map((badge) => (
            <div
              key={badge.title}
              className="flex items-start gap-3 rounded-[1.25rem] border border-slate-900/10 bg-white/70 p-4 shadow-[0_16px_50px_-30px_rgba(15,23,42,0.24)] backdrop-blur-xl"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/12 to-gold/20 text-primary">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <p className="font-heading text-base font-semibold text-slate-950">{badge.title}</p>
                <p className="mt-1 text-sm leading-7 text-slate-600">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
