import Link from "next/link"
import { Button } from "@/components/ui/button"

export function JoinTeacherCTA() {
  return (
    <section className="mt-12 mb-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.8rem] border border-slate-900/8 bg-[linear-gradient(145deg,#fff8ee_0%,#ffffff_100%)] p-10 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.35)] text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Join Our Teaching Team</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
            We welcome qualified Quran teachers who are passionate about spreading authentic Islamic education.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Join a premium teaching community that supports your growth and connects you with motivated students worldwide.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="h-12 rounded-full bg-primary px-6 text-sm font-semibold shadow-[0_18px_40px_-18px_rgba(15,23,42,0.35)]">
              <Link href="/contact">Apply as Teacher</Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 rounded-full border-slate-900/15 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
