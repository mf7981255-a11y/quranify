import Link from "next/link"
import { ArrowRight, CheckCircle2, Gift, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  "One complimentary trial class",
  "Certified Quran instructors",
  "Flexible class schedule",
  "One-to-One & group classes",
  "International students welcome",
]

export function FreeTrial() {
  return (
    <section id="trial" className="bg-[linear-gradient(135deg,#ffffff_0%,#fcfbf7_60%,#ffffff_100%)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-900/10 bg-white/80 p-8 shadow-[0_30px_90px_-35px_rgba(15,23,42,0.32)] backdrop-blur-xl sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -right-20 size-64 rounded-full bg-primary/8 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 size-56 rounded-full bg-gold/12 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.05),transparent_34%)]" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-sm font-medium text-slate-700">
                <Gift className="size-4 text-gold" />
                One Complimentary Trial
              </div>
              <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.02em] text-slate-950 sm:text-4xl lg:text-[2.75rem]">
                Start Your Quran Learning Journey Today
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Experience our teaching methodology with one complimentary trial class before enrollment. Trial duration is determined by the academy and may range from 15 to 40 minutes, configurable by admin. After the trial, continuation depends on admin approval and mutual fee agreement.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="h-12 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_16px_40px_-16px_rgba(15,23,42,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
                  asChild
                >
                  <Link href="#contact">
                    Book Your Free Trial
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-full border-slate-900/15 bg-white/90 px-6 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
                  asChild
                >
                  <Link href="#contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-900/10 bg-slate-50/80 p-6 shadow-inner shadow-slate-900/5">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                <Sparkles className="size-4 text-gold" />
                Why learners choose us
              </div>
              <ul className="mt-5 space-y-3">
                {highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-3 rounded-2xl border border-slate-900/10 bg-white/80 px-3 py-3 text-sm text-slate-700 shadow-sm"
                  >
                    <CheckCircle2 className="size-5 shrink-0 text-primary" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/10 to-primary/10 p-4 text-sm leading-7 text-slate-600">
                “No credit card required. Simple registration. Personalized learning.”
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
