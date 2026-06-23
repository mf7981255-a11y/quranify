import Link from "next/link"
import { ArrowRight, CheckCircle2, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"

const perks = [
  "Two free 30-minute trial sessions",
  "Personalized teacher matching",
  "No credit card required",
  "Cancel anytime — no commitment",
]

export function FreeTrial() {
  return (
    <section id="trial" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -right-20 size-64 rounded-full bg-white/5" />
            <div className="absolute -bottom-16 -left-16 size-48 rounded-full bg-gold/10" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-primary-foreground">
                <Gift className="size-4 text-gold" />
                Limited Time Offer
              </div>
              <h2 className="font-heading text-3xl font-semibold text-primary-foreground sm:text-4xl">
                Start with two free sessions
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-primary-foreground/80">
                Experience our teaching quality firsthand. Meet your teacher,
                explore our platform, and see why thousands of families trust
                Quranify.
              </p>
            </div>

            <div className="space-y-6">
              <ul className="space-y-3">
                {perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-3 text-sm text-primary-foreground sm:text-base"
                  >
                    <CheckCircle2 className="size-5 shrink-0 text-gold" />
                    {perk}
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="h-11 w-full bg-gold text-gold-foreground hover:bg-gold/90 sm:w-auto"
                asChild
              >
                <Link href="#contact">
                  Claim Free Trial
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
