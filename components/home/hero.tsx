import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Globe2,
  GraduationCap,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const highlights = [
  "Certified Tajweed teachers",
  "Flexible scheduling",
  "1-on-1 live sessions",
]

const trustIndicators = [
  { icon: ShieldCheck, label: "Verified mentors" },
  { icon: Clock3, label: "Flexible learning plans" },
  { icon: Globe2, label: "Global student community" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#fcfbf7_55%,#ffffff_100%)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 size-[28rem] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-0 -left-20 size-[22rem] rounded-full bg-gold/12 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.04),transparent_32%)]" />
        <div className="absolute left-8 top-16 h-24 w-24 rotate-45 rounded-[2rem] border border-slate-900/10 opacity-60" />
        <div className="absolute bottom-20 right-16 h-20 w-20 rounded-full border border-slate-900/10 opacity-50" />
        <div className="absolute right-8 top-1/3 h-28 w-28 rotate-12 rounded-[2rem] border border-gold/25 opacity-70" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8 lg:py-28 xl:gap-20">
        <div className="max-w-2xl">
          <Badge
            variant="outline"
            className="mb-6 border-gold/40 bg-white/80 px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur"
          >
            <Sparkles className="mr-2 size-3.5 fill-gold text-gold" />
            Trusted by 5,000+ students worldwide
          </Badge>

          <h1 className="font-heading text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05] xl:text-[3.8rem]">
            Learn the Quran with{" "}
            <span className="text-primary">clarity</span>,{" "}
            <span className="text-gold">confidence</span> & care
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Personalized online Quran classes for children and adults. Master
            recitation, Tajweed, and memorization with expert teachers from the
            comfort of your home.
          </p>

          <ul className="mt-7 space-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 rounded-full border border-slate-900/10 bg-white/80 px-3 py-2.5 text-sm text-slate-700 shadow-sm backdrop-blur sm:text-base"
              >
                <CheckCircle2 className="size-4.5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-12 rounded-full bg-primary px-6 text-sm font-semibold shadow-[0_18px_40px_-18px_rgba(15,23,42,0.35)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
              asChild
            >
              <Link href="#trial">
                Start Free Trial
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-slate-900/15 bg-white/90 px-6 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
              asChild
            >
              <Link href="#courses">Explore Courses</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-slate-900/10 pt-6">
            {trustIndicators.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-3 py-2 text-sm text-slate-600 shadow-sm"
              >
                <Icon className="size-4 text-primary" />
                {label}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-slate-900/10 pt-6 sm:gap-8">
            <div>
              <p className="font-heading text-2xl font-semibold text-slate-950">5,000+</p>
              <p className="text-sm text-slate-600">Active students</p>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <p className="font-heading text-2xl font-semibold text-slate-950">120+</p>
              <p className="text-sm text-slate-600">Expert teachers</p>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <p className="font-heading text-2xl font-semibold text-slate-950">4.9</p>
              <p className="text-sm text-slate-600">Average rating</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[32rem] lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-900/10 bg-white p-6 shadow-[0_30px_90px_-35px_rgba(15,23,42,0.35)] sm:p-8 lg:p-10">
            <div className="absolute right-0 top-0 size-32 rounded-bl-full bg-gold/15" />
            <div className="absolute bottom-0 left-0 size-36 rounded-tr-full bg-primary/10" />

            <div className="absolute left-4 top-4 rounded-full border border-slate-900/10 bg-white/90 px-3 py-2 shadow-lg backdrop-blur sm:left-6 sm:top-6">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <Play className="size-4 fill-gold text-gold" />
                Live Classes
              </div>
            </div>

            <div className="absolute right-4 top-20 rounded-full border border-slate-900/10 bg-white/95 px-3 py-2 shadow-lg backdrop-blur sm:right-6 sm:top-24">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <GraduationCap className="size-4 text-primary" />
                Certified Teachers
              </div>
            </div>

            <div className="absolute bottom-5 left-5 rounded-full border border-slate-900/10 bg-white/95 px-3 py-2 shadow-lg backdrop-blur sm:bottom-6 sm:left-6">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <Users className="size-4 text-gold" />
                Worldwide Students
              </div>
            </div>

            <div className="relative mt-12 space-y-6 sm:mt-14">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Premium online academy
              </div>

              <div className="space-y-3">
                <blockquote className="font-heading text-2xl leading-snug text-slate-950 sm:text-3xl">
                  “Verily, with hardship comes ease.”
                </blockquote>
                <p className="text-sm text-slate-600">— Surah Ash-Sharh 94:6</p>
              </div>

              <div className="rounded-[1.4rem] border border-slate-900/10 bg-slate-50/80 p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      AK
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-950">Amina Khan</p>
                      <p className="text-xs text-slate-600">Tajweed Specialist · 12 yrs experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-white px-2.5 py-1 shadow-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-900/10 bg-white p-3 shadow-sm">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
                      Next session
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">Today · 7:30 PM</p>
                  </div>
                  <div className="rounded-2xl border border-slate-900/10 bg-white p-3 shadow-sm">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
                      Focus area
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">Tajweed & memorization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
