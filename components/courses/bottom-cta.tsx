import Link from "next/link"
import { Button } from "@/components/ui/button"

export function BottomCTA() {
  return (
    <section className="mt-12 mb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.6rem] bg-white p-8 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.35)] ring-1 ring-slate-900/6 text-center">
          <h3 className="font-heading text-2xl font-semibold text-slate-950">Ready to Begin Your Quran Journey?</h3>
          <p className="mt-3 text-sm text-slate-600">Start with a free trial lesson and discuss your personalised plan with our advisors.</p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Button asChild size="lg" className="h-12 rounded-full bg-primary px-6 text-sm font-semibold shadow-[0_18px_40px_-18px_rgba(15,23,42,0.35)]">
              <Link href="#trial">Book Free Trial</Link>
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
