import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  Compass,
  Globe2,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const highlights = [
  { icon: ShieldCheck, label: "Trusted by families worldwide" },
  { icon: Compass, label: "Structured, values-led learning" },
  { icon: Globe2, label: "Flexible classes across time zones" },
]

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#fcfbf7_53%,#fffdf7_100%)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-0 size-[24rem] rounded-full bg-gold/12 blur-3xl" />
        <div className="absolute bottom-0 right-0 size-[22rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.04),transparent_34%)]" />
        <div className="absolute left-8 top-16 h-24 w-24 rotate-45 rounded-[2rem] border border-slate-900/10 opacity-60" />
        <div className="absolute bottom-20 right-16 h-20 w-20 rounded-full border border-gold/25 opacity-60" />
        <div className="absolute right-8 top-1/3 h-28 w-28 rotate-12 rounded-[2rem] border border-slate-900/15 opacity-70" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:px-8 lg:py-28 xl:gap-20">
        <div className="max-w-2xl">
          <Badge
            variant="outline"
            className="mb-6 border-gold/40 bg-white/80 px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur"
          >
            <Sparkles className="mr-2 size-3.5 fill-gold text-gold" />
            Trusted Online Quran & Islamic Academy
          </Badge>

          <h1 className="font-heading text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05] xl:text-[3.8rem]">
            About <span className="text-primary">Quranify</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Quranify is a modern online Quran and Islamic learning academy dedicated to providing personalized, high-quality education for students of all ages across the world. Our mission is to make Quran learning accessible, structured and inspiring through qualified teachers and a flexible learning experience.
          </p>

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

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/85 px-3 py-2.5 text-sm text-slate-700 shadow-sm backdrop-blur"
              >
                <Icon className="size-4 shrink-0 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-900/10 bg-white/90 p-6 shadow-[0_35px_90px_-35px_rgba(15,23,42,0.34)] sm:p-8 lg:p-10">
            <div className="absolute right-0 top-0 size-32 rounded-bl-full bg-gold/15" />
            <div className="absolute bottom-0 left-0 size-36 rounded-tr-full bg-primary/10" />
            <div className="absolute left-5 top-5 rounded-full border border-slate-900/10 bg-white/90 px-3 py-2 shadow-lg backdrop-blur sm:left-6 sm:top-6">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <BookOpen className="size-4 text-primary" />
                Open Quran
              </div>
            </div>
            <div className="absolute right-4 top-20 rounded-full border border-slate-900/10 bg-white/95 px-3 py-2 shadow-lg backdrop-blur sm:right-6 sm:top-24">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <Globe2 className="size-4 text-gold" />
                Global Learning
              </div>
            </div>

            <div className="relative mx-auto mt-16 max-w-[23rem] sm:mt-20">
              <div className="absolute left-1/2 top-0 h-12 w-24 -translate-x-1/2 rounded-t-[2rem] border border-gold/25" />
              <div className="absolute left-1/2 top-3 h-16 w-32 -translate-x-1/2 rounded-t-[2.2rem] border border-gold/20" />
              <div className="absolute right-0 top-12 h-16 w-16 rotate-45 rounded-[1.6rem] border border-slate-900/10" />
              <div className="absolute left-0 top-12 h-16 w-16 rotate-45 rounded-[1.6rem] border border-slate-900/10" />
              <div className="absolute inset-x-5 top-14 h-24 rounded-[2rem] border border-gold/20 bg-gradient-to-br from-[#fff9ec] via-white to-[#f6ebd7] shadow-[0_20px_45px_-22px_rgba(15,23,42,0.35)]" />
              <div className="relative z-10 flex h-64 items-center justify-center rounded-[2rem] border border-slate-900/10 bg-white/90 p-6 shadow-inner">
                <div className="absolute inset-4 rounded-[1.4rem] border border-gold/20" />
                <div className="absolute -left-4 top-12 h-12 w-12 rounded-full border border-primary/20 bg-primary/10" />
                <div className="absolute -right-4 top-20 h-10 w-10 rounded-full border border-gold/20 bg-gold/10" />
                <div className="relative flex h-44 w-32 flex-col items-center justify-center rounded-[1.5rem] border border-slate-900/10 bg-gradient-to-br from-[#fbf7eb] to-white p-4 shadow-sm">
                  <BookOpen className="size-10 text-primary" />
                  <div className="mt-3 h-1.5 w-16 rounded-full bg-gold/60" />
                  <div className="mt-2 h-1.5 w-12 rounded-full bg-slate-200" />
                  <div className="mt-2 h-1.5 w-10 rounded-full bg-slate-200" />
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3 rounded-[1.2rem] border border-slate-900/10 bg-white/80 p-3 shadow-sm backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <ShieldCheck className="size-4 text-primary" />
                Qualified educators
              </div>
              <div className="flex items-center gap-1 rounded-full bg-white px-2 py-1 shadow-sm">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-3.5 fill-gold text-gold" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
