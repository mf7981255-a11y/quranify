import Link from "next/link"
import { ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TeachersHero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-8 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 right-8 h-56 w-56 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute left-16 top-24 h-24 w-24 rounded-full border border-slate-900/10 opacity-60" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center rounded-full border border-gold/30 bg-[#fffaf0] px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <ShieldCheck className="mr-2 size-4 fill-gold text-gold" />
            Qualified Quran Teachers
          </div>

          <h1 className="font-heading text-4xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-5xl lg:text-[3.6rem]">
            Meet Our Dedicated Quran Teachers
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Our teachers are committed to helping every student learn the Quran with confidence, proper Tajweed and authentic Islamic guidance through personalized online classes.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 rounded-full bg-primary px-6 text-sm font-semibold shadow-[0_18px_40px_-18px_rgba(15,23,42,0.35)]">
              <Link href="#teachers">Book Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 rounded-full border-slate-900/15 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto max-w-[32rem] lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,#fff8ec_0%,#ffffff_100%)] p-6 shadow-[0_35px_90px_-35px_rgba(15,23,42,0.35)] sm:p-8">
            <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-gold/10 blur-2xl" />
            <div className="absolute left-6 bottom-10 h-20 w-20 rounded-full bg-primary/10 blur-2xl" />
            <div className="relative z-10">
              <div className="mx-auto grid h-[22rem] max-w-[26rem] gap-4 rounded-[1.75rem] border border-gold/15 bg-white/90 p-6 shadow-inner">
                <div className="grid grid-cols-[1.2fr_0.8fr] gap-4">
                  <div className="rounded-[1.5rem] bg-gold/5 p-4">
                    <div className="text-xs uppercase tracking-[0.24em] text-gold">Quran Study</div>
                    <div className="mt-4 h-24 rounded-[1.25rem] bg-gradient-to-br from-[#fff5e0] to-[#fffaef] p-4">
                      <div className="h-3 rounded-full bg-gold/60 w-3/5" />
                      <div className="mt-3 h-3 rounded-full bg-slate-200 w-4/5" />
                      <div className="mt-3 h-3 rounded-full bg-slate-200 w-2/3" />
                    </div>
                  </div>
                  <div className="rounded-[1.5rem] bg-slate-950/5 p-4">
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-700">Islamic Rhythm</div>
                    <div className="mt-4 grid gap-2">
                      <div className="h-3 rounded-full bg-gold/60 w-3/4" />
                      <div className="h-3 rounded-full bg-slate-200 w-2/3" />
                      <div className="h-3 rounded-full bg-slate-200 w-1/2" />
                    </div>
                  </div>
                </div>

                <div className="relative flex-1 overflow-hidden rounded-[1.5rem] border border-gold/15 bg-[radial-gradient(circle_at_top_left,rgba(250,232,188,0.9),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,248,238,0.95),transparent_35%)] p-5">
                  <div className="absolute left-4 top-4 h-16 w-16 rounded-full border border-gold/10 bg-gold/10" />
                  <div className="absolute right-4 top-10 h-12 w-12 rounded-full border border-primary/15 bg-primary/10" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-center gap-3 text-sm text-slate-700">
                      <div className="h-2 w-2 rounded-full bg-gold" />
                      Elegant learning patterns
                    </div>
                    <div className="grid gap-3">
                      <div className="h-8 rounded-full bg-slate-200/80" />
                      <div className="h-8 rounded-full bg-slate-200/80" />
                      <div className="h-8 rounded-full bg-slate-200/80" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-[1.2rem] border border-gold/20 bg-white" />
                      <div>
                        <p className="text-sm font-semibold text-slate-950">Premium Islamic design</p>
                        <p className="text-xs text-slate-500">Soft geometry and learning flow</p>
                      </div>
                    </div>
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
