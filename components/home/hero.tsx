import Link from "next/link"
import { ArrowRight, CheckCircle2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const highlights = [
  "Certified Tajweed teachers",
  "Flexible scheduling",
  "1-on-1 live sessions",
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 size-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 -left-24 size-80 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <Badge
            variant="outline"
            className="mb-6 border-gold/40 bg-gold/10 text-gold-foreground"
          >
            <Star className="size-3 fill-gold text-gold" />
            Trusted by 5,000+ students worldwide
          </Badge>

          <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
            Learn the Quran with{" "}
            <span className="text-primary">clarity</span>,{" "}
            <span className="text-gold">confidence</span> & care
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Personalized online Quran classes for children and adults. Master
            recitation, Tajweed, and memorization with expert teachers — from
            the comfort of your home.
          </p>

          <ul className="mt-6 space-y-2.5">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-foreground sm:text-base">
                <CheckCircle2 className="size-4.5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" className="h-11 px-6" asChild>
              <Link href="#trial">
                Start Free Trial
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-11 px-6" asChild>
              <Link href="#courses">Explore Courses</Link>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 border-t border-border/60 pt-8">
            <div>
              <p className="font-heading text-2xl font-semibold text-foreground">5,000+</p>
              <p className="text-sm text-muted-foreground">Active students</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-heading text-2xl font-semibold text-foreground">120+</p>
              <p className="text-sm text-muted-foreground">Expert teachers</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="font-heading text-2xl font-semibold text-foreground">4.9</p>
              <p className="text-sm text-muted-foreground">Average rating</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-green-light p-8 shadow-xl shadow-primary/5 sm:p-10">
            <div className="absolute top-0 right-0 size-32 rounded-bl-full bg-gold/20" />
            <div className="relative space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Live 1-on-1 Session
              </div>
              <blockquote className="font-heading text-2xl leading-snug text-foreground sm:text-3xl">
                &ldquo;Verily, with hardship comes ease.&rdquo;
              </blockquote>
              <p className="text-sm text-muted-foreground">— Surah Ash-Sharh 94:6</p>
              <div className="rounded-xl border border-border/60 bg-background p-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    AK
                  </div>
                  <div>
                    <p className="text-sm font-medium">Ustadha Amina Khan</p>
                    <p className="text-xs text-muted-foreground">Tajweed Specialist · 12 yrs experience</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
