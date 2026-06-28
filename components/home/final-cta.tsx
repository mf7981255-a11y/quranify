import Link from "next/link"
import { CheckCircle2, Globe2, Clock, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

const trust = [
  { label: "Qualified Teachers", icon: GraduationCap },
  { label: "Flexible Timings", icon: Clock },
  { label: "Live Online Classes", icon: Globe2 },
  { label: "International Students Welcome", icon: CheckCircle2 },
]

export function FinalCTA() {
  return (
    <section className="relative my-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-[1.6rem] bg-white p-8 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.35)] ring-1 ring-slate-900/6 lg:flex lg:items-center lg:gap-8 lg:p-12">
        <div className="flex-1">
          <div className="mb-3 inline-flex items-center rounded-full border border-gold/30 bg-[#fffaf0] px-3 py-1 text-sm font-medium text-slate-700 shadow-sm">
            <span className="text-gold mr-2">★</span>
            Final call to action
          </div>

          <h2 className="font-heading text-3xl font-semibold text-slate-950 sm:text-4xl lg:text-5xl">
            Begin Your Quran Learning Journey Today
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Take the first step toward learning the Quran with qualified teachers, flexible schedules and a personalized learning experience designed for students around the world.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 rounded-full bg-primary px-6 text-sm font-semibold shadow-[0_18px_40px_-18px_rgba(15,23,42,0.35)]">
              <Link href="#trial">Book Your Free Trial</Link>
            </Button>

            <Button variant="outline" size="lg" className="h-12 rounded-full border-slate-900/15 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm">
              <Link href="/courses">Explore Courses</Link>
            </Button>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:gap-4">
            {trust.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 rounded-lg bg-[linear-gradient(180deg,#fffdf9_0%,#fffaf4_100%)] px-3 py-2 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#fff7e6] to-[#f3e6c2] text-primary">
                  <Icon className="size-5" />
                </div>
                <div className="text-sm font-medium text-slate-900">{label}</div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-slate-600">
            One complimentary trial class is available for every new student. After the trial, the learning plan and course fee will be finalized through mutual discussion.
          </p>
        </div>

        <div className="mt-6 flex w-full max-w-xs flex-col items-center justify-center lg:mt-0 lg:ml-6">
          <div className="rounded-xl border border-gold/10 bg-gradient-to-br from-[#fff9ec] to-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.2)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gold/10 text-gold">
              <Globe2 className="size-6" />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm font-semibold text-slate-900">Ready to begin?</p>
              <p className="mt-2 text-xs text-slate-600">Schedule a free trial and speak with our academic advisors.</p>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <Link href="#trial" className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-95">
                Book Your Free Trial
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
