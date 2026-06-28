import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FinalContactCTA() {
  return (
    <section className="mt-12 mb-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.8rem] border border-slate-900/8 bg-[linear-gradient(145deg,#fff8ee_0%,#ffffff_100%)] p-10 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.35)] text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Start Your Quran Learning Journey Today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Join thousands of students learning the Quran with qualified teachers and personalized guidance.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="h-12 rounded-full bg-primary px-6 text-sm font-semibold shadow-[0_18px_40px_-18px_rgba(15,23,42,0.35)]">
              <Link href="#trial-form">Book Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 rounded-full border-slate-900/15 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm">
              <Link href="#contact-form">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
